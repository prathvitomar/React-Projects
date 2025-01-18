import React, { useEffect, useRef, useState } from 'react'
import { use } from 'react'

function PasswordGenerator(){
    const [password,setPassword] = useState("");
    const [length, setLenght] = useState(8);
    const [upperCase, setUppercase] = useState(false);
    const [lowerCase, setLowercase] = useState(false);
    const [symbol, setSymbol] = useState(false);
    const [number, setNumber] = useState(true);
    const inputRef = useRef(null);

    useEffect(()=>{
        generateString();
    },[length, upperCase, lowerCase, symbol, number])

    function generateString() {
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/~`";
        const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
      
        let characterPool = "";
      
        if (number) characterPool += numbers;
        if (symbol) characterPool += symbols;
        if (upperCase) characterPool += upperCaseLetters;
        if (lowerCase) characterPool += lowerCaseLetters;
      
        if (!characterPool) {
          throw new Error("At least one character type must be selected.");
        }
        let result = "";
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characterPool.length);
          result += characterPool[randomIndex];
        }
        setPassword(result);
      }
      

    function handleLength(e){
        setLenght(e.target.value)
    }

    function handleCopy(){
        if (inputRef.current) {
            navigator.clipboard.writeText(inputRef.current.value)
              .then(() =>{
                setPassword("");
                setLenght(8);
                setLowercase(false)
                setNumber(false)
                setSymbol(false)
                alert("Text copied to clipboard!")
              })
              .catch(() => alert("Failed to copy text"));
          }
    }


  return (
    <>
        <div>
            <div>
                <h1>Password Generator :</h1>
                <div>
                    <h2>Generated Password : </h2>
                    <input type="text" ref={inputRef} disabled value={password} onChange={generateString}/>
                    <button onClick={handleCopy}>Copy</button>
                </div>
                <div>
                    <h3>Character Length : {length}</h3>
                    <input type="range" min={0} max={25} value={length} onChange={handleLength}/>
                </div>
                <div>
                    <label>Include UpperCase</label>
                    <input type="checkbox" checked={upperCase} value={upperCase} onChange={(e)=> setUppercase(prev => !prev)}/>
                </div>
                <div>
                    <label>Include LowerCase</label>
                    <input type="checkbox" checked={lowerCase} value={lowerCase} onChange={(e)=> setLowercase(prev => !prev)}/>
                </div>
                <div>
                    <label>Include Number</label>
                    <input type="checkbox" checked={number} value={number} onChange={(e)=> setNumber(prev => !prev)}/>
                </div>
                <div>
                    <label>Include Symbols</label>
                    <input type="checkbox" checked={symbol} value={symbol} onChange={(e)=> setSymbol(prev => !prev)}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default PasswordGenerator