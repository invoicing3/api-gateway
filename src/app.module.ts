import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { IamModule } from './iam/iam.module';
import { CatalogModule } from './catalog/catalog.module';
import hostsConfig from './config/hosts.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        hostsConfig
      ]
    }),
    IamModule,
    CatalogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
