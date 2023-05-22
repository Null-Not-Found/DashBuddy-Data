import { ID, InputType, Field } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignProductToBrandInput {
  @IsUUID()
  @Field((type) => ID)
  brandID: string;
  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  productIDs: string[];
}
