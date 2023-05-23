import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductType } from './product.type';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ClientType } from './client.type';

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

  @Field((type) => ClientType)
  @Prop()
  owner_id: string;

  @Field({ nullable: true })
  @Prop({ nullable: true })
  updated_at: Date;

  @Field({ nullable: true })
  @Prop({ nullable: true })
  deleted_at: Date;

  @Field({ nullable: true })
  @Prop({ nullable: true })
  created_at: Date;

  @Field((type) => [ProductType])
  @Prop()
  products: string[];
}

export type BrandDocument = BrandType & Document;
export const BrandSchema = SchemaFactory.createForClass(BrandType);
BrandSchema.set('versionKey', false);
export const Brand = mongoose.model('Brand', BrandSchema);
