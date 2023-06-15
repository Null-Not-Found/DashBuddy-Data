import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
@ObjectType('ProductStatus')
export class Product_statusType {
  @Field((type) => ID)
  @Prop()
  id: string;
  @Field()
  @Prop()
  label: string;
  @Field()
  @Prop()
  color: string;
  @Field()
  @Prop()
  order: number;
  @Field()
  @Prop()
  Allowed_to_publish: boolean;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  created_at: Date;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  updated_at: Date;
}

export type Product_statusDocument = Product_statusType & Document;
export const Product_statusSchema =
  SchemaFactory.createForClass(Product_statusType);
Product_statusSchema.set('versionKey', false);
export const ProductStatus = mongoose.model(
  'ProductStatus',
  Product_statusSchema,
);
