import { FaCircle } from "react-icons/fa";
import data from "../data/data.ts";
import type { Product } from "../utils/types.ts";
import { Link } from "react-router-dom";
import CartCard from "./CartCard.tsx";
import PriceDetails from "./PriceDetails.tsx";
import Coupon from "./Coupon.tsx";
const products: Product[] = data;

const cartProducts: Product[] = products.slice(0, 2);
const Cart = () => {
  return (
    //Main Section
    <div className="flex flex-col justify-center items-center">
      {/* Header Div */}
      <div className="w-[50%] flex justify-between items-center my-6">
        <h3>Order Summary</h3>
        <p className="flex items-center gap-2 text-[var(--primary-color)]">
          <FaCircle /> {cartProducts.length} items
        </p>
      </div>
      {/* Content Div */}
      {cartProducts.length === 0 ? (
        <Link
          to="/"
          className="text-[var(--primary-color)] font-semibold mt-5 underline"
        >
          Find Something to Purchase
        </Link>
      ) : (
        <section className="flex justify-around gap-4 w-full p-4">
          <div className="flex flex-col justify-center gap-2 w-[50%]">
            {cartProducts.map((product: Product) => (
              // Cart Card
              <CartCard product={product} />
            ))}
          </div>
          <div className="section-right flex flex-col justify-start w-[50%] gap-10">
            <p className="bg-[#e2e2e2] p-2 rounded text-center">
              Yay!
              <strong> No delivery Charge</strong> on this order.
            </p>
            <Coupon />
            <PriceDetails products={cartProducts} />
            <button className="text-white bg-[#2d2d2d] m-4 p-2 rounded-lg hover:scale-105 transition-transform duration-300 hover:bg-[var(--primary-color)]">
              Place Order
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Cart;
