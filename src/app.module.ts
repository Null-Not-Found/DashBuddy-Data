import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { BrandModule } from './DataAccess/Modules/brand.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductModule } from './DataAccess/Modules/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/data'),
    BrandModule,
    ProductModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
