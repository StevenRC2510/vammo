import { act, renderHook } from "@testing-library/react";

import { generateFoodMock } from "@/utils/testing/testing";

import useCartStore from ".";

describe("Store:: useCartStore", () => {
  it("Should return the correct initial values", () => {
    const { result } = renderHook(() => useCartStore());
    expect(result.current.cart.items).toEqual([]);
    expect(result.current.totalPrice(0, 0)).toEqual(0);
    expect(result.current.subtotalPrice()).toEqual(0);
  });

  it("Should calculate the subtotal and total value", () => {
    const foodMock = generateFoodMock();

    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addItemToCart(foodMock);
    });

    const tip = 10;
    const subtotal = result.current.subtotalPrice();
    const total = result.current.totalPrice(tip, subtotal);

    expect(subtotal).toEqual(foodMock.cost);
    expect(total).toEqual(foodMock.cost + (tip / 100) * subtotal);
  });
});
