import { Schema, Document } from 'mongoose';

export interface Client extends Document {
  id: string;
  name: string;
  updated_at: Date;
  deleted_at: Date;
  created_at: Date;
}

export const ClientSchema = new Schema<Client>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    updated_at: { type: Date, required: true },
    deleted_at: { type: Date, required: true },
    created_at: { type: Date, required: true },
  },
  { versionKey: false },
);
