import { useState } from "react";
import type { CardProps } from "../utils/types";
import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa";

const Card = ({ product }: CardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };
  return (
    <div className="flex flex-col justify-start gap-2">
      <div
        style={{
          backgroundImage: `url(${product.img})`,
          backgroundSize: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-70 flex justify-between items-end p-6"
      >
        <div className="flex justify-center items-center bg-white gap-2 rounded-sm px-2">
          <FaStar className="text-yellow-500" />
          <p className="m-0">{product.rating}</p>
        </div>
        <div className="py-1 text-lg">
          {isLiked ? (
            <FaHeart
              className="text-[var(--primary-color)]"
              onClick={() => handleLike()}
            />
          ) : (
            <FaRegHeart className="" onClick={() => handleLike()} />
          )}
        </div>
      </div>
      <h2 className="font-extrabold">{product.name}</h2>
      <h3>{product.description}</h3>
      <div className="flex gap-4 justify-left items-center text-[var(--primary-color)]">
        <span className="text-black line-through">{product.price}</span>
        {product.discounted}
      </div>
      <button className="w-full bg-black text-white py-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[var(--primary-color)]">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
