import React, { useState } from 'react';
import type { CalculationResult } from './calculator/CalculationResult';
import { add, substract, divide, multiply } from './calculator/calcFunctions';
import { Button } from './calculator/Button';
const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>();
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [numC, setNumC] = useState<number | string>(0);

  const doWork = (func: (a: number, b: number) => number) => {
    setNumC(func(numA, numB));
  };

  const calculateResult = (
    func: (a: number, b: number) => CalculationResult
  ) => {
    const calcResult = func(firstNumber, secondNumber);
    setResult(calcResult.error ? 0 : calcResult.result);
    setError(calcResult.error || '');
  };

  const parseInputValue = (value: string): number => {
    return value === '' ? 0 : parseFloat(value);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumber || ''}
          onChange={(e) =>
            setFirstNumber(parseInputValue(e.currentTarget.value))
          }
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumber || ''}
          onChange={(e) =>
            setSecondNumber(parseInputValue(e.currentTarget.value))
          }
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculateResult(add)}>+</Button>
        <Button onClick={() => calculateResult(substract)}>-</Button>
        <Button onClick={() => calculateResult(multiply)}>*</Button>
        <Button onClick={() => calculateResult(divide)}>/</Button>
      </div>
      <div>Result: {result}</div>
      <p>{error}</p>
    </div>
  );
};

export default App;
