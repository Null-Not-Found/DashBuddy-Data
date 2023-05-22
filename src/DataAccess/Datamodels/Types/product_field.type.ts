import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GraphQLScalarType, Kind } from 'graphql/index';

const ValueScalar = new GraphQLScalarType({
  name: 'ValueScalar',
  description: 'Custom scalar type for the value field',
  parseValue(value: any) {
    // Parse the input value if needed
    return value;
  },
  serialize(value: any) {
    // Serialize the value if needed
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING || ast.kind === Kind.INT) {
      return ast.value;
    }
    return null;
  },
});

@ObjectType('ProductFieldValue')
export class ProductFieldValue {
  @Field((type) => ID)
  id: string;

  @Field((type) => ValueScalar)
  value: any;

  @Field()
  updated_at: Date;

  @Field()
  deleted_at: Date;

  @Field()
  created_at: Date;
}

@Schema()
@ObjectType('ProductField')
export class Product_fieldType {
  @Field((type) => ID)
  @Prop()
  id: string;
  @Field()
  @Prop()
  attribute: string;
  @Field((type) => ProductFieldValue)
  @Prop({ type: MongooseSchema.Types.Mixed }) // Use Mongoose Mixed type to allow any value
  value: ProductFieldValue;
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
export type Product_fieldDocument = Product_fieldType & Document;
export const Product_fieldSchema =
  SchemaFactory.createForClass(Product_fieldType);
