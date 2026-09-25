import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import {
  PagesController,
  SectionsController,
  PublicPagesController,
} from "./pages.controller";
import { PagesService } from "./pages.service";
import { SiteService } from "./site.service";
import { SiteController } from "./site.controller";

@Module({
  imports: [AuthModule],
  controllers: [
    PagesController,
    SectionsController,
    PublicPagesController,
    SiteController,
  ],
  providers: [PagesService, SiteService],
})
export class PagesModule {}
