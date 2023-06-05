import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from '../src/DataAccess/Services/product.service';
import { ProductResolver } from '../src/DataAccess/Resolvers/product.resolver';

describe('UserResolver', () => {
  let productResolver: ProductResolver;
  let productService: Partial<ProductService>; // Partial is used to make all properties and methods of the service optional

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductResolver,
        {
          provide: ProductService,
          useValue: {
            products: jest.fn(() => [
              { id: '1', name: 'Product 1', price: 10 },
              { id: '2', name: 'Product 2', price: 20 },
            ]),
          },
        },
      ],
    }).compile();

    productResolver = module.get<ProductResolver>(ProductResolver);
    productService = module.get<ProductService>(ProductService);
  });

  it('should return all products', async () => {
    // Execute the resolver method
    const result = await productResolver.products();

    // Verify the result
    expect(result).toEqual([
      { id: '1', name: 'Product 1', price: 10 },
      { id: '2', name: 'Product 2', price: 20 },
    ]);
  });
});
