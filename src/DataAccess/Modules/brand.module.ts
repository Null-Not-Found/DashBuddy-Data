import { Module } from '@nestjs/common';
import { BrandResolver } from '../Resolvers/brand.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandSchema } from '../Datamodels/brand.type';
import { BrandService } from '../Services/brand.service';
import { BrandsController } from '../Contollers/brand.controller';
import { ClientService } from '../Services/client.service';
import { ClientSchema } from '../Datamodels/client.type';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }]),
    MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }]),
  ],
  providers: [BrandResolver, BrandService, ClientService],
  controllers: [BrandsController],
})
export class BrandModule {}
