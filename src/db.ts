import { ConnectOptions } from 'mongoose';

interface MongoDBConfig {
  url: string;
  options: ConnectOptions;
}

const mongodbConfig: MongoDBConfig = {
  url:
    'mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin',
  options: {
    dbName: 'challenge',
  },
};

export default mongodbConfig;