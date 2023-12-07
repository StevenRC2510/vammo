import { Cart, Food } from "@/shared/types";

export type CartState = {
  cart: Cart;
};

export type CartAction = {
  addItemToCart: (food: Food) => void;
  subtractItemToCart: (food: Food) => void;
  totalPrice: (tip: number, subTotal: number) => number;
  subtotalPrice: () => number;
  deleteCartItem: (food: Food) => void;
};

export type CartStore = CartState & CartAction;
