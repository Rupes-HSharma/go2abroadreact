import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { randomBytes, createHash } from "node:crypto";
import { PrismaService } from "../prisma.service";
import { AdminLoginDto, StudentRegisterDto } from "./dto/auth.dto";
import { Prisma, UserRole, UserStatus } from "@prisma/client";

const publicUser = { id: true, email: true, name: true, role: true, status: true } as const;

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwt: JwtService, private readonly config: ConfigService) {}

  async registerStudent(dto: StudentRegisterDto) {
    const email = dto.email.toLowerCase();
    if (await this.prisma.user.findUnique({ where: { email } })) throw new ConflictException("Email is already registered");
    const passwordHash = await bcrypt.hash(dto.password, 12);
    const user = await this.prisma.user.create({ data: { email, name: dto.name, passwordHash, role: "STUDENT" }, select: publicUser });
    return this.issueTokens(user);
  }

  async login(dto: AdminLoginDto, allowedRoles: string[]) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } });
    if (!user || user.deletedAt || !user.passwordHash || !allowedRoles.includes(user.role) || user.status !== "ACTIVE" || !(await bcrypt.compare(dto.password, user.passwordHash))) {
      throw new UnauthorizedException("Invalid email or password");
    }
    await this.prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });
    return this.issueTokens(user);
  }

  async logout(refreshToken: string): Promise<void> {
    await this.prisma.authSession.updateMany({ where: { tokenHash: this.hash(refreshToken), revokedAt: null }, data: { revokedAt: new Date() } });
  }

  async requestPasswordReset(email: string): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (user) {
      const token = randomBytes(32).toString("hex");
      const minutes = Number(this.config.get("PASSWORD_RESET_EXPIRES_MINUTES", 30));
      await this.prisma.user.update({ where: { id: user.id }, data: { resetTokenHash: this.hash(token), resetTokenExpiresAt: new Date(Date.now() + minutes * 60000) } });
      // Send `token` through the configured email provider in production.
      void token;
    }
    return { message: "If that email exists, password reset instructions will be sent." };
  }

  async resetPassword(token: string, newPassword: string): Promise<{ message: string }> {
    const user = await this.prisma.user.findFirst({ where: { resetTokenHash: this.hash(token), resetTokenExpiresAt: { gt: new Date() } } });
    if (!user) throw new UnauthorizedException("Invalid or expired reset token");
    await this.prisma.user.update({ where: { id: user.id }, data: { passwordHash: await bcrypt.hash(newPassword, 12), resetTokenHash: null, resetTokenExpiresAt: null } });
    await this.prisma.authSession.updateMany({ where: { userId: user.id, revokedAt: null }, data: { revokedAt: new Date() } });
    return { message: "Password has been reset successfully." };
  }

  async refresh(refreshToken: string) {
    return this.prisma.$transaction(async (tx) => {
      const session = await tx.authSession.findUnique({ where: { tokenHash: this.hash(refreshToken) }, include: { user: true } });
      if (!session || session.revokedAt || session.expiresAt <= new Date() || session.user.deletedAt || session.user.status !== "ACTIVE") throw new UnauthorizedException("Session expired.");
      const consumed = await tx.authSession.updateMany({ where: { id: session.id, revokedAt: null }, data: { revokedAt: new Date() } });
      if (consumed.count !== 1) throw new UnauthorizedException("Session already refreshed.");
      return this.issueTokens(session.user, tx);
    });
  }

  private async issueTokens(user: { id: string; email: string; name: string | null; role: UserRole; status: UserStatus }, db: Prisma.TransactionClient = this.prisma) {
    const refreshToken = randomBytes(48).toString("hex");
    const session = await db.authSession.create({ data: { userId: user.id, tokenHash: this.hash(refreshToken), expiresAt: new Date(Date.now() + 7 * 86400000) } });
    const accessToken = await this.jwt.signAsync({ sub: user.id, sid: session.id, role: user.role });
    return { accessToken, refreshToken, user: { id: user.id, email: user.email, name: user.name, role: user.role, status: user.status } };
  }

  private hash(value: string): string { return createHash("sha256").update(value).digest("hex"); }
}
