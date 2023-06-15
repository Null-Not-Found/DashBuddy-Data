import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product_statusSchema } from '../Datamodels/product_status.type';
import { Product_statusService } from '../Services/product_status.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ProductStatus', schema: Product_statusSchema },
    ]),
  ],
  providers: [Product_statusService],
})
export class Product_statusModule {}
