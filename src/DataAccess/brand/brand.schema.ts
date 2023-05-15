import { Schema, Document } from 'mongoose';

export interface Brand extends Document {
  id: string;
  name: string;
  description: string;
  products: string[];
}

export const BrandSchema = new Schema<Brand>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    products: { type: [String], required: false },
  },
  { versionKey: false },
);
