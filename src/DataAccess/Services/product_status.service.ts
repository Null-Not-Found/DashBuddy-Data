import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product_statusType } from '../Datamodels/product_status.type';

@Injectable()
export class Product_statusService {
  constructor(
    @InjectModel('ProductStatus')
    private product_statusModel: Model<Product_statusType>,
  ) {}

  async getProductStatuses(): Promise<Product_statusType[]> {
    return this.product_statusModel.find().exec();
  }

  async getProductStatus(id: string): Promise<Product_statusType> {
    return this.product_statusModel.findOne({ id }).exec();
  }
}
