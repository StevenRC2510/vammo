"use client";
import React, { ChangeEvent, useState } from "react";

import { TipInputProps } from "./types";

const TipInput = ({ tip, setTip }: TipInputProps) => {
  const handleOnValidateTip = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value)) return;
    e.target.value = Math.max(0, Math.min(100, value)).toString();
  };

  return (
    <>
      <p className="text-gray-900 my-2 text-sm font-semibold">Enter your tip</p>
      <div className="flex w-full items-center gap-2">
        <div className="w-full rounded-md p-3 my-4 box-border bg-white overflow-hidden ring-red-300 focus:ring-4 flex items-center">
          <input
            value={tip}
            type="number"
            min="0"
            max="100"
            onInput={handleOnValidateTip}
            onChange={(e) => setTip(+e.target.value)}
            className="rounded-full px-4 focus:outline-none w-full bg-transparent"
            placeholder="Add your tip"
          />
        </div>
        <p className="text-gray-900 my-2 text-sm font-semibold">%</p>
      </div>
    </>
  );
};

export default TipInput;
