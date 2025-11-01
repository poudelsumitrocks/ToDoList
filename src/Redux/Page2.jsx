import React from 'react'
import { decrement } from './Slices/CounterSlice'
import { useDispatch } from 'react-redux'
export default function Page2() {
  const dispatch=useDispatch();
  return (
    <div>
       <button onClick={()=>dispatch(decrement())} className='border bg-blue-500 mb-2'>decrement</button>
    </div>
  )
}
