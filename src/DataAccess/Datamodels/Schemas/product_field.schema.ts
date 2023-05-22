import { Schema, Document } from 'mongoose';
import any = jasmine.any;

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
    value: {},
    created_at: { type: Date, required: true },
    deleted_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
  },
  { versionKey: false },
);
