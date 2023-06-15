import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BrandService } from '../src/DataAccess/Services/brand.service';
import { BrandType } from '../src/DataAccess/Datamodels/brand.type';

describe('ProductService', () => {
  let service: BrandService;
  let model: Model<BrandType>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BrandService,
        {
          provide: getModelToken('Brand'),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<BrandService>(BrandService);
    model = module.get<Model<BrandType>>(getModelToken('Brand'));
  });
  it('should return an array of brands', async () => {
    const result: BrandType[] = [
      {
        id: '1',
        name: 'Brand 1',
        description: 'Description 1',
        owner_id: 'owner1',
        updated_at: null,
        deleted_at: null,
        created_at: null,
      },
      {
        id: '2',
        name: 'Brand 2',
        description: 'Description 2',
        owner_id: 'owner2',
        updated_at: null,
        deleted_at: null,
        created_at: null,
      },
    ];
    jest.spyOn(model, 'find').mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(result),
    } as any);
    expect(await service.getBrands()).toBe(result);
    expect(model.find).toBeCalledWith();
  });

  it('should return a brand by id', async () => {
    const result: BrandType = {
      id: '1',
      name: 'Brand 1',
      description: 'Description 1',
      owner_id: 'owner1',
      updated_at: null,
      deleted_at: null,
      created_at: null,
    };
    jest.spyOn(model, 'findOne').mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(result),
    } as any);
    expect(await service.getBrand('1')).toBe(result);
    expect(model.findOne).toBeCalledWith({ id: '1' });
  });
});
