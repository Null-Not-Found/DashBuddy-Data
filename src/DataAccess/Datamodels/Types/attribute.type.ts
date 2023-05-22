import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Attribute')
export class AttributeType {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  required: boolean;
  @Field()
  updated_at: Date;
  @Field()
  deleted_at: Date;
  @Field()
  created_at: Date;
}
