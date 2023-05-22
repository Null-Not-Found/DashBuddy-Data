import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand } from '../Datamodels/Schemas/brand.schema';

@Injectable()
export class BrandService {
  constructor(@InjectModel('Brand') private brandModel: Model<Brand>) {}

  async assingProductToBrand(
    brandID: string,
    productIDs: string[],
  ): Promise<Brand> {
    const brand = await this.brandModel.findOne({ id: brandID });
    brand.products = [...brand.products, ...productIDs];
    return this.brandModel.findOneAndUpdate({ id: brandID }, brand, {
      new: true,
    });
  }

  async getBrands(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }

  async getBrand(id: string): Promise<Brand> {
    return this.brandModel.findOne({ id }).exec();
  }

  async deleteBrand(id: string): Promise<Brand> {
    return this.brandModel.findOneAndDelete({ id }).exec();
  }
}
