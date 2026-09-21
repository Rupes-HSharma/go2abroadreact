import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlogController, PublicBlogController } from "./blog.controller";
import { BlogService } from "./blog.service";

@Module({ imports: [AuthModule], controllers: [BlogController, PublicBlogController], providers: [BlogService] })
export class BlogModule {}
