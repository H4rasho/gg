import { CalculatorButton } from "~/types/calculatorTypes";

export const CALCULATOR_BUTTONS: CalculatorButton[] = [
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
    label: "del",
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
