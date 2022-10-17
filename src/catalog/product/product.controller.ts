import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CatalogService } from '../catalog.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('catalog/products')
@ApiTags('catalog')
export class ProductController {
  constructor(private readonly catalogService: CatalogService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    // return this.catalogService.create(createProductDto);
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
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    // return this.catalogService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.catalogService.remove(+id);
  }
}
