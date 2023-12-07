import { create } from "zustand";

import { FoodStore } from "./types";

const useFoodStore = create<FoodStore>((set) => ({
  foods: [],
  allFoods: [],
  getAll: (foods) => set(() => ({ foods, allFoods: foods })),
  searchFoods: (searchTerms) =>
    set(({ allFoods }) => ({
      foods: allFoods.filter(({ name }) =>
        name.toLowerCase().includes(searchTerms.toLowerCase())
      ),
    })),
}));

export default useFoodStore;
