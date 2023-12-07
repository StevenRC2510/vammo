import { create } from "zustand";
import { toast } from "react-toastify";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

import { CartStore } from "./types";
import { ToastMessages, ToastTypes } from "./enum";
import { validateAddCartItem, validateSubtractCartItem } from "./utils";

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      cart: {
        id: "",
        items: [],
      },
      addItemToCart: (food) =>
        set(({ cart }) => ({
          cart: {
            id: uuidv4(),
            items: validateAddCartItem(cart.items, food),
          },
        })),
      subtractItemToCart: (food) =>
        set(({ cart }) => ({
          cart: {
            ...cart,
            items: validateSubtractCartItem(cart.items, food),
          },
        })),
      deleteCartItem: (food) =>
        set(({ cart }) => {
          toast(ToastMessages.DELETED_SUCCESSFUL, { type: ToastTypes.SUCCESS });
          return {
            cart: {
              ...cart,
              items: cart.items.filter((item) => item.id !== food.id),
            },
          };
        }),
      subtotalPrice: () =>
        get().cart.items.reduce(
          (acc, { cost, quantity = 0 }) => acc + cost * quantity,
          0
        ),
      totalPrice: (tip, subTotal) =>
        get().cart.items.reduce(
          (acc, { cost, quantity = 0 }) => acc + cost * quantity,
          0
        ) +
        (tip / 100) * subTotal,
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
