import React, { useState, useEffect } from "react";
const apiUrl = "https://potterapi.onrender.com/en/characters";

export default function HarryCharacter() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
          <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Harry Potter Characters
      </h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-blue-50 min-h-screen">
  
      {character &&
        character.map((char) => (
          <div
            key={char.fullName}
            className="rounded-xl shadow-md p-6 flex flex-col items-center bg-white border border-blue-100 hover:shadow-lg hover:border-blue-300 hover:scale-[1.01] transition-transform"
          >
            <img
              src={char.image}
              alt={char.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-blue-200 shadow-sm mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-900 text-center">
              {char.fullName}
            </h2>
            <h3 className="text-blue-600 text-sm">{char.nickname}</h3>
            <h4 className="text-blue-400 text-sm italic">
              {char.interpretedBy}
            </h4>
            <p className="text-blue-500 text-sm mt-1">{char.birthdate}</p>

            {/* Children tags */}
            {char.children && char.children.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mt-4">
               
                {char.children.map((child, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700 border border-blue-200 shadow-sm"
                  >
                    {child}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
    </div>
   
  );
}
