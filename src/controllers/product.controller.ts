import { ProductManager } from "../managers/product.manager";
import { InvalidParameterException } from "../exceptions/invalidparameter.exception";
import { ProductService } from "../services/product.service";

/**
 * Controller managing products requests and responses
 */
export class ProductController {
  private productManager: ProductManager;
  private productService: ProductService;

  constructor() {
    this.productManager = new ProductManager();
    this.productService = new ProductService();
  }

  /**
   * Find all product's code, and return them in a json
   * @param req rest request
   * @param res rest response
   * @param next middleware, the error handling
   */
  public findAllProductCode(req: any, res: any, next: any) {
    try {
      this.productService
        .findAllProductCode()
        .then((value: any) => {
          res.status(200).json(value);
        })
        .catch(next);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Find one product by product_code, and return them in a json
   * @param req rest request, with the product_code
   * @param res rest response
   * @param next middleware, the error handling
   */
  public findOneByProductCode(req: any, res: any, next: any) {
    try {
      if (!("productCode" in req.params) || !req.params.productCode) {
        next(
          new InvalidParameterException(
            ": /api/product/:productCode - productCode is required"
          )
        );
      }
      this.productService
        .findOneByProductCode(req.params.productCode)
        .then((value: any) => {
          res.status(200).json(value);
        })
        .catch(next);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Illustrate the using of a manager which is calling
   * multiple services
   * @param req rest request, with the product_code
   * @param res rest response
   * @param next middleware, the error handling
   */
  public health(req: any, res: any, next: any) {
    try {
      res.status(200).json(this.productManager.managerExemple());
    } catch (error) {
      next(error);
    }
  }
}
