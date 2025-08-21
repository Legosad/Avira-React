import data from "../data/data.ts";
import type { Products } from "../utils/types.ts";
import Card from "./Card.tsx";

const products: Products[] = data.filter((data) => data.discounted !== "");

const SlashedPrices = () => {
  return (
    <div>
      <h2 className="mb-5 font-bold text-xl">Products at Slashed Prices</h2>

      <div className="grid grid-cols-4 gap-10 px-10">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SlashedPrices;
