import React, { useState } from "react";

export default function Child() {
  // const [count, setCount] = useState("Sumit");
  // const [name, setName] = useState(" ");
  const [isDarkMode,setIsDarkMode]=useState("false");
  function doToggle(){
    setIsDarkMode(!isDarkMode);
  }
  // function handleIncrement() {
  //   setCount(count.toUpperCase());
  // }
  // function convertToUppercase() {
  //   setName(name.toUpperCase());
  // }
  // function convertToColor() {
  //   document.querySelector('.text').style.color = "red";
  // }

  // const handleDecrement = () => {
  //   setCount("Sumit");
  // };

  return (
    <>
      {/* <h2 className="text-3xl">count is {count}</h2>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleIncrement}
      >
        Show Uppercase
      </button>
      <button
        className="bg-amber-300 text-black p-2 rounded"
        onClick={handleDecrement}
      >
        Reset
      </button>
      <br />
      <label htmlFor="text">Enter : </label>
      <input
        type="text"
        value={name}
        className="h-10 w-32 border-1"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button
        className="bg-blue-500 text-white p-2 rounded ml-2"
        onClick={convertToUppercase}
      >
        To UpperCase
      </button>

      <button
        className="bg-blue-500 text-white p-2 rounded ml-2"
        onClick={convertToColor}
      >

        To Color
      </button>
      <div className="bg-gray-500 text-black h-32 w-full border rounded p-2 ">
        <h2 className="text-3xl">{name}</h2>
      </div> */}

         <div
      className="h-screen flex justify-center items-center transition-colors duration-300"
      style={{
        backgroundColor: isDarkMode ? "#222" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <button
        onClick={doToggle}
        className="p-4 rounded bg-blue-500 text-white"
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
    </>
  );
}
