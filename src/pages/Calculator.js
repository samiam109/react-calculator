import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

import Numpad from '../components/calculator/Numpad'

/* create calculator that performs basic mathematical operations */
export default function Calculator() {

  const [calculator, setCalculator] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', '*', '+', '-', 'del'];

  const generateNumpadValues = () => {
    let minNumber = 1;
    const numbers = Array(9)
      .fill()
      .map(() => String(minNumber++));
    numbers.push('0', '.', '=')
    console.log(numbers, "numbers");
    return numbers;
  }
  const isOperator = (value) => operators.includes(value);
  const calculateStatement = (statement) => {
    return new Function(`return ${statement}`)
  }

  const updateCalculator = value => {
    if (
      (isOperator(value) && operators.includes(calculator.slice(-1))) ||
      (isOperator(value) && calculator === '')
    ) {
      return;
    }
    setCalculator(calculator + value)
    if (!isOperator(value)) {
      setResult(calculateStatement(calculator + value))
    }
  }

  const handleCalculate = () => {
    setCalculator(calculateStatement(calculator))
    setResult('')
  }

  const handleClearCalculator = () => {
    setCalculator('')
    setResult('')
  }

  return (
    <Card className="calculator">
      <Card.Title className="p-3 d-flex justify-content-end calculator-display">
        {result ? <span>({result})</span> : ''}
        &nbsp;
        {calculator || '0'}
      </Card.Title>
      <Card.Body className="p-0">
        <Numpad
          operators={operators}
          digits={generateNumpadValues()}
          events={{
            updateCalculator,
            handleCalculate,
            handleClearCalculator
          }}
        />
      </Card.Body>
    </Card>
  )
}
