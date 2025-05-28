import { FaCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import data from "../data/data.ts";
import type { Products } from "../utils/types.ts";
import { Link } from "react-router-dom";
import { SiTicktick } from "react-icons/si";

const products: Products[] = data;

const cartProducts: Products[] = products.slice(0, 2);
const Cart = () => {
  return (
    //Main Section
    <div className="flex flex-col justify-center items-center">
      {/* Header Div */}
      <div className="w-[50%] flex justify-between items-center">
        <h3>Order Summary</h3>
        <p className="flex items-center gap-2 text-[var(--primary-color)]">
          <FaCircle /> {cartProducts.length} items
        </p>
      </div>
      {/* Content Div */}
      <div className="flex justify-center items-center gap-4">
        {/* Cart Size Check */}
        {cartProducts.length === 0 ? (
          <Link
            to="/"
            className="text-[var(--primary-color)] font-semibold mt-5 underline"
          >
            Find Something to Purchase
          </Link>
        ) : (
          cartProducts.map((product) => (
            // Cart Card
            <div className="border p-4 flex justify-between w-full">
              <div className="product flex gap-2">
                <img src={product.img} alt="" width={80} />
                <div className="description">
                  <h3 className="font-semibold ">{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="flex justify-start items-center gap-4 text-sm">
                    <div className="sizes flex justify-center items-center ">
                      <p className=" bg-[#e2e2e2] px-2 border">SIZE:</p>
                      <select name="size" id="size" className="border">
                        {product.sizes.map((size) => (
                          <option value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                    <div className="quantity flex justify-center items-center bg-[#e2e2e2]">
                      <button className="border px-2">+</button>
                      <p className="border px-2">01</p>
                      <button className="border px-2">-</button>
                    </div>
                  </div>
                  <p className="flex gap-4 text-sm">
                    <span className="line-through">{product.price}</span>
                    <span className="text-[var(--primary-color)]">
                      {product.discounted}
                    </span>
                  </p>
                  <p className="flex gap-2 items-center text-sm">
                    <SiTicktick className="text-green-500" /> Delivery by 9th
                    June
                  </p>
                </div>
              </div>
              <ImCross />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
