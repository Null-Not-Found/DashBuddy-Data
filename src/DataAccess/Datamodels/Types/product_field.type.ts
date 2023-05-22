import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GraphQLScalarType, Kind } from 'graphql';

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

@ObjectType('ProductField')
export class Product_fieldType {
  @Field((type) => ID)
  id: string;
  @Field()
  attribute: string;
  @Field((type) => ValueScalar)
  value: any;
  @Field()
  updated_at: Date;
  @Field()
  deleted_at: Date;
  @Field()
  created_at: Date;
}
