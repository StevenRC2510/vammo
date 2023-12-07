import { Food } from "@/shared/types";

export type CartItemProps = {
  food: Food;
  onDelete: () => void;
};
