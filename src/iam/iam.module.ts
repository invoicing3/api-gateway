import { Module } from '@nestjs/common';
import { IamService } from './iam.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user/user.controller';
import { CompanyController } from './company/company.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "IAM_MICROSERVICE",
        transport: Transport.TCP,
        // options: {
        //   host: "localhost"
        // }
      }
    ]),
  ],
  controllers: [UserController,CompanyController],
  providers: [IamService]
})
export class IamModule {}
