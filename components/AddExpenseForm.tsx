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
import { SafeAreaView } from "react-native-safe-area-context";
import { Option } from "@rn-primitives/select";

export function AddExpenseForm({
  onSubmit,
}: {
  onSubmit: (expense: any) => void;
}) {
  const [displayValue, setDisplayValue] = useState("0");
  const [category, setCategory] = useState<Option>();
  return (
    <SafeAreaView>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full" size="lg">
            <Plus className="text-white"></Plus>
          </Button>
        </DialogTrigger>
        <DialogContent className="flex mx-2 my-6 px-7 sm:max-w-[325px]">
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
          <ExpenseCategorySelect value={category} onChange={setCategory} />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">
                <Text>Cancel</Text>
              </Button>
            </DialogClose>
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
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SafeAreaView>
  );
}
