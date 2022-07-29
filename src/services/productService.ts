import connection from '../models/connection';
import ProductModel from '../models/productsModel';
import Product from '../interfaces/productInterface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const product = await this.model.getAll();
    return product;
  }

  public async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}