import React from "react";

export default function Buttons({ handleAdd, handleClear, showClear, toggleDarkMode }) {
  return showClear ? (
    <button
      className="w-full bg-gray-200 text-black py-2 rounded"
      onClick={handleClear}
    >
      Clear All
    </button>
  ) : (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-r"
      onClick={handleAdd}
    >
      Add
    </button>
  );
}
