import { Request, Response } from 'express';
import User, { IUser } from '../model/UserModel';
import Product, { IProduct } from '../model/ProductModel';

export const getPriceForClient = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user_id, nombre_producto } = req.params;

    const user: IUser | null = await User.findOne({ id: parseInt(user_id) });
    if (!user) {
      res.status(404).json({ error: 'Cliente no encontrado' });
      return;
    }

    const product: IProduct | null = await Product.findOne({ nombre: nombre_producto });
    if (!product) {
      res.status(404).json({ error: 'Producto no encontrado' });
      return;
    }

    const specialPrice = user.metadata.precios_especiales.find(
      (precio: { nombre_producto: string }) => precio.nombre_producto === nombre_producto
    );

    const price = specialPrice ? specialPrice.precio_especial_personal : product.precio_base;

    res.json({nombre_producto, price });
  } catch (error) {
    console.error('Error al obtener el precio especial:', error);
    res.status(500).json({ error: 'Error al obtener el precio especial' });
  }
};
