import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttributeDocument as Attribute } from '../Datamodels/attribute.type';

@Injectable()
export class AttributeService {
  constructor(
    @InjectModel('Attribute') private attributeModel: Model<Attribute>,
  ) {}

  async getAttributes(): Promise<Attribute[]> {
    return this.attributeModel.find().exec();
  }

  async getAttribute(id: string): Promise<Attribute> {
    return this.attributeModel.findOne({ id }).exec();
  }
  async getManyAttributes(attributeIDs: string[]): Promise<Attribute[]> {
    return this.attributeModel.find({
      id: {
        $in: attributeIDs,
      },
    });
  }
}
