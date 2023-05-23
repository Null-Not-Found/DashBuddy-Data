import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { BrandModule } from './DataAccess/Modules/brand.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductModule } from './DataAccess/Modules/product.module';
import { AttributeModule } from './DataAccess/Modules/attribute.module';
import { ClientModule } from './DataAccess/Modules/client.module';
import { Product_modelModule } from './DataAccess/Modules/product_model.module';
import { Product_statusModule } from './DataAccess/Modules/product_status.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:4001/DashBuddy'),
    BrandModule,
    ProductModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
