import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { Expense } from "~/types";

export function useExpenses() {
  const db = useSQLiteContext();
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    db.getAllAsync("SELECT * FROM expenses")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const addExpense = async (expense: Expense) => {
    try {
      const { category_id, amount } = expense;
      const result = await db.runAsync(
        "INSERT INTO expenses (category_id, amount, description) VALUES (?, ?, ?)",
        [category_id, amount]
      );
      console.log(result);
      if (result.changes > 0) {
        setExpenses([...expenses, expense]);
      }
    } catch (err) {
      console.error(err);
      throw new Error("Error al agregar gasto");
    }
  };

  return {
    expenses,
    setExpenses,
    addExpense,
  };
}
