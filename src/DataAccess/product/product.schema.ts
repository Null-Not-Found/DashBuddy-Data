import { Schema, Document } from 'mongoose';

export interface Product extends Document {
  id: string;
  name: string;
  description: string;
}

export const ProductSchema = new Schema<Product>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { versionKey: false },
);
