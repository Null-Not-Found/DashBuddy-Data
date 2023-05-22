import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('ProductModel')
export class Product_modelType {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  attributes: string[];
  @Field()
  client_id: string;
  @Field()
  updated_at: Date;
  @Field()
  deleted_at: Date;
  @Field()
  created_at: Date;
}
