import { Field, ID, ObjectType } from '@nestjs/graphql';
import mongoose, { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GraphQLJSON } from 'graphql-type-json';

@Schema()
@ObjectType('ProductField')
export class Product_fieldType {
  @Field((type) => ID)
  @Prop()
  id: string;
  @Field()
  @Prop()
  attribute: string;
  @Field(() => GraphQLJSON) // Field with type Any
  @Prop({ type: mongoose.Schema.Types.Mixed })
  value: any;
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
export type Product_fieldDocument = Product_fieldType & Document;
export const Product_fieldSchema =
  SchemaFactory.createForClass(Product_fieldType);
Product_fieldSchema.set('versionKey', false);
export const ProductField = mongoose.model('ProductField', Product_fieldSchema);
