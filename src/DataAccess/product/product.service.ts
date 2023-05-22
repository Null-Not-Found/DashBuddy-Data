import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../Datamodels/Schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async getProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getProduct(id: string): Promise<Product> {
    return this.productModel.findOne({ id }).exec();
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.productModel.findOneAndDelete({ id }).exec();
  }

  async getManyProducts(productsIDs: string[]): Promise<Product[]> {
    return this.productModel.find({
      id: {
        $in: productsIDs,
      },
    });
  }
}
