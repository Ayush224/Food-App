import React from "react";
import Foodcard from "./Foodcard";
import FoodData from "../data/data";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Foods = () => {
  const search = useSelector((state) => state.search.search);
  // console.log(search)
  const category = useSelector((state) => state.category.category);
  const handleToast = (item) => toast.success(`Added ${item}`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-12 justify-center my-10 lg:justify-start ml-6">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => {
          return (
            <Foodcard
              key={food.id}
              id={food.id}
              name={food.name}
              rating={food.rating}
              price={food.price}
              desc={food.desc}
              img={food.img}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default Foods;
