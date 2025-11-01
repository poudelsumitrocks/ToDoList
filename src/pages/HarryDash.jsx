import React from "react";
import { useNavigate, Outlet } from "react-router";

export default function HarryDash() {
  const navigate = useNavigate();


  const handleHome = () => {
    navigate("/harrydash");
  };
  const handleBooks = () => {
    navigate("books");
  };
  const handleCharacter = () => {
    navigate("character");
  };
  const handleSpells = () => {
    navigate("spells");
  };
  const handleHouse = () => {
    navigate("house");
  };

  return (
    <div className="grid grid-cols-12 min-h-screen bg-slate-50 text-slate-800">
      {/* Sidebar */}
      <div className="col-span-2 bg-slate-900 px-6 py-6 flex flex-col">
        <div className="h-14 w-14 mb-8 mx-auto rounded-full bg-gradient-to-br from-rose-700 to-yellow-400 text-white text-xl font-bold flex justify-center items-center shadow-lg">
          H
        </div>
        <nav className="space-y-2">
          <a className="block px-3 py-2 rounded-md bg-slate-800 text-white font-medium shadow-sm" onClick={handleHome}>
           Home
          </a>
          <a
            className="block px-3 py-2 rounded-md text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer transition"
            onClick={handleCharacter}
          >
            Character
          </a>
          <a
            className="block px-3 py-2 rounded-md text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer transition"
            onClick={handleBooks}
          >
            Books
          </a>
          <a
            className="block px-3 py-2 rounded-md text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer transition"
            onClick={handleSpells}
          >
            Spells
          </a>
          <a
            className="block px-3 py-2 rounded-md text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer transition"
            onClick={handleHouse}
          >
          Houses
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="col-span-10 p-6">
        <Outlet />
      </div>
    </div>
  );
}
