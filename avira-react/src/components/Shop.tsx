import Categories from "./Categories";
import SlashedPrices from "./SlashedPrices";
const Shop = () => {
  return (
    <div className="flex flex-col w-[80%] mx-auto gap-6 my-20">
      <Categories />
      <SlashedPrices />
    </div>
  );
};

export default Shop;
