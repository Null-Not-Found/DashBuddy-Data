import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
@ObjectType('Client')
export class ClientType {
  @Field((type) => ID)
  @Prop()
  id: string;
  @Field()
  @Prop()
  name: string;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  updated_at: Date;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  deleted_at: Date;
  @Field({ nullable: true })
  @Prop({ nullable: true })
  created_at: Date;
}

export type ClientDocument = ClientType & Document;
export const ClientSchema = SchemaFactory.createForClass(ClientType);
ClientSchema.set('versionKey', false);
export const Client = mongoose.model('Client', ClientSchema);
