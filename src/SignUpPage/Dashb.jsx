import React from "react";
import { useLocation } from "react-router";

export default function Dashb() {
  const location = useLocation();
  console.log(location)
  // const username = location.state || "Guest";
  const username=sessionStorage.getItem("currentUser");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Welcome, {username}!
      </h1>
      <hr className="w-full border-2 border-gray-500"/>
    </div>
  );
}
