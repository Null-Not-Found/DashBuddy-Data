import { Schema, Document } from 'mongoose';

export interface ProductStatus extends Document {
  id: string;
  label: string;
  color: string;
  order: number;
  Allowed_to_publish: boolean;
  created_at: Date;
  updated_at: Date;
}

export const ProductStatusSchema = new Schema<ProductStatus>(
  {
    id: { type: String, required: true },
    label: { type: String, required: true },
    color: { type: String, required: true },
    order: { type: Number, required: true },
    Allowed_to_publish: { type: Boolean, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
  },
  { versionKey: false },
);
