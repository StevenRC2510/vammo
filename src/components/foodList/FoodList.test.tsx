import { render } from "@testing-library/react";

import FoodList from ".";

import { generateFoodStoreMock } from "@/utils/testing/testing";
import useFoodStore from "@/store/useFood";
import { formatCurrency } from "@/utils/currency";

jest.mock("../../store/useFood");

describe("Components:: FoodList", () => {
  it("Should render the component correctly", () => {
    const mockStore = generateFoodStoreMock();
    (useFoodStore as unknown as jest.Mock).mockReturnValue(mockStore);
    render(<FoodList />);

    mockStore.foods.forEach((food) => {
      expect(food.name).toBeDefined();
      expect(food.cost).toBeDefined();
      expect(formatCurrency({ amount: food.amount })).toBeDefined();
    });
  });
});
