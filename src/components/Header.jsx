import React from 'react'

const navItems =["Home","About","Services","Context"]
export default function Header() {
  const Items= navItems.map((items,index)=>{
        return<span key={index} className='mx-2 text-white'>{items}</span>
      })
  return (
    <>
    <header className='bg-blue-500 flex items-center justify-center p-6 gap-10 '>
      {Items}
    </header>
    </>
  )
}
