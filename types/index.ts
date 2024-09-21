export interface Expense {
  id: string;
  amount: number;
  category_id: number;
  description?: string;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  description?: string;
}
