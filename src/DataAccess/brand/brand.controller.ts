import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BrandType } from '../Datamodels/Types/brand.type';
import { BrandService } from './brand.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandService: BrandService) {}

  @Get('get')
  async findAll(): Promise<BrandType[]> {
    return this.brandService.getBrands();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string): Promise<BrandType> {
    return this.brandService.getBrand(id);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<BrandType> {
    return this.brandService.deleteBrand(id);
  }
}
