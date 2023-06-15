import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

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
  @Field({ nullable: true })
  @Prop({ nullable: true })
  updated_at: Date;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  deleted_at: Date;
  @Field()
  @Prop()
  created_at: Date;
}

export type AttributeDocument = AttributeType & Document;
export const AttributeSchema = SchemaFactory.createForClass(AttributeType);
AttributeSchema.set('versionKey', false);
export const Attribute = mongoose.model('Attribute', AttributeSchema);
