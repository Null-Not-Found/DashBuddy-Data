import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType('Client')
export class ClientType {
  @Field((type) => ID)
  @Prop()
  id: string;
  @Field()
  @Prop()
  name: string;
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

export type ClientDocument = ClientType & Document;
export const ClientSchema = SchemaFactory.createForClass(ClientType);
