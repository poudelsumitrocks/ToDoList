import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import animationData1 from "../../animations/animationData1.json";
import { useNavigate } from "react-router";
export default function Home() {
  const navigate=useNavigate();
  const handleContact=()=>{
    navigate("/form")
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10 bg-gray-300">
      <h1 className="text-3xl ">Welcome to home page </h1>
      <Lottie
        loop={true}
        style={{ height: 300, width: 300 }}
        animationData={animationData1}
      />
      {/* <Link to={`/`}>
        <button className="bg-blue-500 hover:bg-blue-900 cursor-pointer h-10 w-32 rounded-2xl">
          Go to Search
        </button>
      </Link> */}
      <button className=" bg-blue-400 p-4 rounded-full" onClick={handleContact}>Contact Page </button>
    </div>
  );
}
