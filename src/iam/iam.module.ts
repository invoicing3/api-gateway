import { Module } from '@nestjs/common';
import { IamService } from './iam.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user/user.controller';
import { CompanyController } from './company/company.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import hostsConfig from 'src/config/hosts.config';

@Module({

  imports: [
    ClientsModule.registerAsync([
    {
      name: "IAM_MICROSERVICE",
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          transport: Transport.TCP,
          options: {
            host: configService.get<string>("hosts.iam.host"),
            port: configService.get<number>("hosts.iam.port"),
          }
        }
      }
    }
  ]),
  ],
  controllers: [UserController,CompanyController],
  providers: [IamService]
})
export class IamModule {}
