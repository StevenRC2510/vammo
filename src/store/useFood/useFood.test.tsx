import { act, renderHook, waitFor } from "@testing-library/react";

import { generateFoodMock } from "@/utils/testing/testing";

import useFoodStore from ".";

describe("Store:: useFoodStore", () => {
  const foodMock = [generateFoodMock()];
  it("Should return the correct initial values", async () => {
    const { result } = renderHook(() => useFoodStore());

    act(() => result.current.getAll(foodMock));

    await waitFor(() => {
      expect(result.current.foods).toEqual(foodMock);
    });
    expect(result.current.allFoods).toEqual(foodMock);
  });

  it("Should call searchFoods function return the correct data", () => {
    const { result } = renderHook(() => useFoodStore());
    act(() => result.current.searchFoods("432"));
    expect(result.current.foods).toEqual([]);
  });
});
