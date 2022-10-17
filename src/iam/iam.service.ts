import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class IamService {
  constructor(@Inject("IAM_MICROSERVICE") private readonly iamMicroservice: ClientProxy) {}
  // async create(createIamDto: CreateIamDto) {
  //   const res = await this.iamMicroservice.emit("createUser",{}).toPromise();
  //   // return res;
  //   console.log(res)
  //   return 'This action adds a new iam';
  // }

  // findAll() {
  //   return `This action returns all iam`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} iam`;
  // }

  // update(id: number, updateIamDto: UpdateIamDto) {
  //   return `This action updates a #${id} iam`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} iam`;
  // }
}


