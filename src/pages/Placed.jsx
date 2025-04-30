import { div } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Placed = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="blue"/>
      ) : (
        <div>
          <h2 className="text-3xl text-center font-semibold mb-4 text-green-500">
            SUCCESS!!
          </h2>
          <p>Your order has been placed successfully</p>
        </div>
      )}
    </div>
  );
};

export default Placed;
