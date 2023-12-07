"use client";
import React, { useEffect, useMemo } from "react";

import foodsData from "@/services/data/foods.json";

import FoodCard from "@/components/foodCard";

import useFoodStore from "@/store/useFood";

const FoodList = () => {
  const { getAll, foods } = useFoodStore((state) => state);

  useEffect(() => getAll(foodsData), [getAll]);

  const foodList = useMemo(
    () => foods.map((food) => <FoodCard key={food.id} {...food} />),
    [foods]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
      {foodList}
    </div>
  );
};

export default FoodList;
