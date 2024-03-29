import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductType } from '../Datamodels/product.type';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<ProductType>,
  ) {}

  async getProducts(): Promise<ProductType[]> {
    return this.productModel.find().exec();
  }

  async getProduct(id: string): Promise<ProductType> {
    return this.productModel.findOne({ id }).exec();
  }

  async deleteProduct(id: string): Promise<ProductType> {
    return this.productModel.findOneAndDelete({ id }).exec();
  }
}
