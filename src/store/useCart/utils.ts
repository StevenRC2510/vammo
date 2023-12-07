import { toast } from "react-toastify";

import { Food } from "@/shared/types";
import { CartState } from "./types";
import { ToastMessages, ToastTypes } from "./enum";

export const validateAddCartItem = (
  cartItems: CartState["cart"]["items"],
  currentItem: Food
) => {
  const foundItemIndex = cartItems.findIndex(
    (item) => item.id === currentItem.id
  );

  if (foundItemIndex !== -1) {
    const updatedCartItems = [...cartItems];
    const foundItem = updatedCartItems[foundItemIndex];

    if (foundItem && foundItem.quantity !== undefined) {
      const hasMaxQuantity = foundItem.quantity === currentItem.amount;
      if (hasMaxQuantity) {
        toast(ToastMessages.ADDED_MAX_QTY, { type: ToastTypes.INFO });
      } else {
        toast(ToastMessages.ADDED_SUCCESSFUL, { type: ToastTypes.SUCCESS });
        foundItem.quantity += 1;
      }
    }
    return updatedCartItems;
  }

  toast(ToastMessages.ADDED_SUCCESSFUL, { type: ToastTypes.SUCCESS });
  return [...cartItems, { ...currentItem, quantity: 1 }];
};

export const validateSubtractCartItem = (
  cartItems: CartState["cart"]["items"],
  currentItem: Food
) => {
  const foundItemIndex = cartItems.findIndex(
    (item) => item.id === currentItem.id
  );

  if (foundItemIndex !== -1) {
    const updatedCartItems = [...cartItems];
    const foundItem = updatedCartItems[foundItemIndex];

    if (foundItem && foundItem.quantity !== undefined) {
      const hasMinQuantity = foundItem.quantity === 0;
      if (hasMinQuantity) {
        toast(ToastMessages.REMOVED_ERROR, { type: ToastTypes.ERROR });
      } else {
        toast(ToastMessages.REMOVED_SUCCESSFUL, { type: ToastTypes.SUCCESS });
        foundItem.quantity -= 1;
      }
    }
    return updatedCartItems.filter(({ quantity }) => !!quantity);
  }

  toast(ToastMessages.REMOVED_SUCCESSFUL, { type: ToastTypes.SUCCESS });
  return [...cartItems, { ...currentItem, quantity: 0 }];
};
