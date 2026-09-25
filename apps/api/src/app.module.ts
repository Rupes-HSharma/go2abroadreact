import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { HealthController } from "./health.controller";
import { AppController } from "./app.controller";
import { AuthModule } from "./auth/auth.module";
import { SettingsModule } from "./settings/settings.module";
import { PagesModule } from "./pages/pages.module";
import { PrismaModule } from "./prisma.module";
import { MediaModule } from "./media/media.module";
import { LeadsModule } from "./leads/leads.module";
import { CatalogModule } from "./catalog/catalog.module";
import { APP_GUARD } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { UsersModule } from "./users/users.module";
import { BlogModule } from "./blog/blog.module";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, ThrottlerModule.forRoot([{ ttl: 60000, limit: 240 }]), AuthModule, SettingsModule, PagesModule, MediaModule, LeadsModule, CatalogModule, UsersModule, BlogModule],
  controllers: [AppController, HealthController],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
