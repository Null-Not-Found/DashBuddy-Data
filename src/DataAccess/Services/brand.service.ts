import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BrandType as Brand } from '../Datamodels/brand.type';

@Injectable()
export class BrandService {
  constructor(@InjectModel('Brand') private brandModel: Model<Brand>) {}

  async getBrands(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }

  async getBrand(id: string): Promise<Brand> {
    return this.brandModel.findOne({ id }).exec();
  }
}
