export interface Expense {
  id: string;
  amount: number;
  category: Category;
}

export type Category = "food" | "transport" | "entertainment" | "other";
