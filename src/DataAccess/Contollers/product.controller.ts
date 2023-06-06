import { Controller, Get, Param } from '@nestjs/common';
import { ProductType } from '../Datamodels/product.type';
import { ProductService } from '../Services/product.service';

@Controller('products')
export class ProductController {
  constructor(public productService: ProductService) {}

  @Get('get')
  async findAll(): Promise<ProductType[]> {
    return this.productService.getProducts();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string): Promise<ProductType> {
    return this.productService.getProduct(id);
  }
}
