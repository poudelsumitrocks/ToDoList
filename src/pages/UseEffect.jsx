// import React, { useEffect } from 'react'
// import { useState } from 'react'

// export default function UseEffect() {
//     const [text,setText]=useState("");
//     useEffect(()=>{
//         document.title=text;
//     },[text])
//   return (
//     <div className='flex flex-col gap-4  m-4'>
//       <input type="text"   className="border h-20 w-96 "  onChange={(e)=>{setText(e.target.value)}} />
//       <h1>{text}</h1>
      
//     </div>
//   )
// }



//When the component renders for the first time, log "Component mounted!" to the console.

// import React,{use, useEffect,useState} from 'react'
// export default function UseEffect() {
//     const [item,setItem]=useState("");
//     const handleChange=()=>{
//         setItem(console.log("Hello"))
//     }
//     useEffect(()=>{
//         console.log("Component mounted!")
//     },[])
//     return (
//         <>

//        <button className='h-10 w-24 bg-blue-400' onClick={handleChange}>Submit</button>
//         </>
//     )
// }


//Show a counter that increases every second.

// import React,{useEffect,useState}from 'react'

// export default function UseEffect() {
// const [count,setCount]=useState(0);
// useEffect(()=>{
//     const interval=setInterval(()=>{
//         setCount(prev => prev +1)
//        console.log("Hello")
//     },1000);
//     return()=>clearInterval(interval);
// },[])
//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }



//Display the current window width and height.


// import React, { useEffect,useState } from 'react'

// export default function UseEffect() {

//  const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });

//   useEffect(() => {
//     const handleSize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     };
//     window.addEventListener("resize", handleSize);
//     handleSize();
//     return () => window.removeEventListener("resize", handleSize);
//   }, []);

//   return (
//     <div>
//       <h1>
//         {windowSize.width} x {windowSize.height}
//       </h1>
//     </div>
//   );
// }

/*Create a counter with two buttons: Increment and Decrement.
    Log "Counter changed" only when the counter changes.
    Log "Component mounted" only once on mount.
       👉 Try with different dependency arrays.

 */


// import React, { useEffect, useState } from 'react'

// export default function UseEffect() {
//     const [count,setCount]=useState(0);
//     const handleIncrement=()=>{
//         setCount(count+1)
//     }
//     const handleDecrement=()=>{
//         setCount(count-1)
//     }
//    useEffect(()=>{
//     console.log("Component mounted");
//    },[])
//     useEffect(()=>{ 
//         console.log("Counter changed");
//     },[count])
//   return (
//     <div className='flex  gap-4 m-4'>
//       <button className='h-10 w-32 border bg-blue-500 text-white' onClick={handleIncrement}>Increment</button>
//       <button className='h-10 w-32 border bg-blue-500 text-white' onClick={handleDecrement}>Decrement</button>
//     </div>
//   )
// }
