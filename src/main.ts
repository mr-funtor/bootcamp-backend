import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  app.enableCors({
    origin: [process.env.FRONTEND_ORIGIN, 
      'http://charlesmonroe.online',
    'https://charlesmonroe.online', // Always include https just in case
    'http://www.charlesmonroe.online'],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  });

  const port = process.env.PORT || 3001;
  await app.listen(port, "0.0.0.0");
  Logger.log(`Backend running on http://localhost:${port}/api`, "Bootstrap");
}

bootstrap();

