import { SiTicktick } from "react-icons/si";
import { ImCross } from "react-icons/im";
import type { CardProps } from "../utils/types.ts";

const CartCard = ({ product }: CardProps) => {
  return (
    <div className="border p-4 flex justify-between w-full rounded-lg">
      <div className="product flex gap-2">
        <img src={product.img} alt="" width={80} />
        <div className="description">
          <h3 className="font-semibold ">{product.name}</h3>
          <p>{product.description}</p>
          <div className="flex justify-start items-center gap-4 text-sm">
            <div className="sizes flex justify-center items-center ">
              <p className=" bg-[#e2e2e2] px-2 border">SIZE:</p>
              <select name="size" id="size" className="border">
                {product.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
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
            <SiTicktick className="text-green-500" /> Delivery by 9th June
          </p>
        </div>
      </div>
      <ImCross />
    </div>
  );
};

export default CartCard;
