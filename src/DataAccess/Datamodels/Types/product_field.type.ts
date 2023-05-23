import { Field, ID, ObjectType } from '@nestjs/graphql';
import mongoose, { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { GraphQLScalarType, Kind } from 'graphql/index';
import { GraphQLJSON } from 'graphql-type-json';

/*const ValueScalar = new GraphQLScalarType({
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
  @Field((type) => ValueScalar)
  value: any;
}
@Field((type) => ProductFieldValue)
@Prop({ type: MongooseSchema.Types.Mixed }) // Use Mongoose Mixed type to allow any value
value: ProductFieldValue;*/

@Schema()
@ObjectType('ProductField')
export class Product_fieldType {
  @Field((type) => ID)
  @Prop()
  id: string;
  @Field()
  @Prop()
  attribute: string;
  @Field(() => GraphQLJSON) // Field with type Any
  @Prop({ type: mongoose.Schema.Types.Mixed })
  value: any;
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
export type Product_fieldDocument = Product_fieldType & Document;
export const Product_fieldSchema =
  SchemaFactory.createForClass(Product_fieldType);
Product_fieldSchema.set('versionKey', false);
export const ProductField = mongoose.model('ProductField', Product_fieldSchema);
