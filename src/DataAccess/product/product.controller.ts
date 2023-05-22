import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../Datamodels/Schemas/product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('get')
  async findAll(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<Product> {
    return this.productService.deleteProduct(id);
  }
}
