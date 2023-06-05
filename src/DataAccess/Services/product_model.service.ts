import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product_modelType } from '../Datamodels/product_model.type';

@Injectable()
export class Product_modelService {
  constructor(
    @InjectModel('ProductModel')
    private product_modelModel: Model<Product_modelType>,
  ) {}

  async getProductModels(): Promise<Product_modelType[]> {
    return this.product_modelModel.find().exec();
  }

  async getProductModel(id: string): Promise<Product_modelType> {
    return this.product_modelModel.findOne({ id }).exec();
  }
}
