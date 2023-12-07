export type Food = {
  id: number;
  name: string;
  cost: number;
  amount: number;
  quantity?: number;
};

export type Cart = {
  id: string;
  items: Food[];
};
