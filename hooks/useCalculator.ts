import { useState } from "react";
import { CalculatorButton } from "~/types/calculatorTypes";
import { CALCULATOR_BUTTONS } from "~/constants/CalculatorButtons";

export function useCalculator(
  displayValue: string = "0",
  setDisplayValue: any
) {
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
            CALCULATOR_BUTTONS.find((btn) => btn.label === activeOperator)
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

  return {
    onButtonPress,
  };
}
