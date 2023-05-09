import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand } from './schemas/brand.schema';

@Injectable()
export class BrandService {
  constructor(@InjectModel('Brand') private brandModel: Model<Brand>) {}

  async create(brand: Brand): Promise<Brand> {
    const createdBrand = new this.brandModel(brand);
    return createdBrand.save();
  }

  async findAll(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }

  async findOne(id: string): Promise<Brand> {
    return this.brandModel.findById(id).exec();
  }

  async update(id: string, brand: Brand): Promise<Brand> {
    return this.brandModel.findByIdAndUpdate(id, brand, { new: true }).exec();
  }

  async delete(id: string): Promise<Brand> {
    return this.brandModel.findByIdAndDelete(id).exec();
  }
}
