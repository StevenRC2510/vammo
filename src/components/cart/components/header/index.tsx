import React from "react";
import Lottie from "lottie-react";

import checkLottie from "@/assets/lottie/check.json";

const HeaderCart = () => {
  return (
    <div className="flex items-center gap-2 bg-gray-900 p-2 rounded">
      <p className="text-white text-2xl font-bold">Cart List</p>
    </div>
  );
};

export default HeaderCart;
