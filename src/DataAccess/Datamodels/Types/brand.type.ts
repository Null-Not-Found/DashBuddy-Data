import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductType } from '../Types/product.type';

@ObjectType('Brand')
export class BrandType {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  owner_id: string;
  @Field()
  updated_at: Date;
  @Field()
  deleted_at: Date;
  @Field()
  created_at: Date;
  @Field((type) => [ProductType])
  products: string[];
}
