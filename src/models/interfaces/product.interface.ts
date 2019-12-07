import { Document } from "mongoose";

export interface Product extends Document {
  product_code: string;
}
