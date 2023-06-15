import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AttributeType as Attribute } from '../Datamodels/attribute.type';

@Injectable()
export class AttributeService {
  constructor(
    @InjectModel('Attribute') private attributeModel: Model<Attribute>,
  ) {}

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
