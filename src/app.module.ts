import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { BrandModule } from './DataAccess/Modules/brand.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductModule } from './DataAccess/Modules/product.module';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

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
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
