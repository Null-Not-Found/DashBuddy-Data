import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ClientType } from './client.type';

@Schema()
@ObjectType('ProductModel')
export class Product_modelType {
  @Field((type) => ID)
  @Prop()
  id: string;
  @Field()
  @Prop()
  name: string;
  @Field(() => [String])
  @Prop()
  attributes: string[];
  @Field((type) => ClientType)
  @Prop()
  client_id: string;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  updated_at: Date;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  deleted_at: Date;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  created_at: Date;
}

export type Product_modelDocument = Product_modelType & Document;
export const Product_modelSchema =
  SchemaFactory.createForClass(Product_modelType);
Product_modelSchema.set('versionKey', false);
export const ProductModel = mongoose.model('ProductModel', Product_modelSchema);
