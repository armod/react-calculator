import React, { useState } from 'react'
import './App.css'
import { Button } from './Button'

function App() {
  const [number1, setNumber1] = useState([])
  const [number2, setNumber2] = useState([])
  const [result, setResult] = useState(0)

  const handleNumber = (num) => {
    // setNumber1([num])
    setNumber1([...number1, num])
    console.log(num, number1)
  }

  const handleOperator = () => {
    // setResult(e.target.value)
    console.log(/* e.target.name */)
  }

  return (
    <>
      <div className='container'>
        {/* tablica wyników */}
        <div className='wynik'>
          {/* {result} */}
          {number1}
        </div>
        {/* ------------------------- */}
        {/* I rząd */}
        <div className='btn' onClick={() => {}}>
          C
        </div>
        <div className='btn'>/</div>
        <div className='btn podwojny' name='xxx' onClick={handleOperator}>
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
        <div className='btn' value='+' onClick={handleOperator}>
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
        <div className='btn rowna'>=</div>
      </div>
    </>
  )
}

export default App
