import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductService } from '../Services/product.service';
import {
  ProductDocument as Product,
  ProductType,
} from '../Datamodels/product.type';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('get')
  async findAll(): Promise<ProductType[]> {
    return this.productService.getProducts();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string): Promise<ProductType> {
    return this.productService.getProduct(id);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<ProductType> {
    return this.productService.deleteProduct(id);
  }
}
