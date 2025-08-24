import { useState } from "react";
import googlepay from "/images/payment/google-pay.png";
import paypal from "/images/payment/phone-pay.png";
import visa from "/images/payment/visa.png";
import mastercard from "/images/payment/master-card.png";
import amazon from "/images/payment/amazon.png";

const PaymentOptions = () => {
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // allow only digits
    input = input.replace(/\D/g, "");

    // limit to 3 characters
    if (input.length > 3) {
      input = input.slice(0, 3);
    }

    setCvv(input);
  };
  const handleExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // allow only digits
    input = input.replace(/\D/g, "");

    // add slash after 2 digits (MM)
    if (input.length > 2) {
      input = input.slice(0, 2) + "/" + input.slice(2, 4);
    }

    setExpiry(input);
  };
  return (
    <div>
      <h1 className="font-bold uppercase">Select Payment Options</h1>
      <form action="" className="flex flex-col items-center gap-4 mt-4">
        <fieldset className="flex items-center gap-2  w-[60%] p-2 rounded shadow-[0_0_6px_rgba(120,120,120,0.8)]">
          <input
            type="checkbox"
            className="w-4 h-4 appearance-none border-2 border-[var(--primary-color)] rounded-full checked:bg-blue-500 checked:border-blue-500 relative cursor-pointer"
            name="cod"
          />

          <label htmlFor="cod">Cash on Delivery</label>
        </fieldset>
        {/* <fieldset className="flex items-center gap-2  w-[50%] p-2 rounded shadow-[0_0_6px_rgba(120,120,120,0.8)]">
          <input
            type="checkbox"
            className="w-4 h-4 appearance-none border-2 border-[var(--primary-color)] rounded-full checked:bg-blue-500 checked:border-blue-500 relative cursor-pointer"
            name="google-pay"
          />

          <label htmlFor="google-pay">Phone Pay / Google Pay</label>
        </fieldset>
        <fieldset className="flex items-center gap-2  w-[50%] p-2 rounded shadow-[0_0_6px_rgba(120,120,120,0.8)]">
          <input
            type="checkbox"
            className="w-4 h-4 appearance-none border-2 border-[var(--primary-color)] rounded-full checked:bg-blue-500 checked:border-blue-500 relative cursor-pointer"
            name="net-banking"
          />

          <label htmlFor="net-banking">Net Banking</label>
        </fieldset> */}
        <fieldset className="flex flex-wrap items-center gap-2 w-[30%] p-2 rounded shadow-[0_0_6px_rgba(120,120,120,0.8)]">
          <input
            type="checkbox"
            className="w-4 h-4 appearance-none border-2 border-[var(--primary-color)] rounded-full checked:bg-blue-500 checked:border-blue-500 relative cursor-pointer"
            name="credit-debit-card"
          />

          <label htmlFor="credit-debit-card">Credit / Debit Card</label>
          <div className="flex justify-end">
            <img id="card-verification" src="" alt="" />
          </div>
          <fieldset className="flex-grow flex flex-col gap-2">
            <input
              className=" rounded-lg p-2 border border-gray-500"
              type="text"
              placeholder="Card Number"
            />
            <input
              className=" rounded-lg p-2 border border-gray-500"
              type="text"
              placeholder="Name on Card"
            />
            <div className="flex justify-around gap-2">
              <input
                className=" rounded-lg p-2 border border-gray-500"
                value={expiry}
                onChange={handleExpiry}
                type="text"
                placeholder="MM/YY"
                maxLength={5}
              />
              <input
                className=" rounded-lg p-2 border border-gray-500"
                type="text"
                value={cvv}
                onChange={handleCvv}
                placeholder="CVV"
                maxLength={3}
              />
            </div>
          </fieldset>
          <div className="flex w-full justify-around">
            <img width={50} src={paypal} alt="paypal" />
            <img width={50} src={googlepay} alt="googlepay" />
            <img width={50} src={mastercard} alt="mastercard" />
            <img width={50} src={visa} alt="visa" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default PaymentOptions;
