import { useState, useRef, useEffect } from "react";
import AddressCard from "./AddressCard";

const Address = () => {
  const [openModal, setOpenModal] = useState(false);
  const popUp = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const handlePopupClose = (event: MouseEvent) => {
      if (popUp.current && !popUp.current.contains(event.target as Node)) {
        setOpenModal(false);
      }
    };
    document.addEventListener("mousedown", handlePopupClose);
    return () => {
      document.removeEventListener("mousedown", handlePopupClose);
    };
  }, [openModal]);

  return (
    <div className="w-[100%]">
      {openModal ? (
        <div className="absolute top-0 left-0 backdrop-blur-xs h-screen w-full flex items-center justify-center">
          <form
            className="bg-[var(--primary-color)] p-4 w-[50%] flex flex-col rounded"
            ref={popUp}
          >
            <fieldset className="flex flex-col my-4">
              <label htmlFor="name" className="text-white font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-white p-2 rounded-lg"
              />
            </fieldset>
            <fieldset className="flex flex-col my-4">
              <label htmlFor="address" className="text-white font-bold">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="bg-white p-2 rounded-lg"
              />
            </fieldset>
            <fieldset className="flex flex-col my-4">
              <label htmlFor="city" className="text-white font-bold">
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-white p-2 rounded-lg"
              />
            </fieldset>
            <fieldset className="flex flex-col my-4">
              <label htmlFor="zip" className="text-white font-bold">
                Zip
              </label>
              <input
                type="number"
                id="zip"
                className="bg-white p-2 rounded-lg"
              />
            </fieldset>
            <fieldset className="flex flex-col my-4">
              <label htmlFor="phone" className="text-white font-bold">
                Phone Number
              </label>
              <input
                type="number"
                id="phone"
                className="bg-white p-2 rounded-lg"
              />
            </fieldset>
            <button
              type="submit"
              className="bg-white text-[var(--primary-color)] font-bold px-4 py-2 rounded-lg mx-auto w-[50%]"
            >
              Send
            </button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Address</h1>
          <button
            onClick={() => setOpenModal(true)}
            className="text-[var(--primary-color)] border px-2 rounded-lg"
          >
            Add New
          </button>
        </div>
        <div className="flex flex-col items-center w-[100%] mt-5 gap-2">
          <AddressCard />
        </div>
      </div>
    </div>
  );
};

export default Address;
