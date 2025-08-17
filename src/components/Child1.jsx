import React from 'react'
import { useState } from 'react'

export default function Child1() {

    const [name,setName]=useState("");
    function toUpperCase(){
        setName(name.toUpperCase());
    }
    const toChangeColor=()=>{
        document.querySelector('.text').style.color='red'
    }
    const toChangeColor2=()=>{
        document.querySelector('.text').style.color='white'
    }
    function toSentence(){
        if(!name) return;
        setName(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
    }
    function reSet(){
        setName("");
       document.querySelector('.text').style.color='black';
    }  
    return (
    <>
      <label htmlFor="Text">Enter Something:</label>
      <input type="text" className='h-10 w-32 border p-2 m-6'placeholder='Enter something' value={name} onChange={(e)=>{
        setName(e.target.value);
      }}/>
      <br />
      <div className='bg-gray-600 text-black h-48 m-4 rounded'>
        <h2 className=' text text-2xl'>{name}</h2>
      </div>
       <div className='flex flex-row items-center justify-center mt-4 gap-10'>
      <button className='bg-blue-400 p-2 rounded ' onClick={toUpperCase} >To Uppercase</button>
      <button className='bg-yellow-400 p-2 rounded ' onDoubleClick={toChangeColor2}>Change Colour-2</button>
      <button className='bg-yellow-400 p-2 rounded text-black ' onClick={toChangeColor}>To ChangeColor</button>
      <button className='bg-red-400 p-2 rounded text-black ' onClick={toSentence}>To Sentence</button>
      <button className='bg-green-400 p-2 rounded text-white' onClick={reSet}>RESET</button>

      </div>
    </>
  )
}
