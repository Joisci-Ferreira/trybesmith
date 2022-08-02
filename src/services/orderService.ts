import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import Order from '../interfaces/orderInterface';
import ProductModel from '../models/productsModel';

export default class OrderService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const order = await this.model.getAll();
    const products = await this.productModel.getAll();

    const result = order.map(({ id, userId }) => ({
      id,
      userId,
      productsIds: products.filter((product) => id === product.orderId)
        .map((item) => item.id),
    }));

    return result as Order[];
  }
}