import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Product_fieldSchema, Product_fieldType } from './product_field.type';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { BrandType } from './brand.type';
import { Product_modelType } from './product_model.type';
import { ClientType } from './client.type';
import { Product_statusType } from './product_status.type';

@Schema()
@ObjectType('Product')
export class ProductType {
  @Field((type) => ID)
  @Prop()
  id: string;
  @Field()
  @Prop()
  name: string;
  @Field((type) => BrandType)
  @Prop()
  brand: string;
  @Field((type) => Product_modelType)
  @Prop()
  model: string;
  @Field((type) => ClientType)
  @Prop()
  owner_id: string;
  @Field(() => [Product_fieldType])
  @Prop({ type: [Product_fieldSchema] })
  fields: Product_fieldType[];
  @Field()
  @Prop()
  gtin: string;
  @Field((type) => Product_statusType)
  @Prop()
  product_statuses_id: string;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  created_at: Date;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  deleted_at: Date;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  updated_at: Date;
}

export type ProductDocument = ProductType & Document;
export const ProductSchema = SchemaFactory.createForClass(ProductType);
ProductSchema.set('versionKey', false);
export const Product = mongoose.model('Product', ProductSchema);
