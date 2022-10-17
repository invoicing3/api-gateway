import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CatalogService {
  // constructor(@Inject("CATALOG_MICROSERVICE") private readonly catalogMicroservice: ClientProxy) {}
  async create() {
    // return await this.catalogMicroservice.emit("createProduct",{}).toPromise();
    // return 'This action adds a new catalog';
  }

}
