import React from 'react'

export default function MyButton() {
  const handleClick=()=>{
    alert("YOu click the button")
  }
  return (
    <>
      <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover hover:cursor-pointer' onClick={handleClick}>
        Click Me
      </button>
     
    </>
  )
}
