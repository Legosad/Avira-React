import type { PriceDetailsProps } from "./../utils/types";

const PriceDetails = ({ products }: PriceDetailsProps) => {
  function getPrices() {
    let mrp = 0;
    products.forEach((product) => (mrp += +product.price));
  }
  function getSlashedPrices() {
    let discounted = 0;
    products.forEach((product) => (discounted += +product.discounted));
  }
  return (
    <div>
      <h3 className="font-bold text-lg mb-2">
        Price Details({products.length} items)
      </h3>
      <div>
        <div className="flex justify-between">
          <p>Total MRP</p>
          <p>$$$$$</p>
        </div>
        <div className="flex justify-between">
          <p>Discount on MRP</p>
          <p></p>
        </div>
        <div className="flex justify-between">
          <p>Coupon Discount</p>
          <p>None</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Charge</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between">
          <p>Total Amount</p>
          <p>$$$$$</p>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
