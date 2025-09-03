import mongoose, { Schema, Document, Types } from "mongoose";
import type { ICartItem } from "./Cart.model.ts";

interface IAddress {
  location: string;
  city: string;
  zipCode: string;
  country: string;
  phone: string;
}

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  addresses: IAddress[];
  cart: ICartItem[]; // reuse the Cart interface
}

// keep your addressSchema
const addressSchema = new Schema<IAddress>(
  {
    location: { type: String, required: true },
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { _id: false }
);

// reuse cartItemSchema from Cart.model.ts if you export it, or redefine it the same way
const cartItemSchema = new Schema<ICartItem>(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 },
    size: {
      type: String,
      required: true,
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
      default: "XS",
    },
  },
  { _id: false }
);

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    addresses: [addressSchema],
    cart: [cartItemSchema], // reuse schema
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
