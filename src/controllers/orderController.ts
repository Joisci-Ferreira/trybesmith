import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }
  
  public getAll = async (_req: Request, res: Response) => {
    const order = await this.orderService.getAll();
    res.status(200).json(order);
  };
}