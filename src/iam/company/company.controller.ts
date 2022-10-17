import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IamService } from '../iam.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller({
  version: '1',
  path: 'iam/companies'
})
@ApiTags('iam',"v1")
export class CompanyController {
  constructor(private readonly iamService: IamService) {}

  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return await this.iamService.createCompany(createCompanyDto);
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
