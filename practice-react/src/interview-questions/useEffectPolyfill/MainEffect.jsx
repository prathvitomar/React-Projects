import { useMemo, useState, useEffect } from "react";
import "./styles.css";
import useCustomMemo from "./hooks/useCustomMemo.js";
import useCustomEffect from "./hooks/useCustomEffect.js";

export default function MainEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log("First Render");
    console.log("Rendered");
  }, [counter, counter2]);

  useCustomEffect(() => {
    console.log(" Render");
    return () => {
      console.log("Cleanup Run.");
    };
  }, [counter]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter2((prev) => prev - 1)}>Decrease</button>
      <h1>{counter2}</h1>
    </div>
  );
}
