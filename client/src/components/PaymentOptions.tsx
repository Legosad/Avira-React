import React from "react";

const PaymentOptions = () => {
  return (
    <div>
      <h1>Select Payment Options</h1>
      <form action="" className="flex flex-col items-center">
        <fieldset className="flex items-center gap-2  w-[50%] p-2 rounded shadow-[0_0_6px_rgba(120,120,120,0.8)]">
          <input
            type="checkbox"
            className="w-4 h-4 appearance-none border-2 border-[var(--primary-color)] rounded-full checked:bg-blue-500 checked:border-blue-500 relative cursor-pointer"
            name="cod"
          />

          <label htmlFor="cod">Cash on Delivery</label>
        </fieldset>
        <fieldset className="flex items-center gap-2  w-[50%] p-2 rounded shadow-[0_0_6px_rgba(120,120,120,0.8)]">
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
        </fieldset>
        <fieldset className="flex flex-wrap items-center gap-2  w-[50%] p-2 rounded shadow-[0_0_6px_rgba(120,120,120,0.8)]">
          <input
            type="checkbox"
            className="w-4 h-4 appearance-none border-2 border-[var(--primary-color)] rounded-full checked:bg-blue-500 checked:border-blue-500 relative cursor-pointer"
            name="credit-debit-card"
          />

          <label htmlFor="credit-debit-card">Credit / Debit Card</label>
          <fieldset className="flex-grow">
            <input type="number" placeholder="Card Number" />
            <input type="text" placeholder="Name on Card" />
            <input id="expiry" type="date" placeholder="MM/YY" maxLength={5} />
            <input type="number" placeholder="CVV" maxLength={3} />
          </fieldset>
        </fieldset>
      </form>
    </div>
  );
};

export default PaymentOptions;
