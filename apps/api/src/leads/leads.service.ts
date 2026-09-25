import { Injectable, NotFoundException } from "@nestjs/common";
import { LeadStatus, Prisma } from "@prisma/client";
import { PrismaService } from "../prisma.service";
import { CreateLeadDto, UpdateLeadDto } from "./leads.dto";

@Injectable()
export class LeadsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateLeadDto) {
    return this.prisma.lead.create({
      data: {
        ...data,
        email: data.email.trim().toLowerCase(),
        firstName: data.firstName.trim(),
        phone: data.phone.trim(),
        destination: data.destination?.trim() || null,
        interest: data.interest?.trim() || null,
        message: data.message.trim(),
      },
    });
  }

  list(status?: string) {
    const where: Prisma.LeadWhereInput = status && Object.values(LeadStatus).includes(status as LeadStatus)
      ? { status: status as LeadStatus }
      : {};
    return this.prisma.lead.findMany({ where, orderBy: { createdAt: "desc" } });
  }

  async update(id: string, data: UpdateLeadDto) {
    const lead = await this.prisma.lead.findUnique({ where: { id } });
    if (!lead) throw new NotFoundException("Lead not found.");
    return this.prisma.lead.update({ where: { id }, data: { status: data.status as LeadStatus } });
  }
}
