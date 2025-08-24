import tick from "/images/continue-shopping/checked.png";
import car from "/images/continue-shopping/Illustration.png";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 gap-6">
      <div className="flex items-center gap-2">
        <h1 className="font-bold text-[var(--primary-color)] text-3xl uppercase">
          Confirmed
        </h1>
        <img src={tick} alt="" />
      </div>
      <p className="font-bold uppercase text-xl">Thank You for Your Order</p>
      <p className="font-bold text-xl">Order Id: 56089</p>
      <img src={car} alt="" />
      <p className="font-bold text-lg">Estimated Delivery</p>
      <p className="font-bold text-lg">Monday, 09th January, 2023</p>
      <button className="text-white bg-[#2d2d2d] m-4 p-2 rounded-lg hover:scale-105 transition-transform duration-300 hover:bg-[var(--primary-color)]  mx-auto">
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderConfirmation;
