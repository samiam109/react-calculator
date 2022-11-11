import React from 'react'

import NumpadButton from './NumpadButton'

/* interface for creating numpad buttons */
export default function Numpad(props) {
  const { operators, digits, events } = props;
  const {
    updateCalculator,
    handleCalculate,
    handleClearCalculator
  } = events

  return (
    <>
      <div className="numpad">
        {
          operators.map(content =>
            <NumpadButton
              key={content}
              content={content}
              styles='calculator-operator'
              fn={content === 'del' ? handleClearCalculator : updateCalculator}
            />
          )
        }
      </div>
      <div className="numpad">
        {
          digits.map(content =>
            <NumpadButton
              key={content}
              content={content}
              styles='calculator-digit'
              fn={content === '=' ? handleCalculate : updateCalculator}
            />
          )
        }
      </div>
    </>
  )
}