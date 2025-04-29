import React from "react";
import Foodcard from "./Foodcard";
import FoodData from "../data/data";

const Foods = () => {
  return (
    <div className="flex flex-wrap gap-7 justify-center my-10">
      {FoodData.map((food) => {
        return (
          <Foodcard
            key={food.id}
            id={food.id}
            name={food.name}
            rating={food.rating}
            price={food.price}
            desc={food.desc}
            img={food.img}
          />
        );
      })}
    </div>
  );
};

export default Foods;
