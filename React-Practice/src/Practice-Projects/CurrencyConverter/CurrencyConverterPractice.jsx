import React, { useState } from "react";
import useCurrencyHook from "../CurrencyConverter/useCurrencyHook";
import InputCurrency from "./InputCurrency";

function CurrencyConverterPractice() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyData = useCurrencyHook(from);
  const currencyOptions = currencyData
  ? Object.keys(currencyData)
  : [];
  
  const swap = () => {
    let fromValue = from;
    setFrom(to);
    setTo(fromValue);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyData[to]);
    console.log(convertedAmount)
  };

  return (
    <>
      {/* <h1>These Data is from {currencyData.date} Indian Standard Timezone</h1> */}
      <form onSubmit={(e)=>{
        e.preventDefault();
        convert()
      }}>
        <div className="flex justify-between">
          <InputCurrency
            label="From"
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <div>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={swap}
        >
          Swap
        </button>
        <div className="flex justify-between">
          <InputCurrency
            label="To"
            type="number"
            isDisable={true}
            value={convertedAmount}
          />
          <div>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="submit"
        >Convert {from} to {to}</button>
      </form>
    </>
  );
}

export default CurrencyConverterPractice;