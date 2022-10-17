import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { IamService } from '../iam.service';

@Controller({
  version: '1',
  path: 'iam/users'
})
@ApiTags('iam',"v1")
export class UserController {
  constructor(private readonly iamService: IamService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // return this.iamService.create(createUserDto);
  }

  @Get()
  findAll() {
    // return this.iamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.iamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // return this.iamService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.iamService.remove(+id);
  }
}
