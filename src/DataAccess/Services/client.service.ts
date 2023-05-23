import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientDocument as Client } from '../Datamodels/client.type';

@Injectable()
export class ClientService {
  constructor(@InjectModel('Client') private clientModel: Model<Client>) {}

  async getClients(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async getClient(id: string): Promise<Client> {
    return this.clientModel.findOne({ id }).exec();
  }
}
