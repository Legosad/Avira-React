import imgMen from "/images/categories/men.png";
import imgWomen from "/images/categories/women.png";
import imgKids from "/images/categories/kids.png";
import imgFootwear from "/images/categories/footwear.png";
import imgbeauty from "/images/categories/beauty.png";
import imgAccessories from "/images/categories/acessories.png";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    navigate("/products");
  };
  return (
    <div>
      <h2 className="mb-5 font-bold text-xl">Shop By Categories</h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-3">
        <div
          style={{
            backgroundImage: `url(${imgMen})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
          className="row-span-2 h-[350px] flex justify-center items-end p-4"
        >
          <button
            onClick={() => handleCategoryClick()}
            className="bg-white p-[10px] text-[10px] tracking-wider font-semibold  "
          >
            Men
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${imgWomen})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="row-span-2 flex justify-center items-end p-4"
        >
          <button
            onClick={() => handleCategoryClick()}
            className="bg-white p-[10px] text-[10px] tracking-wider font-semibold"
          >
            Women
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${imgAccessories})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
          className="flex justify-start items-end p-4"
        >
          <button
            onClick={() => handleCategoryClick()}
            className="bg-white p-[10px] text-[10px] tracking-wider font-semibold"
          >
            Accessories
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${imgKids})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex justify-start items-end p-4"
        >
          <button
            onClick={() => handleCategoryClick()}
            className="bg-white p-[10px] text-[10px] tracking-wider font-semibold"
          >
            Kids
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${imgFootwear})`,
            backgroundSize: "cover",
          }}
          className="flex justify-start items-start p-4 bg-[center_80%]"
        >
          <button
            onClick={() => handleCategoryClick()}
            className="bg-white p-[10px] text-[10px] tracking-wider font-semibold"
          >
            Footwear
          </button>
        </div>
        <div
          style={{
            backgroundImage: `url(${imgbeauty})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="flex justify-start items-start p-4"
        >
          <button
            onClick={() => handleCategoryClick()}
            className="bg-white p-[10px] text-[10px] tracking-wider font-semibold"
          >
            Beauty
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
