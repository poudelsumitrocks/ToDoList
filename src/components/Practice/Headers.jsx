import React from "react";
import { Link } from "react-router"; 

const navItems = ["Home", "About", "Contact", "Product"];

export default function Headers() {
  return (
    <div className=" bg-gray-800 text-white p-4 flex justify-center gap-6">
     
      {navItems.map((item, index) => (
        <Link
          to={`/${item.toLowerCase()}`}
          key={index}
          className="hover:text-yellow-400 hover:underline"
        >
        {item}
        </Link>
      ))}
    </div>
  );
}
