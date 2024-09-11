import React, { useId } from "react";

function InputCardPrac({
  className="",
  label,
  value,
  type = "text",
  onAmountChange,
  amountDisable = false,
  onCurrencyChange,
  selectedOption,
  currencyOptions=[],
  ...props
}) {
  const id = useId();
  return (
    <>
      <div className={`${className}`}>
          {label && <label htmlFor={id}>{label}</label>}
        <div className="flex justify-between">
          <input
            className={` bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${className}`}
            type={type}
            min={0}
            value={value === 0 ? "" : value}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            disabled={amountDisable}
          />
        <select
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          value={selectedOption}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        </div>
      </div>
    </>
  );
}

export default InputCardPrac;
