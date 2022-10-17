import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatalogService } from '../catalog.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';


@Controller('catalog/categories')
@ApiTags('catalog')
export class CategoryController {
  constructor(private readonly catalogService: CatalogService) {}
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    // return this.catalogService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    // return this.catalogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.catalogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    // return this.catalogService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.catalogService.remove(+id);
  }
}
