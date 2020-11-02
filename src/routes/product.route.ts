import { ProductController } from "../controllers/product.controller";
import { Router } from "express";

/**
 * "product" api router specifications
 * => API_URL/api/product/
 */
export class ProductRoute {
  private api: Router = Router();
  private readonly productController: ProductController;

  constructor() {
    this.productController = new ProductController();
    this.routes();
  }

  /**
   * @return The application router/api
   */
  public getApi(): Router {
    return this.api;
  }

  /**
   * Define products routes
   */
  private routes(): void {
    /**
     * @swagger
     * /api/product:
     *   get:
     *     tags: ["Product"]
     *     summary: Return all product_code
     *     security:
     *      - bearerAuth: []
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: Success
     *       404:
     *         description: DataNotFoundException
     *       500:
     *         description: Error during query execution
     */
    this.api.get(
      "/",
      this.productController.findAllProductCode.bind(this.productController)
    );

    /**
     * @swagger
     * /api/product/{productCode}:
     *   get:
     *     tags: ["Product"]
     *     summary: Return a product for a given productCode
     *     security:
     *      - bearerAuth: []
     *     parameters:
     *      - in: path
     *        name: productCode
     *        type: string
     *        required: true
     *        description: Product code
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: Success
     *       404:
     *         description: DataNotFoundException
     *       400:
     *         description: Malformed request syntax (productCode required)
     *       500:
     *         description: Error during query execution
     */
    this.api.get(
      "/:productCode",
      this.productController.findOneByProductCode.bind(this.productController)
    );

    /**
     * @swagger
     * /api/manager/example:
     *   get:
     *     tags: ["Product"]
     *     summary: Return 'OK' to illustrate usage of a manager
     *     security:
     *      - bearerAuth: []
     *     produces:
     *      - application/json
     *     responses:
     *       200:
     *         description: Success
     *       500:
     *         description: Error during query execution
     */
    this.api.get(
      "/manager/example",
      this.productController.health.bind(this.productController)
    );
  }
}
