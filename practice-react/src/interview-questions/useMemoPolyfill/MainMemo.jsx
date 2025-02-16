import { useMemo, useState } from "react";
import "./styles.css";
import useCustomMemo from "./useCustomMemo.js";

export default function MainMemo() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);
  function handleCounter() {
    console.log("Expensive Calculations..!!!");
    return counter * counter;
  }

  const cachedValue = useCustomMemo(handleCounter, [counter]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
      <h1>{counter}</h1>
      <h1>{cachedValue}</h1>
      <button onClick={() => setCounter2((prev) => prev - 1)}>Decrease</button>
      <h1>{counter2}</h1>
    </div>
  );
}
