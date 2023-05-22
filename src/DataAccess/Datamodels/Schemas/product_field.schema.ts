import { Schema, Document } from 'mongoose';

export interface ProductField extends Document {
  id: string;
  attribute: string;
  value: any;
  created_at: Date;
  deleted_at: Date;
  updated_at: Date;
}

export const ProductFieldSchema = new Schema<ProductField>(
  {
    id: { type: String, required: true },
    attribute: { type: String, required: true },
    value: { required: true },
    created_at: { type: Date, required: true },
    deleted_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
  },
  { versionKey: false },
);
