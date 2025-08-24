import React from "react";
import { Link } from "react-router"; 

const navItems = ["Privacy policy ", "Terms of Service", "Contact us", "Help"];

export default function Footers() {
  return (
    <div className=" bg-gray-900 text-white p-4 flex justify-center gap-6">
      {navItems.map((item, index) => (
        <Link
          to={`/${item.toLowerCase()}`}
          key={index}
          className="hover:text-yellow-400 "
        >
        {item}
        </Link>
      ))}
    </div>
  );
}
