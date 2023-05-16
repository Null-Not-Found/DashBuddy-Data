import { InputType, Field, ID } from "@nestjs/graphql";
import { IsUUID, MinLength } from "class-validator";
import { ProductField } from "./Schemas/product_field.schema";

@InputType()
export class ProductInput {
  @MinLength(1)
  @Field()
  name: string;
  @IsUUID('4', { each: true })
  @Field(() => [ID])
  brand: string;
  @IsUUID('4', { each: true })
  @Field(() => [ID])
  model: string;
  @IsUUID('4', { each: true })
  @Field(() => [ID])
  owner_id: string;
  @Field()
  fields: [ProductField];
  @Field()
  gtin: string;
  @IsUUID('4', { each: true })
  @Field(() => [ID])
  product_statuses_id: string;
  @Field()
  created_at: Date;
  @Field()
  deleted_at: Date;
  @Field()
  updated_at: Date;
}
