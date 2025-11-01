import React, { useEffect, useState } from "react";

const apiUrl = "https://potterapi.onrender.com/en/spells";

export default function HarrySpells() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSpells(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-blue-50 via-white to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Harry Potter Spells
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {spells &&
          spells.map((item) => (
            <div
              key={item.index}
              className="rounded-xl shadow-md p-6 bg-white border border-blue-100 hover:shadow-lg hover:border-blue-300 hover:scale-[1.02] transition-transform duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-800">
                {item.spell}
              </h2>
              <p className="text-slate-600 mt-2 text-sm">{item.use}</p>
              <p className="text-xs text-blue-400 mt-3">Index: {item.index}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
