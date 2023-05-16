import { Schema, Document } from 'mongoose';

export interface ProductModel extends Document {
  id: string;
  name: string;
  attributes: string[];
  client_id: string;
  updated_at: Date;
  deleted_at: Date;
  created_at: Date;
}

export const ProductModelSchema = new Schema<ProductModel>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    attributes: { type: [String], required: true },
    client_id: { type: String, required: true },
    updated_at: { type: Date, required: true },
    deleted_at: { type: Date, required: true },
    created_at: { type: Date, required: true },
  },
  { versionKey: false },
);
