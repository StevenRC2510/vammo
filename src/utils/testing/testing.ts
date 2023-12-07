import { faker } from "@faker-js/faker";

import { Food } from "@/shared/types";
import { FoodStore } from "@/store/useFood/types";

export const generateFoodMock = (params: Partial<Food> = {}): Food => {
  return {
    id: faker.number.int({ min: 0, max: 10 }),
    name: faker.word.sample(),
    amount: faker.number.int(),
    cost: faker.number.int(),
    quantity: faker.number.int({ min: 0, max: 1 }),
    ...params,
  };
};

export const generateFoodStoreMock = (
  params: Partial<FoodStore> = {}
): FoodStore => {
  const foods = [generateFoodMock()];
  return {
    allFoods: foods,
    foods: foods,
    getAll: jest.fn(),
    searchFoods: jest.fn(),
    ...params,
  };
};
