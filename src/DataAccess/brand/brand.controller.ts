import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Brand } from './brand.schema';
import { BrandService } from './brand.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandService: BrandService) {}

  @Post('post')
  async create(@Body() brand: Brand): Promise<Brand> {
    return this.brandService.createBrand(brand);
  }

  @Get('get')
  async findAll(): Promise<Brand[]> {
    return this.brandService.getBrands();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string): Promise<Brand> {
    return this.brandService.getBrand(id);
  }

  @Put('put/:id')
  async update(@Param('id') id: string, @Body() brand: Brand): Promise<Brand> {
    return this.brandService.updateBrand(id, brand);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<Brand> {
    return this.brandService.deleteBrand(id);
  }
}
