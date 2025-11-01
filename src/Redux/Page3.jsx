import React from 'react'
import { incrementByAmount } from './Slices/CounterSlice'
import { useDispatch } from 'react-redux'
export default function Page3() {
  const dispatch=useDispatch();
  return (
    <div>
   <button onClick={()=>dispatch(incrementByAmount(10))} className='border bg-blue-500 mb-2'>incrementByAmount</button>
    </div>
  )
}
