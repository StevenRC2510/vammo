"use client";
import React from "react";
import Image from "next/image";

import { formatCurrency } from "@/utils/currency";

import { CartItemProps } from "./types";

const CartItem = ({ food, onDelete }: CartItemProps) => {
  const { name, cost, amount, quantity } = food;
  return (
    <div className="bg-white rounded-lg">
      <Image
        className="rounded-md"
        src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/grain-bowl-with-egg-1296-728-header.jpg?w=1155&h=1528"
        alt=""
        width={500}
        height={500}
        loading="lazy"
      />
      <div className="p-4">
        <p className="text-gray-90 text-sm">
          <strong>Name: </strong>
          {name}
        </p>
        <p className="text-gray-900 text-sm">
          <strong>Cost: </strong>
          {formatCurrency({
            amount: cost,
          })}
        </p>
        <p className="text-gray-900 text-sm">
          <strong>Quantity: </strong>
          {`${quantity} / ${amount}`}
        </p>
        <button
          className="w-full cursor-pointer mt-4 bg-gray-900 text-white px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItem;
