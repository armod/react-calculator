import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [number1, setNumber1] = useState([])
  const [number2, setNumber2] = useState([])
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState()
  const [error, setError] = useState('')

  const notify = () => {
    toast('Wow so easy!')
  }

  const handleNumber = (num) => {
    if (operator === '') {
      number1.push(num)
      setNumber1([number1.join('')])
      console.log(num, number1, number1.join(''))
    } else {
      number2.push(num)
      setNumber2([number2.join('')])
      //setOperator('')
      console.log(num, number2)
    }
  }

  const handleOperator = (znak) => {
    setOperator(znak)
    console.log('znak=', znak)
  }
  let tab = []
  const oblicz = () => {
    if (operator === '+') {
      setResult(Number(number1) + Number(number2))
    }
    if (operator === '-') {
      setResult(Number(number1) - Number(number2))
    }
    if (operator === '/') {
      if (Number(number2) === 0) {
        setError('Pamiętaj cholero nie dziel przez zero!')
        // alert(error)
        clear()
      } else {
        setResult(Number(number1) / Number(number2))
      }
    }
    if (operator === 'x') {
      setResult(Number(number1) * Number(number2))
    }
    tab = number1.concat(number2)
    // setOperator('')
    console.log('oblicz=', result, setResult, 'tab', tab)
  }

  const clear = () => {
    setNumber1([])
    setNumber2([])
    setResult()
    setOperator('')
  }

  return (
    <>
      {error}
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
        <div
          className='btn'
          onClick={() => {
            handleOperator('/')
          }}
        >
          /
        </div>
        <div className='btn podwojny' onClick={notify}>
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
        <div
          className='btn'
          onClick={() => {
            handleOperator('x')
          }}
        >
          x
        </div>
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
        <div
          className='btn'
          onClick={() => {
            handleOperator('-')
          }}
        >
          -
        </div>
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
