"use client";
import React, { ChangeEvent, useMemo, useState } from "react";
import Lottie from "lottie-react";

import emptyCartLottie from "@/assets/lottie/emptyCart.json";
import useCartStore from "@/store/useCart";

import CartItem from "@/components/cart/components/item";
import HeaderCart from "@/components/cart/components/header";
import FooterCart from "@/components/cart/components/footer";
import TipInput from "@/components/cart/components/tipInput";

const Cart = () => {
  const { cart, deleteCartItem } = useCartStore((state) => state);
  const [tip, setTip] = useState(0);

  const cartProducts = useMemo(() => {
    if (!cart.items.length) {
      return (
        <Lottie height={200} animationData={emptyCartLottie} loop={true} />
      );
    }
    return cart.items.map((food) => (
      <CartItem
        key={food.id}
        food={food}
        onDelete={() => deleteCartItem(food)}
      />
    ));
  }, [cart.items, deleteCartItem]);

  return (
    <div className="w-full bg-gray-200 rounded-xl p-4">
      <HeaderCart />
      <TipInput tip={tip} setTip={setTip} />
      <div className="grid gap-4">{cartProducts}</div>
      <FooterCart tip={tip} />
    </div>
  );
};

export default Cart;
