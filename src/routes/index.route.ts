import { Router } from "express";
import { ProductRoute } from "./product.route";
import environment from "../config/environment";

/**
 * Root api router specifications
 * => API_URL/api/
 */
export class IndexRoute {
  private api: Router = Router();
  private productRoute: ProductRoute;

  constructor() {
    this.productRoute = new ProductRoute();
    this.routes();
  }

  /**
   * @return The application router/api
   */
  public getApi(): Router {
    return this.api;
  }

  /**
   * Define index routes
   */
  private routes(): void {
    this.api.get("/", (req, res) => {
      res.json({
        server: "Nodeplate",
        version: environment.VERSION
      });
    });

    this.api.get("/_health", (req, res) => {
      res.sendStatus(200);
    });

    this.api.use("/product", this.productRoute.getApi());
  }
}
