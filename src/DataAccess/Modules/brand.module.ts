import { forwardRef, Module } from '@nestjs/common';
import { BrandResolver } from '../Resolvers/brand.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSchema } from '../Datamodels/brand.type';
import { BrandService } from '../Services/brand.service';
import { BrandsController } from '../Contollers/brand.controller';
import { ProductModule } from './product.module';
import { ProductService } from '../Services/product.service';
import { ClientService } from '../Services/client.service';
import { ProductSchema } from '../Datamodels/product.type';
import { ClientSchema } from '../Datamodels/client.type';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }]),
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }]),
    forwardRef(() => ProductModule),
  ],
  providers: [BrandResolver, BrandService, ProductService, ClientService],
  controllers: [BrandsController],
})
export class BrandModule {}
