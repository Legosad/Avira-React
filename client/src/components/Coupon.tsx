import React from "react";

const Coupon = () => {
  return (
    <div id="coupon">
      <h3 className="font-bold text-lg">Have a Coupon</h3>
      <div className="bg-[#e2e2e2] p-2 rounded flex justify-between border">
        <input
          type="text"
          placeholder="Enter Coupon code"
          className="flex-grow"
        />
        <button className="text-[var(--primary-color)]">Apply</button>
      </div>
    </div>
  );
};

export default Coupon;
