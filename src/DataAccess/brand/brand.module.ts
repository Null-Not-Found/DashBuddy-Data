import { Module } from '@nestjs/common';
import { BrandResolver } from './brand.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSchema } from './brand.schema';
import { BrandService } from './brand.service';
import { BrandsController } from './brand.controller';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }]),
    ProductModule,
  ],
  providers: [BrandResolver, BrandService],
  controllers: [BrandsController],
})
export class BrandModule {}
