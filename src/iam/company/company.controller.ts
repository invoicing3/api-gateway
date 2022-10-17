import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IamService } from '../iam.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('iam/companies')
@ApiTags('iam')
export class CompanyController {
  constructor(private readonly iamService: IamService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    // return this.iamService.create(createCompanyDto);
  }
  @Get()
  findOne() {
    // return this.iamService.findOne(+id);
  }

  @Patch()
  update( @Body() updateCompanyDto: UpdateCompanyDto) {
    // return this.iamService.update(+id, updateCompanyDto);
  }

  @Delete()
  remove() {
    // return this.iamService.remove(+id);
  }
}
