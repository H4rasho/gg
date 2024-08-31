import { View } from "react-native";
import { Button } from "./ui/button";
import { Text } from "./ui/text";
import { useCalculator } from "~/hooks/useCalculator";
import { CALCULATOR_BUTTONS } from "~/constants/CalculatorButtons";

export function Calculator({
  displayValue,
  onButtonPress,
}: {
  displayValue: string;
  onButtonPress: any;
}) {
  return (
    <View className="">
      <View className="py-8">
        <Text className="text-right text-2xl">{displayValue}</Text>
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
