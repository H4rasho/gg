import { View } from "react-native";
import { Button } from "./ui/button";
import { Text } from "./ui/text";
import { CALCULATOR_BUTTONS } from "~/constants/CalculatorButtons";
import { useCalculator } from "~/hooks/useCalculator";

interface CalculatorProps {
  displayValue: string;
  setDisplayValue: any;
}

export function Calculator({ displayValue, setDisplayValue }: CalculatorProps) {
  const { onButtonPress } = useCalculator(displayValue, setDisplayValue);
  return (
    <View className="">
      <View className="py-8">
        <Text className="text-right text-2xl">
          {Number(displayValue).toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </Text>
      </View>
      <View className="flex flex-row flex-wrap w-full">
        {CALCULATOR_BUTTONS.map((button) => (
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
