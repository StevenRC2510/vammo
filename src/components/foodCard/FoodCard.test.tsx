import { screen, fireEvent, waitFor, render } from "@testing-library/react";

import FoodCard from ".";

import { Food } from "@/shared/types";
import { formatCurrency } from "@/utils/currency";
import { generateFoodMock } from "@/utils/testing/testing";

describe("Components:: FoodCard", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps: Food = generateFoodMock();

  it("Should render the component correctly", () => {
    render(<FoodCard {...defaultProps} />);

    const nameFood = screen.getByText(defaultProps.name);
    const priceFood = screen.getByText(
      formatCurrency({ amount: defaultProps.cost })
    );

    expect(nameFood).toBeDefined();
    expect(priceFood).toBeDefined();
  });
});
