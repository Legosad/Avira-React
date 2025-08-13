import { useEffect, useState } from "react";
import type { PriceDetailsProps } from "./../utils/types";

const PriceDetails = ({ products }: PriceDetailsProps) => {
  const [mrp, setMrp] = useState(0);
  const [discounted, setDiscounted] = useState(0);
  const [couponDiscount, setCouponDiscount] = useState(10);
  const [deliveryCharge, setDeliveryCharge] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setMrp(getPrices());
    setDiscounted(getSlashedPrices());
  }, []);
  useEffect(() => {
    setTotal(getTotal);
  }, [mrp, discounted, couponDiscount, deliveryCharge]);

  function getPrices() {
    return products.reduce((total, product) => {
      const numericValue = parseFloat(product.price?.split(" ")[1]) || 0;
      return total + numericValue;
    }, 0);
  }

  function getSlashedPrices() {
    return products.reduce((total, product) => {
      const numericValue = parseFloat(product.discounted?.split(" ")[1]) || 0;
      return total + numericValue;
    }, 0);
  }
  function getTotal() {
    let sumAmount = discounted - couponDiscount + deliveryCharge;
    return sumAmount;
  }
  return (
    <div>
      <h3 className="font-bold text-lg mb-2">
        Price Details({products.length} items)
      </h3>
      <div>
        <div className="flex justify-between">
          <p>Total MRP</p>
          <p>Rs. {mrp}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount on MRP</p>
          <p>Rs. {mrp - discounted}</p>
        </div>
        <div className="flex justify-between">
          <p>Coupon Discount</p>
          <p>{!!couponDiscount ? `Rs. ${couponDiscount}` : "None"}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <p>{!!deliveryCharge ? `Rs. ${deliveryCharge}` : "Free"}</p>
        </div>
        <div className="flex justify-between">
          <p>Total Amount</p>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
