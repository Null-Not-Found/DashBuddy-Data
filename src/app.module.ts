import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { BrandsController } from './DataAccess/brand.controller';
import { BrandService } from './DataAccess/brand.service';
import { MongooseModule } from '@nestjs/mongoose';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrandSchema } from './DataAccess/schemas/brand.schema';
import { DatabaseModule } from './DataAccess/database.module';

/*@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }]),
  ],
  controllers: [BrandsController],
  providers: [BrandService],
})
export class AppModule {}
