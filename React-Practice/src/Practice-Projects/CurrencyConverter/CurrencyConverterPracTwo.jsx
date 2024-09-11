import React, { useState } from "react";
import InputCardPrac from "./InputCardPrac";
import useCurrencyPracTwo from "./useCurrencyPracTwo";

function CurrencyConverterPracTwo() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currencyData = useCurrencyPracTwo(from);
  const currencyOptions = Object.keys(currencyData);
  console.log(currencyData);
  console.log(currencyOptions);
  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyData[to]);
    console.log(convertedAmount)
  };

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div>
            <InputCardPrac
              label="From"
              type="number"
              value={amount}
              selectedOption={from}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency)=> setFrom(currency)}
              currencyOptions={currencyOptions}
            />
          </div>
          <div>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div>
            <InputCardPrac
              label="To"
              type="number"
              value={convertedAmount}
              selectedOption={to}
              onAmountChange={(amount) => setConvertedAmount(amount)}
              onCurrencyChange={(currency)=> setTo(currency)}
              currencyOptions={currencyOptions}
              amountDisable={true}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Convert {from} to {to}
          </button>
        </form>
      </div>
    </>
  );
}

export default CurrencyConverterPracTwo;
