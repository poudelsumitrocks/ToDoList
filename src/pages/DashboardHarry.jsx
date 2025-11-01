import React from "react";

export default function DashboardHarry() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-10 bg-gradient-to-b from-amber-50 via-white to-slate-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-rose-900 mb-4">
          Welcome to the Harry Potter Dashboard
        </h1>
        <p className="text-slate-700 text-lg">
          Navigate using the sidebar to explore characters, books, and more magical content.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-rose-800 to-yellow-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
            Begin Adventure
          </button>
          <button className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:shadow hover:bg-slate-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
