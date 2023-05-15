import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import { v4 as uuid } from 'uuid';
import { ProductInput } from './product.input';

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private productModel: Model<Product>) {}

  async createProduct(productInput: ProductInput): Promise<Product> {
    const { name, description } = productInput;
    const product = {
      id: uuid(),
      name: name,
      description: description,
    };
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async getProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getProduct(id: string): Promise<Product> {
    return this.productModel.findOne({ id }).exec();
  }

  async updateProduct(
    id: string,
    productInput: ProductInput,
  ): Promise<Product> {
    const { name, description } = productInput;
    const product = {
      id: id,
      name: name,
      description: description,
    };
    return this.productModel
      .findOneAndUpdate({ id }, product, { new: true })
      .exec();
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
