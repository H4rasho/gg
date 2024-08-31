export interface CalculatorButton {
  label: string;
  type: "number" | "action" | "operator";
  action?: (prev: number, next: number) => number;
}
