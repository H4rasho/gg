import { TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
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

export function AddExpenseForm() {
  const [displayValue, setDisplayValue] = useState("0");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Text className="text-white">Agregar Gasto</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="px-7 sm:max-w-[325px]">
        <DialogHeader>
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
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">
              <Text>Cancel</Text>
            </Button>
          </DialogClose>
          <Button>
            <Text className="text-white">Save</Text>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
