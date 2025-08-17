import React from 'react'
import { createContext } from 'react'
import Content1 from './Content1'
import {ThemeContext } from './Content.jsx'

export const NameContext = createContext();
const name=["sagar","Sumit "];

export default function Content() {     
    return (
    <>
      <NameContext.Provider value={name}>
        <ThemeContext.Provider value={{theme:"dark"}}>
        <Content1/>
        </ThemeContext.Provider>
      </NameContext.Provider>
    </>
  )
}
