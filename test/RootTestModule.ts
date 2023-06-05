import { Module } from '@nestjs/common';
import { BrandService } from '../src/DataAccess/Services/brand.service';
import { ProductService } from '../src/DataAccess/Services/product.service';
import { BrandModule } from '../src/DataAccess/Modules/brand.module';
import { ProductModule } from '../src/DataAccess/Modules/product.module';

@Module({
  imports: [BrandModule, ProductModule],
  providers: [BrandService, ProductService],
})
export class RootTestModule {}
