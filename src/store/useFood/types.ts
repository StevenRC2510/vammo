import { Food } from "@/shared/types";

export type FoodState = {
  foods: Food[];
  allFoods: Food[];
};

export type FoodAction = {
  getAll: (foods: FoodState["foods"]) => void;
  searchFoods: (searchTerm: string) => void;
};

export type FoodStore = FoodState & FoodAction;
