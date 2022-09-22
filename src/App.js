import React, { useState } from 'react'
import './App.css'
import { Button } from './Button'

function App() {
  const [value, setValue] = useState(0)
  const [liczba, setLiczba] = useState(0)

  const clickedNumber = (num) => {
    setValue(num)
    console.log('===', value, num)
  }

  return (
    <>
      <div className='container'>
        <div className='wynik'>
          {value}
          {liczba}
        </div>
        {/* I rząd */}
        <div className='btn' onClick={() => {}}>
          C
        </div>
        <div className='btn'>/</div>
        <div className='btn podwojny'>back</div>
        {/* II rząd */}
        <div
          className='btn'
          onClick={() => {
            clickedNumber(7)
          }}
        >
          7
        </div>

        <div
          className='btn'
          onClick={() => {
            clickedNumber(8)
          }}
        >
          8
        </div>
        <div
          className='btn'
          onClick={() => {
            clickedNumber(9)
          }}
        >
          9
        </div>
        <div className='btn'>x</div>
        {/* III rząd */}
        <div
          className='btn'
          onClick={() => {
            clickedNumber(4)
          }}
        >
          4
        </div>
        <div
          className='btn'
          onClick={() => {
            clickedNumber(5)
          }}
        >
          5
        </div>
        <div
          className='btn'
          onClick={() => {
            clickedNumber(6)
          }}
        >
          6
        </div>
        <div className='btn'>-</div>
        {/* IV rząd */}
        <div
          className='btn'
          onClick={() => {
            clickedNumber(1)
          }}
        >
          1
        </div>
        <div
          className='btn'
          onClick={() => {
            clickedNumber(2)
          }}
        >
          2
        </div>
        <div
          className='btn'
          onClick={() => {
            clickedNumber(3)
          }}
        >
          3
        </div>
        <div className='btn'>+</div>
        {/* V rząd */}
        <div className='btn'>+/-</div>
        <div
          className='btn'
          onClick={() => {
            clickedNumber(0)
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
