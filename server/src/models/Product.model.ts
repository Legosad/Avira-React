import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  img: string;
  price: number;
  discounted?: number | null;
  rating: number;
  sizes: string[];
  selectedSize: string;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true }, // store as number instead of "Rs. 2299"
    discounted: { type: Number, default: null },
    rating: { type: Number, required: true, min: 0, max: 5 },
    sizes: {
      type: [String],
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
      required: true,
    },
    selectedSize: {
      type: String,
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
      default: "XS",
    },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);
