import React from 'react'

function InputBoxSecond({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedOption,
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) {
  const amountInputId = useId();
  console.log()
  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  className="outline-none w-full bg-transparent py-1.5"
                  id={amountInputId}
                  type='number'
                  value={amount || ""}
                  onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                  disabled={amountDisable}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  value={selectedOption}
                  onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled={currencyDisable}
              >
                  {
                      currencyOptions.map((currency)=>{
                          <option key={currency} value={currency}>
                              {currency}
                          </option>
                      })
                  }
              </select>
          </div>
      </div>
  );
}



export default InputBoxSecond