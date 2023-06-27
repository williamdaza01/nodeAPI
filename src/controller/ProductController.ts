import { Request, Response } from 'express';
import Product, { IProduct } from '../model/ProductModel';

export const getProductsInStock = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find({ existencia: { $gt: 0 } });
    res.json(products);
  } catch (error) {
    console.error('Error al obtener los productos en stock:', error);
    res.status(500).json({ error: 'Error al obtener los productos en stock' });
  }
};
