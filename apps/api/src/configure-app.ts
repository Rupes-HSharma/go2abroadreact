import { INestApplication, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { join } from "node:path";
import * as express from "express";
import helmet from "helmet";
import { MEDIA_DIRECTORY } from "./media/storage";

export function configureApp(app: INestApplication, shutdownHooks = true) {
  app.use(express.json({ limit: "1mb" }));
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginResourcePolicy: { policy: "cross-origin" },
    }),
  );
  app.enableCors({
    origin: (
      process.env.CORS_ORIGINS ??
      "http://localhost:3000,http://localhost:3001,http://localhost:3002,http://localhost:5173,http://127.0.0.1:3000,http://127.0.0.1:3001,http://127.0.0.1:3002,http://127.0.0.1:5173"
    ).split(","),
    allowedHeaders: ["Content-Type", "Authorization"],
  });
  app.getHttpAdapter().use(
    "/uploads/cms",
    express.static(MEDIA_DIRECTORY, {
      setHeaders: (res, filename) => {
        if (/\.(pdf|txt)$/.test(filename))
          res.setHeader("Content-Disposition", "attachment");
        res.setHeader("X-Content-Type-Options", "nosniff");
      },
    }),
  );
  app
    .getHttpAdapter()
    .use("/uploads", express.static(join(__dirname, "uploads")));
  const config = new DocumentBuilder()
    .setTitle("Go2Abroad API")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  SwaggerModule.setup("docs", app, SwaggerModule.createDocument(app, config));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  if (shutdownHooks) app.enableShutdownHooks();
}
