import React from 'react'
import { createContext } from 'react'
import { NameContext } from './Content'
import { ThemeContext } from './Content'
export default function Content2() {
    const names = React.useContext(NameContext);
    const theme = React.useContext(ThemeContext);
    

  return (
    <>
    <div className={`${theme=='dark'?"bg-black text-white":"bg-white text-black "}`}>
     ChildThere , i am getting  
    </div>
    </>
  )
}
