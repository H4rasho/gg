import * as React from "react";
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

export default function Screen() {
  let expense = 0;

  function addExpenses() {
    expense += 1;
    console.log(expense);
  }

  const balance = 453324;
  const initialBudget = 450000;
  const expenses = 3324;

  const formatCurrency = (value: number) => {
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  return (
    <View className="p-6 bg-secondary/30">
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
            <Text className="">{formatCurrency(expenses)}</Text>
          </View>
        </CardFooter>
      </Card>
      <View style={{ top: 250, width: 200 }}>
        <Button
          className="mt-auto"
          style={{ borderRadius: 20 }}
          variant="outline"
          size="lg"
          onPress={addExpenses}
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
