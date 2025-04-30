import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Items = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} removed!!`, {
            icon: "❌",
          });
        }}
        className="absolute right-7 cursor-pointer text-gray-700"
      />
      <img src={img} alt="food-img" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <FaMinus
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer"
              onClick={() =>
                qty > 1 ? dispatch(decreaseQty({ id })) : (qty = 0)
              }
            />
            <span>{qty}</span>
            <FaPlus
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md text-xl p-1 transition-all ease-linear cursor-pointer"
              onClick={() =>
                qty >= 1 ? dispatch(increaseQty({ id })) : (qty = 0)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
