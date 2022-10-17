import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { ProductController } from './product/product.controller';
import { CategoryController } from './category/category.controller';

const CATALOG_HOST = process.env.CATALOG_MICROSERVICE_HOST || 'catalog';
@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: "CATALOG_MICROSERVICE",
    //     transport: Transport.GRPC,
    //     options: {
    //       url: `${CATALOG_HOST}`,
    //       package: 'catalog',
    //       protoPath: join(__dirname, 'grpc/catalog.proto'),
    //     }
    //   }
    // ]),
  ],
  controllers: [ProductController,CategoryController],
  providers: [CatalogService]
})
export class CatalogModule {}
