import { useState } from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { BadgePlus } from "~/lib/icons/BadgePlus";
import { H1 } from "~/components/ui/typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { FlatList } from "react-native";
import { Expense } from "~/types";

export default function Screen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  function addExpenses(expense: Expense) {
    const newExspenses = [...expenses, expense];
    setExpenses(newExspenses);
  }

  const balance = 453324;
  const initialBudget = 450000;

  const formatCurrency = (value: number) => {
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  return (
    <View className="flex-1 p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <H1 className="text-6xl text-center">{formatCurrency(balance)}</H1>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <View>
            <Text className="font-bold">Presupuesto Inicial</Text>
            <Text className="">{formatCurrency(initialBudget)}</Text>
          </View>
          <View>
            <Text className="font-bold">Gastos Realizados</Text>
            <Text className="">{formatCurrency(43434)}</Text>
          </View>
        </CardFooter>
      </Card>
      <FlatList
        data={expenses}
        renderItem={({ item }) => (
          <View>
            <Text>{item.amount}</Text>
            <Text>{item.category}</Text>
          </View>
        )}
      ></FlatList>
      <View className="absolute bottom-0 right-0">
        <Button
          className="mt-auto"
          style={{ borderRadius: 20 }}
          variant="outline"
          size="lg"
          onPress={() =>
            addExpenses({
              id: new Date().getTime().toString(),
              amount: 1000,
              category: "food",
            })
          }
        >
          <Text>
            <BadgePlus color="black" size={15} />
            Añadir Gastos
          </Text>
        </Button>
      </View>
    </View>
  );
}
