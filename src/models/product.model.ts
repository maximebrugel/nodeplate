import mongoose, { Schema } from "mongoose";
import { Product } from "./interfaces/product.interface";

const ProductSchema: Schema = new Schema({
  product_code: {
    type: String,
    unique: true
  }
});

export default mongoose.model<Product>("product", ProductSchema);
