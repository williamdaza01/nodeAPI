import mongoose from 'mongoose';
import mongodbConfig from './db';

export const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(mongodbConfig.url, mongodbConfig.options);
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}