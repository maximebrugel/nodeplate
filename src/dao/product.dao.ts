import productModel from "../models/product.model";
import log from "../logger/log";
import { DataNotFoundException } from "../exceptions/datanotfound.exception";
import { Product } from "../models/interfaces/product.interface";

/**
 * Product data access functions
 */
export class ProductDao {
  /**
   * Find all product's code
   * @exception DataNotFoundException if no data in "product" collection
   * @return a promise with all products (containing the document _id and product_code)
   */
  public findAllProductCode(): Promise<Product[]> {
    log.info(`DAO : findAll() - products`);
    return productModel
      .find()
      .select("product_code")
      .exec()
      .then(value => {
        if (value === null) {
          throw new DataNotFoundException("- no product_code");
        }
        return value;
      });
  }

  /**
   * Find one product for a given product_code
   * @param productCode the productCode for the finding
   * @exception DataNotFoundException if no product for the given product_code
   * @return a promise with the full products (no select)
   */
  public findOneByProductCode(productCode: string): Promise<Product> {
    log.info(`DAO : findOneByproductCode() - ${productCode}`);
    return productModel
      .findOne({ product_code: productCode })
      .exec()
      .then(value => {
        if (value === null) {
          throw new DataNotFoundException(
            `- no product for product_code = ${productCode}`
          );
        }
        return value;
      });
  }
}
