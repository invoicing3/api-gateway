import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IamService } from './iam.service';
import { CreateIamDto } from './dto/create-iam.dto';
import { UpdateIamDto } from './dto/update-iam.dto';

@Controller('iam')
export class IamController {
  constructor(private readonly iamService: IamService) {}

  @Post()
  async create(@Body() createIamDto: CreateIamDto) {
    return await this.iamService.create(createIamDto);
  }

  @Get()
  findAll() {
    return this.iamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIamDto: UpdateIamDto) {
    return this.iamService.update(+id, updateIamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iamService.remove(+id);
  }
}
