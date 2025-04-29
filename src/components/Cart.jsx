import { IoMdCloseCircleOutline } from "react-icons/io";
import Items from "./Items";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [active, setActice] = useState(true);

  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <>
      <div
        className={`fixed right-0 top-0 lg:w-[20vw] h-full bg-white w-full mb-3 p-5 ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800 ">My Cart</span>
          <IoMdCloseCircleOutline
            className="font-bold text-xl hover:text-red-500 cursor-pointer"
            onClick={() => setActice(!active)}
          />
        </div>
        {cartItems.map((food) => {
          return (
            <Items
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          );
        })}

        <div className="absolute bottom-0">
          <h3 className="text-gray-800 font-semibold">Items :</h3>
          <h3 className="text-gray-800 font-semibold">Total Amount :</h3>
          <hr className="w-[90vw] lg:w-[17.5vw] my-2" />
          <button className="bg-green-500 font-bold px-3 py-2 mb-5 text-white rounded-lg w-[90vw] lg:w-[17.5vw]">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActice(!active)}
        className="rounded-2xl bg-blue-400 shadow-md text-5xl p-2 fixed bottom-4 right-4"
      />
    </>
  );
};

export default Cart;
