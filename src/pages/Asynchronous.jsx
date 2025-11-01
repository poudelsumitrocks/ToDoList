// import React, { useState } from "react";

// export default function Asynchronous() {
//   const [count, setCount] = useState(0);

//   const handleTime = () => {
//     const intervalId = setInterval(() => {
//       setCount((prev) => {
//         if (prev === 10) {
//           clearInterval(intervalId); 
//           setCount("Finished");
//         }else{
//            return prev + 1;
//         }
//       });
//     }, 1000); 
//   };

//   return (
//     <>
//       <h1 >Count: {count}</h1>
//       <button onClick={handleTime}>Start</button>
//     </>
//   );
// }
