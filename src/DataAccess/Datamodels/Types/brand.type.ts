import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductType } from '../Types/product.type';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType('Brand')
export class BrandType {
  @Field((type) => ID)
  @Prop()
  id: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  description: string;

  @Field()
  @Prop()
  owner_id: string;

  @Field()
  @Prop()
  updated_at: Date;

  @Field()
  @Prop()
  deleted_at: Date;

  @Field()
  @Prop()
  created_at: Date;

  @Field((type) => [ProductType])
  @Prop()
  products: string[];
}

export type BrandDocument = BrandType & Document;
export const BrandSchema = SchemaFactory.createForClass(BrandType);
