import React, { useId, useState, useEffect, useRef } from "react";
// import InputGenerator from "./InputGenerator";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(5);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const ref = useRef(null);
  const id = useId();

  const onPasswordChange = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let chars = alphabet;
    if (number) {
      chars += numbers;
    }

    if (character) {
      chars += specialChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    setPassword(password);
  };

  const copyPassword = () => {
    ref.current.focus();
    navigator.clipboard.writeText(ref.current.value)
    .then(() => {
      alert('Password copied to clipboard!');
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
    });
  }

  useEffect(() => {
    onPasswordChange();
  }, [length, number, character]);

  return (
    <div>
      <div className="flex justify-center">
        {/* <InputGenerator
          label="Password Generator"
          type="text"
          value={password}
          ref={ref}
          disabled
        /> */}
        <div className="w-full max-w-sm min-w-[200px]">
        <label htmlFor={id}>Password Generator</label>
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text"
          value={password}
          disabled
          ref={ref}
        />
      </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={copyPassword}
        >
          copy
        </button>
      </div>
      <div>
        <div>
          <input
            className="border"
            type="range"
            value={length}
            min={5}
            max={20}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor={id}>{length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={number}
            onChange={() => setNumber((prev) => !prev)}
          />
          <label htmlFor={id}>Number</label>
        </div>
        <div>
          <input
            type="checkbox"
            value={character}
            onChange={() => setCharacter((prev) => !prev)}
          />
          <label htmlFor={id}>Character</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
