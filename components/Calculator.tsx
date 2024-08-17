import { View, Text, StyleSheet } from "react-native";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "lib/utils";

export interface CalculatorButton {
  label: string;
  type: "number" | "action" | "operator";
  action?: (prev: number, next: number) => number;
}
const calculatorButtons: CalculatorButton[] = [
  {
    label: "7",
    type: "number",
  },
  {
    label: "8",
    type: "number",
  },
  {
    label: "9",
    type: "number",
  },
  {
    label: "DEL",
    type: "action",
  },
  {
    label: "4",
    type: "number",
  },
  {
    label: "5",
    type: "number",
  },
  {
    label: "6",
    type: "number",
  },
  {
    label: "x",
    type: "operator",
    action: (prev, next) => (prev === null ? next : prev * next),
  },
  {
    label: "1",
    type: "number",
  },
  {
    label: "2",
    type: "number",
  },
  {
    label: "3",
    type: "number",
  },
  {
    label: "-",
    type: "operator",
    action: (prev, next) => (prev === null ? next : prev - next),
  },
  {
    label: ".",
    type: "number",
  },
  {
    label: "0",
    type: "number",
  },
  {
    label: "=",
    type: "action",
  },
  {
    label: "+",
    type: "operator",
    action: (prev, next) => prev + next,
  },
];

export function Calculator({
  displayValue,
  setDisplayValue,
}: {
  displayValue: string;
  setDisplayValue: (value: string) => void;
}) {
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [activeOperator, setActiveOperator] = useState<string | null>(null);
  const [lastPressedButton, setLastPressedButton] =
    useState<CalculatorButton | null>(null);

  const onButtonPress = (button: any) => {
    setLastPressedButton(button);
    const currentDisplayValue = displayValue;
    if (button.type === "number") {
      if (currentDisplayValue === "0") {
        return setDisplayValue(button.label);
      }
      if (lastPressedButton?.type === "operator") {
        setDisplayValue(button.label);
        return setPreviousValue(Number(currentDisplayValue));
      }
      return setDisplayValue(currentDisplayValue + button.label);
    }
    if (button.type === "action") {
      if (button.label === "=") {
        if (activeOperator && previousValue) {
          const result =
            calculatorButtons.find((btn) => btn.label === activeOperator)
              ?.action!(previousValue, Number(currentDisplayValue)) || 0;
          setDisplayValue(result.toString());
          setActiveOperator(null);
          setPreviousValue(null);
        }
        return;
      }
      if (button.label === "DEL") {
        const newValue =
          currentDisplayValue.length === 1
            ? "0"
            : currentDisplayValue.slice(0, -1);
        setDisplayValue(newValue);
        return;
      }
    }
    if (button.type === "operator") {
      if (activeOperator && activeOperator !== button.label) {
        return setActiveOperator(button.label);
      }
      const result = button.action!(previousValue, Number(currentDisplayValue));
      setDisplayValue(result.toString());
      setActiveOperator(button.label);
    }
  };

  return (
    <View className="bg-white">
      <View className="py-8">
        <Text className="text-right text-2xl">{displayValue}</Text>
      </View>
      <View className="flex flex-row flex-wrap w-full">
        {calculatorButtons.map((button) => (
          <Button
            key={button.label}
            className="w-1/4"
            variant="outline"
            onPress={() => onButtonPress(button)}
          >
            <Text>{button.label}</Text>
          </Button>
        ))}
      </View>
    </View>
  );
}
