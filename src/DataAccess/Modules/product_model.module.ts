import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client.module';
import { AttributeModule } from './attribute.module';
import { Product_modelResolver } from '../Resolvers/product_model.resolver';
import { Product_modelService } from '../Services/product_model.service';
import { Product_modelSchema } from '../Datamodels/product_model.type';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProductModel', schema: Product_modelSchema },
    ]),
    ClientModule,
    AttributeModule,
  ],
  providers: [Product_modelResolver, Product_modelService],
})
export class Product_modelModule {}
