import React, { useState } from "react";

function DarkMode() {
  const [mode, setMode] = useState("light");
  const handleMode = () => mode === "light" ? setMode("dark") : setMode("light");
  return (
    <>
      <div
        style={{
          height: "300px",
          width: "300px",
          backgroundColor: mode === "light" ? "#ffffff" : "#333333", 
          color: mode === "light" ? "#000000" : "#ffffff", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={handleMode}>{mode} Mode</button>
      </div>
    </>
  );
}

export default DarkMode;
