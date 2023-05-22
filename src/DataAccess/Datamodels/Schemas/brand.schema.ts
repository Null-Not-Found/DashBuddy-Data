import { Schema, Document } from 'mongoose';

export interface Brand extends Document {
  id: string;
  name: string;
  description: string;
  owner_id: string;
  updated_at: Date;
  deleted_at: Date;
  created_at: Date;
  products: string[];
}

export const BrandSchema = new Schema<Brand>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    owner_id: { type: String, required: true },
    updated_at: { type: Date, required: true },
    deleted_at: { type: Date, required: true },
    created_at: { type: Date, required: true },
    products: { type: [String], required: false },
  },
  { versionKey: false },
);
