import { Test, TestingModule } from '@nestjs/testing';
import { BrandsController } from '../src/DataAccess/Contollers/brand.controller';
import { BrandService } from '../src/DataAccess/Services/brand.service';
import { BrandType } from '../src/DataAccess/Datamodels/brand.type';

describe('BrandsController', () => {
  let controller: BrandsController;
  let brandService: BrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandsController],
      providers: [
        {
          provide: BrandService,
          useValue: {
            getBrands: jest.fn(),
            getBrand: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<BrandsController>(BrandsController);
    brandService = module.get<BrandService>(BrandService);
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
    jest.spyOn(brandService, 'getBrands').mockResolvedValueOnce(result);
    expect(await controller.findAll()).toBe(result);
    expect(brandService.getBrands).toBeCalled();
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
    jest.spyOn(brandService, 'getBrand').mockResolvedValueOnce(result);
    expect(await controller.findOne('1')).toBe(result);
    expect(brandService.getBrand).toBeCalledWith('1');
  });
});
