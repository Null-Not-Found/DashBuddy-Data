import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product_modelDocument as ProductModel } from '../Datamodels/product_model.type';

@Injectable()
export class Product_modelService {
  constructor(
    @InjectModel('ProductModel')
    private product_modelModel: Model<ProductModel>,
  ) {}

  async getProductModels(): Promise<ProductModel[]> {
    return this.product_modelModel.find().exec();
  }

  async getProductModel(id: string): Promise<ProductModel> {
    return this.product_modelModel.findOne({ id }).exec();
  }
}
