import { Schema, Document } from 'mongoose';
import {
  ProductField,
  ProductFieldSchema,
} from './Schemas/product_field.schema';

export interface Product extends Document {
  id: string;
  name: string;
  brand: string;
  model: string;
  owner_id: string;
  fields: [ProductField];
  gtin: string;
  product_statuses_id: string;
  created_at: Date;
  deleted_at: Date;
  updated_at: Date;
}

export const ProductSchema = new Schema<Product>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    owner_id: { type: String, required: true },
    fields: { type: [ProductFieldSchema], required: true },
    gtin: { type: String, required: true },
    product_statuses_id: { type: String, required: true },
    created_at: { type: Date, required: true },
    deleted_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
  },
  { versionKey: false },
);
