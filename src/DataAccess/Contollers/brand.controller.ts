import { Controller, Get, Param } from '@nestjs/common';
import { BrandType } from '../Datamodels/brand.type';
import { BrandService } from '../Services/brand.service';

@Controller('brands')
export class BrandsController {
  constructor(public brandService: BrandService) {}

  @Get('get')
  async findAll(): Promise<BrandType[]> {
    return this.brandService.getBrands();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string): Promise<BrandType> {
    return this.brandService.getBrand(id);
  }
}
