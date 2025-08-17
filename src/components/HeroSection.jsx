import React from "react";
import Lottie from "lottie-react";
import animationData1 from "../animations/animationData1.json";
import MyButton from "./MyButton";  


export default function HeroSection({productData}) {
  return (
    <div className="flex flex-row">
    {
      productData.map(product=>(
        <div key={product.id} className="">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price:${product.price}</p>
          <p>{product.description}</p>

        </div>
      ))
    }
    </div>
    // <div className="h-[600px] w-screen bg-blue-300 flex flex-col justify-center items-center gap-10">
    //   <section className=" text-2xl text-white ">Welcome to my webside</section>
    //   <div className="h-40 w-40">
    //     <Lottie animationData={animationData1} />
    //   </div>
    //   <MyButton />
    // </div>
  );
}
