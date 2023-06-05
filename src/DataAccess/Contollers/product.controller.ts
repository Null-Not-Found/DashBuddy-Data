import { Controller, Get, Param } from '@nestjs/common';
import { ProductResolver } from "../Resolvers/product.resolver";
import { ProductType } from '../Datamodels/product.type';

@Controller('products')
export class ProductController {
  constructor(private readonly productResolver: ProductResolver) {}

  @Get('get')
  async findAll(): Promise<ProductType[]> {
    return this.productResolver.products();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string): Promise<ProductType> {
    return this.productResolver.product(id);
  }
}
