import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { UpdateCatalogDto } from './dto/update-catalog.dto';

@Injectable()
export class CatalogService {
  constructor(@Inject("CATALOG_MICROSERVICE") private readonly catalogMicroservice: ClientProxy) {}
  async create(createCatalogDto: CreateCatalogDto) {
    return await this.catalogMicroservice.emit("createProduct",{}).toPromise();
    return 'This action adds a new catalog';
  }

  findAll() {
    return `This action returns all catalog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catalog`;
  }

  update(id: number, updateCatalogDto: UpdateCatalogDto) {
    return `This action updates a #${id} catalog`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalog`;
  }
}
