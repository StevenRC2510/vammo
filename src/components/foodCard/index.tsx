import React, { useMemo } from "react";
import Image from "next/image";

import { faker } from "@faker-js/faker";

import Tag from "@/components/tag";
import Operators from "@/components/foodCard/components/operators";

import { Food } from "@/shared/types";
import useCartStore from "@/store/useCart";
import { formatCurrency } from "@/utils/currency";

const FoodCard = (food: Food) => {
  const { addItemToCart, subtractItemToCart } = useCartStore((state) => state);

  const description = useMemo(() => faker.lorem.paragraph(), []);

  return (
    <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
      <Tag text="Lunch" />
      <Image
        className="w-64 mx-auto transform transition duration-300 hover:scale-105"
        src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/grain-bowl-with-egg-1296-728-header.jpg?w=1155&h=1528"
        alt=""
        width={500}
        height={500}
        loading="lazy"
      />
      <div className="flex flex-col items-center my-3 space-y-2">
        <h1 className="text-gray-900 poppins text-lg">{food.name}</h1>
        <p className="text-gray-500 poppins text-sm text-center">
          {description.slice(0, 50)}
        </p>
        <h2 className="text-gray-900 poppins text-2xl font-bold">
          {formatCurrency({ amount: food.cost })}
        </h2>
        <Operators
          onAdd={() => addItemToCart(food)}
          onSubtract={() => subtractItemToCart(food)}
        />
      </div>
    </div>
  );
};

export default FoodCard;
