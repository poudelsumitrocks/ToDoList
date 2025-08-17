import React from "react";
import { NameContext } from "./Content.jsx";
import { ThemeContext } from "../ThemContext/ThemeContext.jsx"; // ✅ Correct path

export default function Content2() {
  const name = React.useContext(NameContext);
  const theme = React.useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      ChildThere, I am getting {name}
    </div>
  );
}
