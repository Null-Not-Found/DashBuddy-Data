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
import { Product } from './product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('post')
  async create(@Body() product: Product): Promise<Product> {
    return this.productService.createProduct(product);
  }

  @Get('get')
  async findAll(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Put('put/:id')
  async update(
    @Param('id') id: string,
    @Body() product: Product,
  ): Promise<Product> {
    return this.productService.updateProduct(id, product);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<Product> {
    return this.productService.deleteProduct(id);
  }
}
