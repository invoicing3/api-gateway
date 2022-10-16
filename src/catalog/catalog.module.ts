import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
const CATALOG_HOST = process.env.CATALOG_MICROSERVICE_HOST || 'catalog';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: "CATALOG_MICROSERVICE",
        transport: Transport.GRPC,
        options: {
          url: `${CATALOG_HOST}`,
          package: 'catalog',
          protoPath: join(__dirname, 'grpc/catalog.proto'),
        }
      }
    ]),
  ],
  controllers: [CatalogController],
  providers: [CatalogService]
})
export class CatalogModule {}
