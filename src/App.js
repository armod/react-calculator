import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [number1, setNumber1] = useState([])
  const [number2, setNumber2] = useState([])
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState()
  const [error, setError] = useState('')
  const [znak, setZnak] = useState(false)

  const notify = () => {
    toast('Wow so easy!')
  }

  const handleNumber = (num) => {
    if (operator === '') {
      number1.push(num)
      setNumber1([number1.join('')])
      console.log('num1= ', number1)
    } else {
      number2.push(num)
      setNumber2([number2.join('')])
      console.log('num= ', number2)
      //setOperator('')
    }
    console.log('operator=', operator)
  }

  const handleOperator = (znak) => {
    if (operator === '') {
      setOperator(znak)
    } else {
      oblicz()
      setOperator(znak)
    }
    console.log('znak=', znak)
  }

  const handleZnak = () => {
    setZnak(!znak)
    if (number1 !== []) {
      setNumber1([number1 * -1])
    }
    console.log(znak)
  }

  const handleBack = () => {
    if ((number1 !== []) & (number2[0] === '')) {
      let temp = number1.toString().split('')
      temp.pop()
      setNumber1([temp.join('')])
      console.log('pop=', temp)
    }
    if ((number1 !== []) & (number2 !== [])) {
      let temp2 = number2.toString().split('')
      temp2.pop()
      setNumber2([temp2.join('')])
      console.log('pop=', temp2)
    }
  }

  const handleDot = () => {
    let dot = number1.map((a) => a === '.')
    console.log('dot', dot)
    if (dot[0] === false) {
      number1.push('.')
      setNumber1([number1.join('')])
      console.log('wstawiono dota')
      dot[0] = true
    } else {
      console.log('dot już jest')
    }

    console.log(number1)
  }

  const oblicz = () => {
    if (operator === '+') {
      setResult(Number(number1) + Number(number2))
      setNumber1(Number(number1) + Number(number2))
      setNumber2([])
      setOperator('')
    }
    if (operator === '-') {
      setResult(Number(number1) - Number(number2))
      setNumber1(Number(number1) - Number(number2))
      setNumber2([])
      setOperator('')
    }
    if (operator === '/') {
      if (Number(number2) === 0) {
        setError('Pamiętaj cholero nie dziel przez zero!')
        // alert(error)
        clear()
      } else {
        setResult(Number(number1) / Number(number2))
        setNumber1(Number(number1) / Number(number2))
        setNumber2([])
        setOperator('')
      }
    }
    if (operator === 'x') {
      setResult(Number(number1) * Number(number2))
      setNumber1(Number(number1) * Number(number2))
      setNumber2([])
      setOperator('')
    }

    console.log('oblicz=', result, setResult)
  }

  const clear = () => {
    setNumber1([])
    setNumber2([])
    setResult()
    setOperator('')
  }

  return (
    <>
      <div className='error'>
        {error}
        {znak}
      </div>
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
        <div
          className='btn podwojny'
          onClick={() => {
            handleBack()
          }}
        >
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
        <div
          className='btn'
          onClick={() => {
            handleZnak()
          }}
        >
          +/-
        </div>
        <div
          className='btn'
          onClick={() => {
            handleNumber(0)
          }}
        >
          0
        </div>
        <div
          className='btn'
          onClick={() => {
            handleDot()
          }}
        >
          ,
        </div>
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
