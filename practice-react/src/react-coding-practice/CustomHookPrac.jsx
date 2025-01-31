import React, { useEffect } from "react";
import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export const useDebounce = (value, time = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [value, time]);

  return debounceValue;
};

function CustomHookPrac() {
  // const [theme, setTheme] = useLocalStorage("theme", "light");
  // console.log(theme);
  const [search, setSearch] = useState("");
  function handleInput(e) {
    const { value } = e.target; 
    setSearch(value);
  }
  let debounceSearch = useDebounce(search, 1000);
  console.log(search);

  return (
    <>
      <h1>Custom Hook Practice : </h1>

      {/* <div>
        <h1>USE LOCAL STORAGE :</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
      </div> */}

      {/* <div>
        <h1>USE DEBOUNCE :</h1>
        <input type="text" value={search} onChange={(e) => handleInput(e)} />
        <h1>{debounceSearch}</h1>
      </div> */}

    </>
  );
}

export default CustomHookPrac;
