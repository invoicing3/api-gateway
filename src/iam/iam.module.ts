import { Module } from '@nestjs/common';
import { IamService } from './iam.service';
import { IamController } from './iam.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
  controllers: [IamController],
  providers: [IamService]
})
export class IamModule {}
