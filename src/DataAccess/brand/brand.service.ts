import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Brand } from './brand.schema';
import { v4 as uuid } from 'uuid';
import { BrandInput } from './brand.input';

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

  async createBrand(brandInput: BrandInput): Promise<Brand> {
    const { name, description, products } = brandInput;
    const brand = {
      id: uuid(),
      name: name,
      description: description,
      products: products,
    };
    const createdBrand = new this.brandModel(brand);
    return createdBrand.save();
  }

  async getBrands(): Promise<Brand[]> {
    return this.brandModel.find().exec();
  }

  async getBrand(id: string): Promise<Brand> {
    return this.brandModel.findOne({ id }).exec();
  }

  async updateBrand(id: string, brandInput: BrandInput): Promise<Brand> {
    const { name, description } = brandInput;
    const brand = {
      id: id,
      name: name,
      description: description,
    };
    return this.brandModel
      .findOneAndUpdate({ id }, brand, { new: true })
      .exec();
  }

  async deleteBrand(id: string): Promise<Brand> {
    return this.brandModel.findOneAndDelete({ id }).exec();
  }
}
