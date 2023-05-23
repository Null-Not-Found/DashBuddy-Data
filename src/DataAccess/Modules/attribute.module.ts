import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product.module';
import { AttributeSchema } from '../Datamodels/attribute.type';
import { AttributeService } from '../Services/attribute.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Attribute', schema: AttributeSchema }]),
  ],
  providers: [AttributeService],
})
export class AttributeModule {}
