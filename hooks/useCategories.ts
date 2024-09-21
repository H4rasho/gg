import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { Category } from "~/types";

export function useCategories() {
  const db = useSQLiteContext();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    db.getAllAsync<Category>("SELECT * FROM expense_categories")
      .then((categoriesResult) => {
        setCategories(categoriesResult);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return {
    categories,
  };
}
