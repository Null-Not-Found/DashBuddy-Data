import { Schema, Document } from 'mongoose';

export interface Attribute extends Document {
  id: string;
  name: string;
  required: boolean;
  created_at: Date;
  deleted_at: Date;
  updated_at: Date;
}

export const AttributeSchema = new Schema<Attribute>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    required: { type: Boolean, required: true },
    created_at: { type: Date, required: true },
    deleted_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
  },
  { versionKey: false },
);
