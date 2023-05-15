import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductType } from '../product/product.type';

@ObjectType('Brand')
export class BrandType {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  description: string;
  @Field((type) => [ProductType])
  products: string[];
}
