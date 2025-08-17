import React from "react";
import Content2 from "./Content2.jsx";
import { ThemeContext } from "../ThemContext/ThemeContext.jsx"; // ✅ Correct path

// ✅ Create NameContext
export const NameContext = React.createContext();

export default function Content() {
  return (
    <div>
      {/* ✅ Use Provider with value prop */}
      <NameContext.Provider value={"sumit"}>
        <ThemeContext.Provider value={"dark"}>
          <Content2 />
        </ThemeContext.Provider>
      </NameContext.Provider>
    </div>
  );
}
