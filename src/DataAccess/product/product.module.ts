import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../Datamodels/Types/product.type';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  providers: [ProductResolver, ProductService],
  exports: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
