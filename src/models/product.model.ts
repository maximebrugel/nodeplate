import { Schema, model } from "mongoose";
import { Product } from "./interfaces/product.interface";

const ProductSchema: Schema = new Schema({
  product_code: {
    type: String,
    unique: true
  }
}, { strict: "throw" });

export default model<Product>("product", ProductSchema);
