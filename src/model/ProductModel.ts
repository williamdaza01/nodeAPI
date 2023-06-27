import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  nombre: string;
  precio_base: number;
  existencia: number;
  specialPrice?: number;
}

const ProductSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  precio_base: { type: Number, required: true },
  existencia: { type: Number, required: true },
  specialPrice: { type: Number },
});

export default mongoose.model<IProduct>('Product', ProductSchema);
