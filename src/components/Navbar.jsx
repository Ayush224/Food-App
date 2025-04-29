import React from "react";

const Navbar = () => {
  return (  
    <nav className="flex flex-col lg:mb-10 lg:flex-row justify-between mx-6 py-4">
      <div>
        <h1 className="text-3xl text-blue-500 font-bold">Food Heaven</h1>
        <h4 className="text-xl text-gray-600">{new Date().toUTCString().slice(0, 16)}</h4>
      </div>
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search food"
          autoComplete="off"
          className="p-3 w-full lg:w-[25vw] outline border border-gray-400 rounded-2xl"
        />
      </div>
    </nav>
  );
};

export default Navbar;
