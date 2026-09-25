import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  SetMetadata,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import type { Request } from "express";
import { PrismaService } from "../prisma.service";

export type CmsActor = { id: string; role: string; sessionId: string };
export type CmsRequest = Request & { actor: CmsActor };
export const PublishPermission = () => SetMetadata("cms:publish", true);
export const CmsRoles = (...roles: string[]) => SetMetadata("cms:roles", roles);
export const ADMIN_ROLES = [
  "SUPER_ADMIN",
  "ADMIN",
  "CONTENT_MANAGER",
  "SEO_MANAGER",
  "EDITOR",
];
export const CMS_ROLES = [
  ...ADMIN_ROLES,
  "COUNSELLOR",
];

@Injectable()
export class CmsGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtService,
    private readonly prisma: PrismaService,
    private readonly reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<CmsRequest>();
    const token = request.headers.authorization?.match(/^Bearer (\S+)$/)?.[1];
    let payload: { sub: string; sid: string; purpose?: string };
    try {
      payload = await this.jwt.verifyAsync(token ?? "", {
        algorithms: ["HS256"],
      });
      if (
        typeof payload.sub !== "string" ||
        typeof payload.sid !== "string" ||
        !payload.sub ||
        !payload.sid ||
        payload.purpose
      )
        throw new Error();
    } catch {
      throw new UnauthorizedException("Please sign in again.");
    }
    const session = await this.prisma.authSession.findUnique({
      where: { id: payload.sid },
      include: { user: true },
    });
    if (
      !session ||
      session.userId !== payload.sub ||
      session.revokedAt ||
      session.expiresAt <= new Date() ||
      session.user.status !== "ACTIVE" ||
      session.user.deletedAt
    )
      throw new UnauthorizedException("Session expired.");
    if (!CMS_ROLES.includes(session.user.role))
      throw new ForbiddenException("Content management permission required.");
    const allowedRoles = this.reflector.getAllAndOverride<string[]>(
      "cms:roles",
      [context.getHandler(), context.getClass()],
    );
    if (allowedRoles && !allowedRoles.includes(session.user.role))
      throw new ForbiddenException("You do not have permission to access this module.");
    const publishing = this.reflector.getAllAndOverride<boolean>(
      "cms:publish",
      [context.getHandler(), context.getClass()],
    );
    if (
      publishing &&
      !["SUPER_ADMIN", "ADMIN", "CONTENT_MANAGER"].includes(session.user.role)
    ) {
      throw new ForbiddenException(
        "Publishing requires an administrator or content manager.",
      );
    }
    request.actor = {
      id: session.userId,
      role: session.user.role,
      sessionId: session.id,
    };
    return true;
  }
}
