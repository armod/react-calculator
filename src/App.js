import React, { useState } from 'react'
import { Button } from './Button'

function App() {
  const [number1, setNumber1] = useState([])
  const [number2, setNumber2] = useState([])
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState()

  const handleNumber = (num) => {
    if (operator === '') {
      number1.push(num)
      setNumber1([...number1])
      console.log(num, number1)
    } else {
      number2.push(num)
      setNumber2([...number2])
      //setOperator('')
      console.log(num, number2)
    }
  }

  const handleOperator = (znak) => {
    setOperator(znak)
    console.log('znak=', znak)
  }

  const oblicz = () => {
    setResult(Number(number1) + Number(number2))
    console.log('oblicz=', result)
  }

  const clear = () => {
    setNumber1([])
    setNumber2([])
    setResult()
    setOperator('')
  }

  return (
    <>
      <div className='container'>
        {/* tablica wyników */}
        <div className='wynik'>
          <div className='gora'>
            {number1}
            {operator}
            {number2}
          </div>
          <div className='dol'>{result}</div>
        </div>
        {/* ------------------------- */}
        {/* I rząd */}
        <div
          className='btn'
          onClick={() => {
            clear()
          }}
        >
          C
        </div>
        <div className='btn'>/</div>
        <div className='btn podwojny' name='xxx' onClick={''}>
          back
        </div>
        {/* II rząd */}
        <div
          className='btn'
          value={77}
          onClick={() => {
            handleNumber(7)
          }}
        >
          7
        </div>

        <div
          className='btn'
          onClick={() => {
            handleNumber(8)
          }}
        >
          8
        </div>
        <div
          className='btn'
          onClick={() => {
            handleNumber(9)
          }}
        >
          9
        </div>
        <div className='btn'>x</div>
        {/* III rząd */}
        <div
          className='btn'
          onClick={() => {
            handleNumber(4)
          }}
        >
          4
        </div>
        <div
          className='btn'
          onClick={() => {
            handleNumber(5)
          }}
        >
          5
        </div>
        <div
          className='btn'
          onClick={() => {
            handleNumber(6)
          }}
        >
          6
        </div>
        <div className='btn'>-</div>
        {/* IV rząd */}
        <div
          className='btn'
          onClick={() => {
            handleNumber(1)
          }}
        >
          1
        </div>
        <div
          className='btn'
          onClick={() => {
            handleNumber(2)
          }}
        >
          2
        </div>
        <div
          className='btn'
          onClick={() => {
            handleNumber(3)
          }}
        >
          3
        </div>
        <div
          className='btn'
          value='+'
          onClick={() => {
            handleOperator('+')
          }}
        >
          +
        </div>
        {/* V rząd */}
        <div className='btn'>+/-</div>
        <div
          className='btn'
          onClick={() => {
            handleNumber(0)
          }}
        >
          0
        </div>
        <div className='btn'>,</div>
        <div
          className='btn rowna'
          onClick={() => {
            oblicz()
          }}
        >
          =
        </div>
      </div>
    </>
  )
}

export default App
