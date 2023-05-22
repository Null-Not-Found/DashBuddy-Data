import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('ProductField')
export class Product_fieldType {
  @Field((type) => ID)
  id: string;
  @Field()
  attribute: string;
  @Field()
  value: any;
  @Field()
  updated_at: Date;
  @Field()
  deleted_at: Date;
  @Field()
  created_at: Date;
}
