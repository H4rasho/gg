import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { H1 } from "~/components/ui/typography";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { FlatList } from "react-native";
import { Category, Expense } from "~/types";
import { AddExpenseForm } from "~/components/AddExpenseForm";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { useSQLiteContext } from "expo-sqlite";

export default function Screen() {
  const db = useSQLiteContext();
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    db.getAllAsync("SELECT * FROM expenses")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    db.getAllAsync<Category>("SELECT * FROM expense_categories")
      .then((categoriesResult) => {
        setCategories(categoriesResult);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  const balance = 453324;
  const initialBudget = 450000;

  const formatCurrency = (value: number) => {
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  };

  const onExpenseAdd = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <SafeAreaView>
      <View className="p-6 min-h-full">
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
              <Text>{item.category.name}</Text>
            </View>
          )}
        ></FlatList>

        {/* <Accordion
        type='multiple'
        collapsible
        defaultValue={['item-1']}
        className='w-full max-w-sm native:max-w-md'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <Text>Is it accessible?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            <Text>What are universal components?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              In the world of React Native, universal components are components that work on both
              web and native platforms.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}

        <View className="absolute bottom-8 right-1 z-20">
          <AddExpenseForm onSubmit={onExpenseAdd} categories={categories} />
        </View>
      </View>
    </SafeAreaView>
  );
}
