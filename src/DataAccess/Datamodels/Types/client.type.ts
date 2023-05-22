import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Client')
export class ClientType {
  @Field((type) => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  updated_at: Date;
  @Field()
  deleted_at: Date;
  @Field()
  created_at: Date;
}
