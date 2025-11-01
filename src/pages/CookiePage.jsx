import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";

const data = "Sumit poudel";
export default function CookiePage() {
  const [getValue, setValue] = useState("");

  const getCookies = () => {
    const res = Cookies.get("name");
    setValue(res);
  };
  return (
    <div className="p-10 bg-gray-300 h-screen ">
      <div className="bg-white p-4 mt-6 rounded-3xl z-50">
        <h1 className="text-center m-4 text-2xl font-bold ">Cookies</h1>
        <p className="h-10 w- mb-4 border border-gray-800 rounded-2xl p-4 flex items-center">
          {getValue}
        </p>
        <div className="flex flex-row justify-center items-center gap-6">
          <button
            onClick={() => Cookies.set("name", data, { expires: 7 })}
            className="bg-blue-500 p-4 flex justify-center items-center"
          >
            Set
          </button>
          <button
            onClick={getCookies}
            className=" bg-yellow-500 p-4 text-center"
          >
            get
          </button>
          <button
            onClick={() => Cookies.remove("name")}
            className="bg-red-500 p-4 flex justify-center items-center"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
