import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product_statusDocument as ProductStatus } from '../Datamodels/product_status.type';

@Injectable()
export class Product_statusService {
  constructor(
    @InjectModel('ProductStatus')
    private product_statusModel: Model<ProductStatus>,
  ) {}

  async getProductStatuses(): Promise<ProductStatus[]> {
    return this.product_statusModel.find().exec();
  }

  async getProductStatus(id: string): Promise<ProductStatus> {
    return this.product_statusModel.findOne({ id }).exec();
  }
}
