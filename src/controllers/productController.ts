import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}
  
  public getAll = async (_req: Request, res: Response) => {
    const product = await this.productService.getAll();
    res.status(200).json(product);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const newProduct = await this.productService.create(product);
    res.status(201).json(newProduct);
  };
}