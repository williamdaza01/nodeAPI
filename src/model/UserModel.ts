import mongoose, { Schema, Document } from 'mongoose';

interface SpecialPrice {
  nombre_producto: string;
  precio_especial_personal: number;
}

interface UserMetadata {
  precios_especiales: SpecialPrice[];
}

export interface IUser extends Document {
  id: number;
  nombre: string;
  metadata: UserMetadata;
}

const UserSchema: Schema = new Schema({
  id: { type: Number, required: true },
  nombre: { type: String, required: true },
  metadata: {
    precios_especiales: [
      {
        nombre_producto: { type: String, required: true },
        precio_especial_personal: { type: Number, required: true },
      },
    ],
  },
});

export default mongoose.model<IUser>('User', UserSchema);
