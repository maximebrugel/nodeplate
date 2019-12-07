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
  public managerExemple(): string {
    const valueO: string = this.productService.exempleServiceO(),
      valueK: string = this.productService.exempleServiceK();

    return valueO.concat(valueK);
  }
}
