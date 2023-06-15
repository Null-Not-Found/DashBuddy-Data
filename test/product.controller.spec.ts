import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '../src/DataAccess/Contollers/product.controller';
import { ProductService } from '../src/DataAccess/Services/product.service';
import { ProductType } from '../src/DataAccess/Datamodels/product.type';

describe('ProductController', () => {
  let controller: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: {
            getProducts: jest.fn(),
            getProduct: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  it('should return an array of products', async () => {
    const result: ProductType[] = [
      {
        id: '1',
        name: 'Product 1',
        brand: 'BRUH',
        model: 'YEYE',
        owner_id: '5',
        fields: [],
        gtin: 'ahahahha',
        product_statuses_id: '1',
        created_at: null,
        deleted_at: null,
        updated_at: null,
      },
      {
        id: '2',
        name: 'Product 2',
        brand: 'BRUH2',
        model: 'YEYE2',
        owner_id: '52',
        fields: [],
        gtin: 'ahahahha2',
        product_statuses_id: '12',
        created_at: null,
        deleted_at: null,
        updated_at: null,
      },
    ];
    jest.spyOn(productService, 'getProducts').mockResolvedValueOnce(result);
    expect(await controller.findAll()).toBe(result);
    expect(productService.getProducts).toBeCalled();
  });
  it('should return a product by id', async () => {
    const result: ProductType = {
      id: '1',
      name: 'Product 1',
      brand: 'BRUH',
      model: 'YEYE',
      owner_id: '5',
      fields: [],
      gtin: 'ahahahha',
      product_statuses_id: '1',
      created_at: null,
      deleted_at: null,
      updated_at: null,
    };
    jest.spyOn(productService, 'getProduct').mockResolvedValueOnce(result);
    expect(await controller.findOne('1')).toBe(result);
    expect(productService.getProduct).toBeCalledWith('1');
  });
});
