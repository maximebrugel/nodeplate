import { ProductService } from "../services/product.service";

/**
 * Product manager
 */
export class ProductManager {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  /**
   * Illustrate de way a manager is calling multiple services, by
   * concatenating 2 values from 2 services.
   */
  public managerExample(): string {
    const valueO: string = this.productService.exampleServiceO(),
      valueK: string = this.productService.exampleServiceK();

    return valueO.concat(valueK);
  }
}
