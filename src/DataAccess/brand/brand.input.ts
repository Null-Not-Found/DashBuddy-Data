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
  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  products: string[];
}
