import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType('Attribute')
export class AttributeType {
  @Field((type) => ID)
  @Prop()
  id: string;
  @Field()
  @Prop()
  name: string;
  @Field()
  @Prop()
  required: boolean;
  @Field()
  @Prop()
  updated_at: Date;
  @Field()
  @Prop()
  deleted_at: Date;
  @Field()
  @Prop()
  created_at: Date;
}

export type AttributeDocument = AttributeType & Document;
export const AttributeSchema = SchemaFactory.createForClass(AttributeType);
