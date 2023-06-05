import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../Datamodels/product.type';
import { ProductController } from '../Contollers/product.controller';
import { ProductService } from '../Services/product.service';
import { ProductResolver } from '../Resolvers/product.resolver';
import { BrandService } from '../Services/brand.service';
import { Product_modelService } from '../Services/product_model.service';
import { ClientService } from '../Services/client.service';
import { Product_statusService } from '../Services/product_status.service';
import { AttributeService } from '../Services/attribute.service';
import { BrandModule } from './brand.module';
import { BrandSchema } from '../Datamodels/brand.type';
import { Product_modelSchema } from '../Datamodels/product_model.type';
import { ClientSchema } from '../Datamodels/client.type';
import { Product_statusSchema } from '../Datamodels/product_status.type';
import { AttributeSchema } from '../Datamodels/attribute.type';
import { Product_fieldsResolver } from '../Resolvers/product_fields.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }]),
    MongooseModule.forFeature([
      { name: 'ProductModel', schema: Product_modelSchema },
    ]),
    MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }]),
    MongooseModule.forFeature([
      { name: 'ProductStatus', schema: Product_statusSchema },
    ]),
    MongooseModule.forFeature([{ name: 'Attribute', schema: AttributeSchema }]),
    forwardRef(() => BrandModule),
  ],
  providers: [
    ProductResolver,
    Product_fieldsResolver,
    ProductService,
    BrandService,
    Product_modelService,
    ClientService,
    Product_statusService,
    AttributeService,
  ],
  controllers: [ProductController],
})
export class ProductModule {}
