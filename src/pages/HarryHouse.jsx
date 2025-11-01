import React, { useEffect, useState } from "react";

const apiUrl = "https://potterapi.onrender.com/en/houses";

export default function HarryHouses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHouses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-yellow-50 via-white to-yellow-50 min-h-screen">
      <h1 className="text-3xl font-bold text-yellow-900 mb-8 text-center">
        Hogwarts Houses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {houses &&
          houses.map((item) => (
            <div
              key={item.index}
              className="rounded-xl shadow-md p-6 bg-white border border-yellow-100 hover:shadow-lg hover:border-yellow-300 hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center"
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h2 className="text-2xl font-bold text-yellow-800">
                {item.house}
              </h2>
              <p className="text-slate-600 mt-2 text-sm italic">
                Founder: {item.founder}
              </p>
              <p className="text-slate-700 text-sm mt-1">Animal: {item.animal}</p>

              {/* Colors badges */}
              <div className="flex gap-2 mt-3">
                {item.colors.map((color, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs text-white shadow-sm"
                    style={{ backgroundColor: color }}
                  >
                    {color}
                  </span>
                ))}
              </div>

              <p className="text-xs text-yellow-400 mt-3">Index: {item.index}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
