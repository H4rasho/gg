export interface Expense {
  id: string;
  amount: number;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
}
