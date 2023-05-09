import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Brand } from './schemas/brand.schema';
import { BrandService } from './brand.service';

@Controller('api')
export class BrandsController {
  constructor(private readonly brandService: BrandService) {}

  @Post('brands')
  async create(@Body() brand: Brand): Promise<Brand> {
    return this.brandService.create(brand);
  }

  @Get('brands')
  async findAll(): Promise<Brand[]> {
    return this.brandService.findAll();
  }

  @Get('brands/:id')
  async findOne(@Param('id') id: string): Promise<Brand> {
    return this.brandService.findOne(id);
  }

  @Put('brands/:id')
  async update(@Param('id') id: string, @Body() brand: Brand): Promise<Brand> {
    return this.brandService.update(id, brand);
  }

  @Delete('brands/:id')
  async delete(@Param('id') id: string): Promise<Brand> {
    return this.brandService.delete(id);
  }
}
