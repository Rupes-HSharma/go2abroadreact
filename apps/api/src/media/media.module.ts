import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MediaController } from "./media.controller";
import { MediaService } from "./media.service";
import { FileStorage, LocalFileStorage } from "./storage";

@Module({
  imports: [AuthModule],
  controllers: [MediaController],
  providers: [
    MediaService,
    { provide: FileStorage, useClass: LocalFileStorage },
  ],
})
export class MediaModule {}
