// import React from "react";
// import { productData } from "../../data";
// import { Link } from "react-router"; // 

// export default function Product() {
//   return (
//     <div className="min-h-screen flex flex-row items-center justify-center ">
//         <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Available Products</h1>
//       {productData.map((product) => (
//         <div key={product.id} className="border  p-4 m-2 rounded">
//           <Link to={`/product/${product.id}`}>
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="truncate">{product.description}</p>
//             <p className="font-bold">Price: ${product.price}</p>
//             <img src={product.image} alt={product.name} className="w-32 h-32" />
//           </Link>
//         </div>
//       ))}
//     </div>
//     </div>
    
//   );
// }
