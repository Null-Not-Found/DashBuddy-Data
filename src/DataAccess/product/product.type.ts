import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductField } from './Schemas/product_field.schema';

@ObjectType('Product')
export class ProductType {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  brand: string;
  @Field()
  model: string;
  @Field()
  owner_id: string;
  @Field()
  fields: [ProductField];
  @Field()
  gtin: string;
  @Field()
  product_statuses_id: string;
  @Field()
  created_at: Date;
  @Field()
  deleted_at: Date;
  @Field()
  updated_at: Date;
}
