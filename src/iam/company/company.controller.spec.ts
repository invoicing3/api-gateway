import { Test, TestingModule } from '@nestjs/testing';
import { CatalogModule } from 'src/catalog/catalog.module';
import { CompanyController } from './company.controller';


describe('CompanyController', () => {
  let controller: CompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [CatalogModule],
    }).compile();

    controller = module.get<CompanyController>(CompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
