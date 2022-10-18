import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { IamModule } from './iam/iam.module';
import { CatalogModule } from './catalog/catalog.module';
import hostsConfig from './config/hosts.config';
import { LoggerModule } from 'nestjs-pino';
@Module({
  imports: [
    LoggerModule.forRoot({
      
    }),
    // ClientsModule.register([
    //   {
    //     name: 'NOTIFICATION_MICROSERVICE',
    //     transport: Transport.KAFKA,
    //     options: {
    //       client: {
    //         clientId: 'hero',
    //         brokers: ['kafka:9092'],
    //       },
    //       consumer: {
    //         groupId: 'notification-consumer'
    //       }
    //     }
    //   },
    // ]),
    ConfigModule.forRoot({
      isGlobal: true,
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
