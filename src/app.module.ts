import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import hostsConfig from './config/hosts.config';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: "IAM",
        transport: Transport.TCP,
        // options: {
        //   host: "localhost"
        // }
      }
    ]),
    ConfigModule.forRoot({
      load: [
        hostsConfig
      ]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
