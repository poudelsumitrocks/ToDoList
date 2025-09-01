import React from "react";

export default function Dashboard() {
  // Get current user
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Welcome, {currentUser.name ? currentUser.name : "Guest"}!
      </h1>

      
    </div>
  );
}
