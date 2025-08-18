import { FaBell } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData1 from "./animations/animationData1.json";
import MyButton from "./components/MyButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Child from "./components/Child";
import Child1 from "./components/Child1";
import ToDoLists from "./components/ToDoLists";
import Buttons from "./components/toDoList/Buttons";
import Input from "./components/toDoList/Input";
import { useState } from "react";
// import Tasks from "./components/toDoList/Tasks";
// import TaskItems from "./components/toDoList/TaskItems";



// for TO DO LIST
// export default function App() {
//    const [isDarkmode, setIsDarkmode] = useState(false);
//   const toggleDarkMode = ()=>{
//     setIsDarkmode(!isDarkmode);
//     document.body.classList.toggle("black", isDarkmode);

//   }
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className={`min-h-screen w-full max-w-[400px] flex flex-col justify-start items-center bg-gray-600 border-2 p-4 ${isDarkmode ? "bg-gray-900 text-black" : "bg-gray-600 text-black"}`} >
        
//         <Input />
//            <button
//           className={`p-2 rounded mt-4 transition-colors duration-300 ${
//             isDarkmode ? "bg-blue-300 text-black" : "bg-gray-500 text-white"
//           }`}
//           onClick={toggleDarkMode}
//         >
//           {isDarkmode ? "Blue" : "Gray"}
//         </button>


//       </div>
//     </div>
//   );
// }



// import React from 'react'
// const productData = [ 
//    {
//     id:1,
//     image:"https://imgs.search.brave.com/S0DEQqJV3HBjDw_Ier56XP5XiJbjFKmrs5S6Ik5VIOw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NzA3NzU3L3Bob3Rv/L25pa2UtcnVubmlu/Zy1zaG9lcy1vbi13/aGl0ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9eFlQWXl6/NWoxS3h1WTNCLVAy/Q0pKT2d6Z21OWTdf/dGVvWlI4QlZrNTNU/VT0",
//     name:"Nike shoes",
//     price:1000,
//     description:"This is a NIke shoes"
//    },
//    {
//     id:2,
//     image:"https://imgs.search.brave.com/ivgW-dWXgnlBkPPzMuxv_VDw-2wFHpdYAMq875YOpbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/My8xOC8xNS80MC9z/aG9lcy00OTQ0NTE3/XzY0MC5qcGc",
//     name:"Converse shoes",
//     price:2000,
//     description:"This is a Converse shoes"
//    },
//    {
//     id:13,
//     image:"https://imgs.search.brave.com/gKNY3jmY-5MfGHOHKxHFKmVCOxGPEgYSC2MU_YQoil0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYWxp/YmVyLWtkLXNob2Vz/LnMzLmFwLXNvdXRo/LTEuYW1hem9uYXdz/LmNvbS91cGxvYWRz/LzIwMjUvMDEvMTYx/MjQ3MTAvNTYzLUZl/bWFsZS1PbGl2ZS1H/cnkxLTYwMHg0NTAu/anBn",
//     name:"caliber shoes",
//     price:3000,
//     description:"This is a caliber shoes"
//    }
// ];


// export default function App() {
//   return (
//     <div>
      // <>
    // {/* <ToDoLists/> */}
    // {/* <Child/> */}
    // {/* <Child1/> */}
    // </>
    // <>
    //   <Header/>
    //   <main >
    //     <h2 className="text-2xl ">My product</h2>
    //     <HeroSection productData={productData}/>
    //   </main>
    //  {/* <HeroSection/> */}
    // <Footer/>
    // </>

    // <>
    // <div className="flex justify-center items-center">

    // <Lottie className="h-20 w-32  " animationData={animationData}></Lottie>

    // </div>
    // </>
    //     <>
    //     <nav>
    //   {navItems.map((item, index) => (
    //     <span  key={index}>{item}</span>
    //   ))}
    // </nav>
    //     {
    //       <h2 id="hello" className="">{loggedIn? "You are logged in" : "You are not logged in "}</h2>
    //     }
    //     <button onClick={handleClick} className="font-display animate-changeColor ">Click me  </button>
    //     <button className="subscribe flex flex-row justify-center item center">Subscribe <FaBell/></button>
    // </>
//     </div>
//   )
// }


// UseRef Example


// import React from 'react'
// import Useref from "./components/Useref";
// import Content from "./components/UseContext/Content";

// export default function App() {
//   return (
//     <div>
//       {/* <Useref/> */}
//      
//     </div>
//   )
// }



// UseContext and Tic-Tac-Toe
import React from 'react'
import Content from "./components/UseContext/Content";
import TicTacToe from "./components/Tic-Tac-Toe/TicTacToe";

export default function App() {
  return (
    <>
      {/* <Content/> */}
     <TicTacToe/>
    </>
  )
}

    
  



