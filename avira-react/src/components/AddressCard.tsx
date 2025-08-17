import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";

const AddressCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="flex items-start gap-2 border p-2 rounded-lg w-[70%]">
      {isSelected ? (
        <RiCheckboxBlankCircleFill onClick={() => setIsSelected(!isSelected)} />
      ) : (
        <RiCheckboxBlankCircleLine onClick={() => setIsSelected(!isSelected)} />
      )}

      <div className="flex-grow text-xs">
        <p className="font-bold">Name</p>
        <p className="pr-2">
          Address Address Address Address Address Address Address Address
          Address Address Address Address
        </p>
        <p>City</p>
        <p>Postal Code</p>
        <p>Mobile</p>
      </div>
      <FaTrash />
    </div>
  );
};

export default AddressCard;
