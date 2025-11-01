// import { FaBell } from "react-icons/fa";
// import Lottie from "lottie-react";
// import animationData1 from "./animations/animationData1.json";
// import MyButton from "./components/MyButton";
// // import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
// import Child from "./components/Child";
// import Child1 from "./components/Child1";
// import ToDoLists from "./components/ToDoLists";
// import Buttons from "./components/toDoList/Buttons";
// import Input from "./components/toDoList/Input";
// import { useState } from "react";
// import Dashborad from "./pages/Dashborad";
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
// import React from 'react'
// import Content from "./components/UseContext/Content";
// import TicTacToe from "./components/Tic-Tac-Toe/TicTacToe";

// export default function App() {
//   return (
//     <>
//       {/* <Content/> */}
//      <TicTacToe/>
//     </>
//   )
// }

// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router";
// import About from "./components/Router/About";
// import Home from "./components/Router/Home";
// import Contact from "./components/Router/Contact";
// import Product from "./components/Router/Product";
// import ProductDetails from "./components/Router/ProductDetails";
// import Header from "./components/Router/Header";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="/product" element={<Product/>} />
//         <Route path="/product" element={<Product/>} />
//         <Route path="/product/:id" element={<ProductDetails/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// Practice of routes
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Practice/Home";
import About from "./components/Practice/About";
import Contact from "./components/Practice/Contact";
import Product from "./components/Practice/Product";
import ProductDetails from "./pages/ProductDetails";
import Headers from "./components/Practice/Headers";
import Search from "./pages/Search";
import Footers from "./components/Practice/Footers";
import SearchResults from "./pages/SearchResults";

import Dashborad from "./pages/Dashborad";
import Foodmenu from './Charts/Foodmenu';
import Managemenu from './Charts/Managemenu';
import Customermenu from './Charts/Customermenu';
import Barchart from './Charts/BarChart';

export default function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/" element={<Search />} />
        <Route path="/search" element={<SearchResults />} />

        <Route path="/dashboard" element={<Dashborad />}>
          <Route index element={<Barchart />} />
          <Route path="foodmenu" element={<Foodmenu />} />
          <Route path="managemenu" element={<Managemenu />} />
          <Route path="customermenu" element={<Customermenu />} />
        </Route>
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}

// // Charts import
// import React from 'react';
// import BarChart from './Charts/BarChart';

// export default function App() {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       <BarChart />
//     </div>
//   );
// }

// DashBoard

// import React from 'react'
// import { BrowserRouter, Route, Routes } from "react-router";
// import Dashborad from "./pages/Dashborad";
// import Foodmenu from './Charts/Foodmenu';
// import Managemenu from './Charts/Managemenu';
// import Customermenu from './Charts/Customermenu';
// import Barchart from './Charts/BarChart';

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Dashborad />}>
//             <Route index element={<Barchart />} />
//             <Route path="foodmenu" element={<Foodmenu />} />
//             <Route path="managemenu" element={<Managemenu />} />
//             <Route path="customermenu" element={<Customermenu />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// Form

// import React from "react";
// import Form from "./pages/Form";
// import { BrowserRouter, Route, Routes } from "react-router";
// import Dashborad from "./pages/Dashborad";
// import Home from "./components/Practice/Home";
// import Foodmenu from './Charts/Foodmenu';
// import Managemenu from './Charts/Managemenu';
// import Customermenu from './Charts/Customermenu';
// import FormData from './pages/FormData';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/form" element={<Form />} />
//         <Route path="/dashboard" element={<Dashborad />}>
//           <Route index element={<FormData />} />
//           <Route path="foodmenu" element={<Foodmenu />} />
//           <Route path="managemenu" element={<Managemenu />} />
//           <Route path="customermenu" element={<Customermenu />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// Local storage

// import React from 'react'
// import LocalStorage from './pages/LocalStorage'

// export default function App() {
//   return (
//     <div>
//       <LocalStorage/>
//     </div>
//   )
// }

// Toastfy

// import React from 'react'
// import Toast from './pages/Toast'
// import { ToastContainer } from 'react-toastify'
// import { BrowserRouter, Routes, Route } from 'react-router'

// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <ToastContainer
//           position="bottom-right"
//           autoClose={4000}
//           hideProgressBar={false}
//           newestOnTop={true}
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//         <Routes>
//           <Route path="/toast" element={<Toast />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// SIgn up page 


// import React from "react";
// import Sign from "./SignUpPage/Sign";
// import Login from "./SignUpPage/Login";
// import Forgotpass from "./SignUpPage/Forgotpass";
// import Dashb from "./SignUpPage/Dashb";
// import { ToastContainer } from "react-toastify";
// import { BrowserRouter, Routes, Route } from "react-router";
// import Dashboard1 from "./SignUpPage/Dashboard1";
// export default function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <ToastContainer
//           position="top-right"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={true}
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/sign" element={<Sign />} />
//           <Route path="/forgotpass" element={<Forgotpass />} />
//           <Route path="/dashboard1" element={<Dashboard1 />}>
//             <Route index element={<Dashb />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }



// Cookies practice

// import React from 'react'
// import CookiePage from './pages/CookiePage'
// export default function App() {
//   return (
//     <div>
//       <CookiePage/>
//     </div>
//   )
// }



// Asynchronous

// import React from 'react'
// import UseEffect from './pages/useEffect'
// import WApi from './pages/WApi'
// import WaitAsync from './pages/WaitAsync'
// import Asynchronous from './pages/Asynchronous'
// import CallBack from './pages/CallBack'
// import MyPromise from './pages/MyPromise'
// export default function App() {
  // return (
    // <div>
      {/* <Asynchronous/> */}
      {/* <CallBack/> */}
      {/* <MyPromise/> */}
      {/* <WaitAsync/> */}
      {/* <UseEffect/> */}
      //  <WApi/> 
    // </div>
  // )
// }

  // function geet(name){
    //     console.log(`Hello,${name}`)
    // }
    // const timerId=setTimeout(geet,5000,"Sumit");
    // const timerId2=setTimeout(geet,5000,"Sagar");
    //  const timerId3=setTimeout(geet,5000,"Sandesh");
    // // clearTimeout(timerId);
    // console.log(timerId);
    // console.log(timerId2);
    // console.log(timerId3);

    // const timerId=setInterval(geet,5000,"Sumit");
    // const timerId2=setInterval(geet,5000,"Sagar");

  
    // console.log(timerId);
    // console.log(timerId2);
    //  clearInterval(timerId);
    //    clearInterval(timerId2);




    // Harray potter API
    // import React from 'react'
// import PracticeApi from './pages/PracticeApi'
//     import { BrowserRouter, Routes, Route } from "react-router";
// import { ToastContainer } from 'react-toastify';
// import PracticeApi1 from './pages/PracticeApi1';
// import HarryCharacter from './pages/HarryCharacter';
// import Harrypotter from './pages/Harrypotter';
// import HarryDash from './pages/HarryDash';
// import DashboardHarry from './pages/DashboardHarry';
// import HarrySpells from './pages/HarrySpells';
// import HarryHouse from './pages/HarryHouse';
//     export default function App() {
//       return (
//         <>
//        <BrowserRouter>
//     <ToastContainer
//           position="bottom-right"
//           autoClose={4000}
//           hideProgressBar={false}
//           newestOnTop={true}
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//         <Routes>
//           {/* <Route path="/" element={<PracticeApi/>} /> */}
         
         
//           <Route path='/' element={<Harrypotter/>}/>
//           <Route path='harrydash' element={<HarryDash/>}>
//           <Route index element={<DashboardHarry/>}/>
//             <Route path='books' element={<PracticeApi1/>}/>
//            <Route path='character' element={<HarryCharacter/>}/>
//            <Route path='spells' element={<HarrySpells/>}/>
//            <Route path='house' element={<HarryHouse/>}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>

//         </>
//       )
//     }
    

// Optimization


// import React, { useMemo, useState, useCallback } from 'react';
// import Childone from './pages/Childone';

// export default function App() {
//   console.log(" hello , welcome ");

//   const [count, setCount] = useState(0);

//   const handleCalculation = useMemo(() => {
//     console.log(" calculation");
//     return count + 1;
//   }, [count]); 

  
//   const handleClick = useCallback(() => {
//     console.log("data is coming...");
//   }, []);

//   return (
//     <div>
//       <button onClick={() => setCount(c => c + 1)}>{count}</button> <br />
//       <button onClick={() => setCount(c => c + 1)} className='mb-6'>increment</button>

//       <h1>React memo</h1>
//       <button onClick={handleClick}>click</button>
//       <Childone name="Sumit" handleClick={handleClick} />
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }



// Redux

// import React from 'react'
// import { useSelector } from 'react-redux'
// import { increment,decrement,incrementByAmount } from './Redux/Slices/CounterSlice'
// import { useDispatch } from 'react-redux';
// export default function App() {
//   const count=useSelector((state)=>state.count.value);
//   const dispatch=useDispatch();
//   return (
//     <div className='flex flex-col'>
//       <h1>Counter :{count}</h1>
//       <button onClick={()=>dispatch(increment())} className='border bg-blue-500 mb-2'>increment</button>
//       <button onClick={()=>dispatch(decrement())} className='border bg-blue-500 mb-2'>decrement</button>
//       <button onClick={()=>dispatch(incrementByAmount(5))} className='border bg-blue-500 mb-2'>incrementByAmount</button>
//     </div>
//   )
// }


// Reduxpractice

// import React from 'react'
// import { Route, Routes } from 'react-router'
// import { BrowserRouter } from 'react-router'
// import Page1 from './Redux/Page1'
// import Page2 from './Redux/Page2'
// import Page3 from './Redux/Page3'
// import { useSelector } from 'react-redux'

// export default function App() {
//     const count=useSelector((state)=>state.count.value);

//   return (
//     <BrowserRouter>
   
//     <Routes>
//       <Route path='/' element={<Page1/>}/>
//       <Route path='/page2' element={<Page2/>}/>
//       <Route path='/page3' element={<Page3/>}/>
//     </Routes>
      
//     </BrowserRouter>
//   )
// }

