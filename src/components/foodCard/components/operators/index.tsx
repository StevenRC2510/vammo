import React from "react";

import { OperatorsProps } from "./types";

const Operators = ({ onAdd, onSubtract }: OperatorsProps) => {
  return (
    <div className="w-full grid gap-2">
      <button
        className="cursor-pointer bg-gray-900 text-white px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105"
        onClick={onAdd}
      >
        Add
      </button>
      <button
        className="cursor-pointer bg-gray-900 text-white px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105"
        onClick={onSubtract}
      >
        subtract
      </button>
    </div>
  );
};

export default Operators;
