import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductService } from '../src/DataAccess/Services/product.service';
import { ProductType } from '../src/DataAccess/Datamodels/product.type';

describe('ProductService', () => {
  let service: ProductService;
  let model: Model<ProductType>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getModelToken('Product'),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    model = module.get<Model<ProductType>>(getModelToken('Product'));
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
    jest.spyOn(model, 'find').mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(result),
    } as any);
    expect(await service.getProducts()).toBe(result);
    expect(model.find).toBeCalledWith();
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
    jest.spyOn(model, 'findOne').mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(result),
    } as any);
    expect(await service.getProduct('1')).toBe(result);
    expect(model.findOne).toBeCalledWith({ id: '1' });
  });
});
