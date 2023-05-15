import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class ProductInput {
  @MinLength(1)
  @Field()
  name: string;
  @MinLength(1)
  @Field()
  description: string;
}
