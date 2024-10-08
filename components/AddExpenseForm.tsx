import { Pressable } from "react-native";
import { Button } from "~/components/ui/button";
import { Plus } from "~/lib/icons/Plus";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Text } from "~/components/ui/text";
import { Calculator } from "./Calculator";
import { useState } from "react";
import { ExpenseCategorySelect } from "./ExpenseCategorySelect";
import { Option } from "@rn-primitives/select";
import { Category } from "~/types";

export function AddExpenseForm({
  onSubmit,
  categories,
}: {
  onSubmit: (expense: any) => void;
  categories: Category[];
}) {
  const [category, setCategory] = useState<Option>();
  const categoryOptions = categories.map((category) => ({
    label: category.name,
    value: category.id.toString(),
  }));
  const [displayValue, setDisplayValue] = useState<string>("0");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pressable className="bg-black  justify-center items-center w-20 h-20 rounded-full dark:bg-[#fff] ">
          <Plus size={40} className="text-white dark:text-black" />
        </Pressable>
      </DialogTrigger>
      <DialogContent className="flex mx-2 my-14 px-7 sm:max-w-[325px]">
        <DialogHeader className="flex-1">
          <DialogTitle>Agregar gasto</DialogTitle>
          <DialogDescription>
            Puedes calcular el monto de tu gasto con la calculadora y luego
            agregarlo
          </DialogDescription>
        </DialogHeader>
        <Calculator
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
        />
        <ExpenseCategorySelect
          value={category}
          onChange={setCategory}
          categoryOptions={categoryOptions}
        />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">
              <Text>Cancel</Text>
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              onPress={() => {
                onSubmit({
                  amount: displayValue,
                  category: category?.value,
                });
              }}
            >
              <Text>Save</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
