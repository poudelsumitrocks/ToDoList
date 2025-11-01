import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './Slices/CounterSlice'
import { useNavigate } from 'react-router'

const value = ["increment", "decrement", "incrementbyamount"]

export default function Page1() {
  const navigate = useNavigate()
  const count = useSelector((state) => state.count.value)
  const dispatch = useDispatch()

  return (
   <>
   
 <div className='flex items-center justify-center flex-col'>
      <h1 className='mb-4'>Count: {count}</h1>
      <button onClick={() => dispatch(increment())} className='border bg-blue-500 mb-4'>
        Increment
      </button>
      <button onClick={() => navigate("/page2")} className='border bg-blue-500 mb-4'>
        Go to Page2
      </button>
      <button onClick={() => navigate("/page3")} className='border bg-blue-500 mb-4'>
        Go to Page3
      </button>
    </div>
   </>
      
  )
}
