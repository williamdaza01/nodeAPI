import express, { Request, Response } from 'express';
import cors from 'cors';
import { connectToDatabase } from './app';
import { getProductsInStock } from './controller/ProductController';
import { getPriceForClient } from './controller/PriceController';

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors());

connectToDatabase();

app.get('/products', getProductsInStock);
app.get('/price/:user_id/:nombre_producto', getPriceForClient);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
