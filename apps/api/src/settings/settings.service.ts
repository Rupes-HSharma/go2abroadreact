import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { UpdateWebsiteSettingsDto } from "./settings.dto";

@Injectable()
export class SettingsService {
  constructor(private readonly prisma: PrismaService) {}
  get() { return this.prisma.websiteSetting.findUnique({ where: { key: "default" } }); }
  create(data: UpdateWebsiteSettingsDto) { return this.prisma.websiteSetting.create({ data: { key: "default", siteName: data.siteName ?? "Go2Abroad", ...data } }); }
  update(data: UpdateWebsiteSettingsDto) { return this.prisma.websiteSetting.upsert({ where: { key: "default" }, update: data, create: { key: "default", siteName: data.siteName ?? "Go2Abroad", ...data } }); }
  delete() { return this.prisma.websiteSetting.deleteMany({ where: { key: "default" } }); }
}
