import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('ProductStatus')
export class Product_statusType {
  @Field((type) => ID)
  id: string;
  @Field()
  label: string;
  @Field()
  color: string;
  @Field()
  order: number;
  @Field()
  Allowed_to_publish: boolean;
  @Field()
  created_at: Date;
  @Field()
  updated_at: Date;
}
