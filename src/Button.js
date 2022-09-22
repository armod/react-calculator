import React, { useState } from 'react'

export const Button = () => {
  const [value, setValue] = useState()
  const [name, setName] = useState('')
  //const [operator, setOperator] = useState()

  const handleClick = () => {
    setValue(value)
    console.log(value)
  }
  return (
    <button className='btn' onClick={handleClick}>
      {name}
    </button>
  )
}
