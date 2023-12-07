import React from "react";

import useCartStore from "@/store/useCart";
import { formatCurrency } from "@/utils/currency";

import { FooterCartProps } from "./types";

const FooterCart = ({ tip = 0 }: FooterCartProps) => {
  const cart = useCartStore((state) => state);
  const subTotal = cart.subtotalPrice();
  const total = cart.totalPrice(tip, subTotal);

  return (
    <div className="bg-gray-900 p-2 rounded mt-4">
      <div className="flex items-center gap-2">
        <p className="text-lg text-white font-semibold">{`Subtotal: `}</p>
        <p className="text-sm text-white font-light">
          {formatCurrency({ amount: subTotal })}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg text-white font-semibold">{`Tip: `}</p>
        <p className="text-sm text-white font-light">{`${tip}%`}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-xl text-white font-extrabold">{`Total: `}</p>
        <p className="text-sm text-white font-light">
          {formatCurrency({ amount: total })}
        </p>
      </div>
    </div>
  );
};

export default FooterCart;
