import PriceDetails from "./PriceDetails.tsx";
import Address from "./Address.tsx";
import data from "../data/data.ts";
import type { Product } from "../utils/types.ts";

const AddressPage = () => {
  const products: Product[] = data.slice(0, 2);
  return (
    <div className="w-[100%] flex justify-center items-start mt-10 gap-2 p-4">
      <div className="w-[100%]">
        <Address />
      </div>
      <div className="h-[-webkit-fill-available] w-[5px] bg-black"></div>
      <div className="w-[100%] flex flex-col">
        <PriceDetails products={products} />
        <button className="text-white bg-[#2d2d2d] m-4 p-2 rounded-lg hover:scale-105 transition-transform duration-300 hover:bg-[var(--primary-color)] w-[80%] mx-auto">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default AddressPage;
