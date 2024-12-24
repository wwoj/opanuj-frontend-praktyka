import { type CalculationResult } from './CalculationResult';

// Add function
export function add(number1: number, number2: number): CalculationResult {
  let addResult = number1 + number2;
  return { result: addResult };
}

export function substract(number1: number, number2: number): CalculationResult {
  let subResult = (number1 = number2);
  return { result: subResult };
}

export function multiply(number1: number, number2: number): CalculationResult {
  let multiplyResult = number1 * number2;
  return { result: multiplyResult };
}

export function divide(dividend: number, divisor: number): CalculationResult {
  return {
    result: dividend / divisor,
    error: divisor === 0 ? 'Cannot divide by zero' : undefined,
  };
}
