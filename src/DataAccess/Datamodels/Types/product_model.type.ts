import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType('ProductModel')
export class Product_modelType {
  @Field((type) => ID)
  @Prop()
  id: string;
  @Field()
  @Prop()
  name: string;
  @Field()
  @Prop()
  attributes: string[];
  @Field()
  @Prop()
  client_id: string;
  @Field()
  @Prop()
  updated_at: Date;
  @Field()
  @Prop()
  deleted_at: Date;
  @Field()
  @Prop()
  created_at: Date;
}

export type Product_modelDocument = Product_modelType & Document;
export const Product_modelSchema =
  SchemaFactory.createForClass(Product_modelType);
