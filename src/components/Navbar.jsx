import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import logo from "../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:mb-10 lg:flex-row justify-between mx-6 py-4">
      <div>
        <div className="flex gap-2">
          <img className="w-8 h-8" src={logo} alt="logo" />
          <h1 className="text-3xl text-blue-500 font-bold">Food Heaven</h1>
        </div>
        <h4 className="text-lg text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h4>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search food"
          autoComplete="off"
          className="p-3 w-full lg:w-[25vw] outline border border-gray-400 rounded-2xl"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
