import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from '../../src/DataAccess/Services/product.service';
import { ProductType } from '../../src/DataAccess/Datamodels/product.type';

describe('ProductService', () => {
  let productService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductService, ProductType],
    }).compile();

    productService = module.get<ProductService>(ProductService);
  });

  it('should get a product', async () => {
    // Replace the following with the actual product data you want to test
    const productId = '123';
    const product = await productService.getProduct(productId);

    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('brand');
    expect(product).toHaveProperty('model');
    expect(product).toHaveProperty('owner_id');
    expect(product).toHaveProperty('gtin');
    expect(product).toHaveProperty('product_statuses_id');
    expect(product).toHaveProperty('created_at');
    expect(product).toHaveProperty('deleted_at');
    expect(product).toHaveProperty('updated_at');
  });
});
