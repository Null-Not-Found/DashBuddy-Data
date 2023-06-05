import { Controller, Get, Param } from '@nestjs/common';
import { BrandType } from '../Datamodels/brand.type';
import { BrandResolver } from "../Resolvers/brand.resolver";

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandResolver: BrandResolver) {}

  @Get('get')
  async findAll(): Promise<BrandType[]> {
    return this.brandResolver.brands();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string): Promise<BrandType> {
    return this.brandResolver.brand(id);
  }
}
