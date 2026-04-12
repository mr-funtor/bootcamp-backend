import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./profile/profile.module";
import { LinksModule } from "./links/links.module";
import { UploadModule } from "./upload/upload.module";
import { PrismaService } from "./prisma";
import { JwtService } from "./common/jwt.service";
import { HealthModule } from "./health/health.module";

@Module({
  imports: [AuthModule, ProfileModule, LinksModule, UploadModule, HealthModule],
  providers: [PrismaService, JwtService],
  exports: [PrismaService, JwtService],
})
export class AppModule {}

