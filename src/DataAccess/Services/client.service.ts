import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientType } from '../Datamodels/client.type';

@Injectable()
export class ClientService {
  constructor(@InjectModel('Client') private clientModel: Model<ClientType>) {}

  async getClient(id: string): Promise<ClientType> {
    return this.clientModel.findOne({ id }).exec();
  }
}
