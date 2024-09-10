import React, { useId } from 'react'

function InputCurrency({
    label,
    className = '',
    isDisable = false,
    type = 'text',
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions,
    placeholder,
    ...props
}) {

    const id = useId();
  return (
        <div className="w-full max-w-sm min-w-[200px]">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          className={`w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${className}`}
          type={type}
          value={amount}
          placeholder={placeholder}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={isDisable}
        />
      </div>
  )
}

export default InputCurrency