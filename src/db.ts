import { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

interface MongoDBConfig {
  url: string;
  options: ConnectOptions;
}

const mongodbConfig: MongoDBConfig = {
  url: process.env.MONGODB_URL || '',
  options: {
    dbName: process.env.MONGODB_DBNAME,
  },
};

export default mongodbConfig;