import React, { useEffect, useState } from "react";
import { ThemeProvider } from "../hooks-practice/useContextPrac";
import ThemeBtn from "./ThemeBtn";
import Card from "./Card";

function ThemeMain() {
  const [mode, setMode] = useState("light");

  const lightTheme = () => {
    setMode("light");
  };

  const darkTheme = () => {
    setMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(mode);
  }, [mode]);

  return (
    <ThemeProvider value={{ mode, lightTheme, darkTheme }}>
      <div>
        <ThemeBtn />
      </div>
      <div>
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default ThemeMain;
