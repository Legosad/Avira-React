import data from "../data/data.ts";
import type { Products } from "../utils/types.ts";
import Card from "./Card.tsx";
import { FaCircle } from "react-icons/fa";

const products: Products[] = data;

const Products = () => {
  return (
    <div className="w-[80%] mx-auto my-10">
      <div className="flex gap-2 justify-start items-center mb-5">
        <h2 className=" font-bold text-xl">Women</h2>
        <p className="text-[var(--primary-color)] flex justify-center items-center gap-2 m-0">
          <FaCircle /> 12
        </p>
      </div>

      <div className="grid grid-cols-4 gap-10 px-10">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
