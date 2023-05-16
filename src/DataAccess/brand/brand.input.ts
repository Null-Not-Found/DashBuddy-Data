import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID, MinLength } from 'class-validator';

@InputType()
export class BrandInput {
  @MinLength(1)
  @Field()
  name: string;
  @MinLength(1)
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
  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  products: string[];
}
