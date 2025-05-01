import { type ResultType } from './ResultType';

export function add(addend1: number, addend2: number): ResultType {
  return { result: addend1 + addend2 };
}

export function subtract(minuend: number, subtrahend: number): ResultType {
  return { result: minuend - subtrahend };
}

export function multiply(factor1: number, factor2: number): ResultType {
  return { result: factor1 * factor2 };
}

export function divide(dividend: number, divisor: number): ResultType {
  return {
    result: dividend / divisor,
    error: divisor === 0 ? 'Cannot divide by zero' : undefined,
  };
}
