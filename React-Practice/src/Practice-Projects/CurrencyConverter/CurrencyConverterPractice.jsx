import React, { useState } from 'react'
import useCurrencyHook from '../CurrencyConverter/useCurrencyHook'
import InputCurrency from './InputCurrency';

function CurrencyConverterPractice() {
  const [amount, setAmount] = useState(0);
  // const [currency, setCurrency] = useState('inr');
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const currencyData = useCurrencyHook('inr');
  const currencyOptions = Object.keys(currencyData[from]);

  return (
    <>
        <form>
          <InputCurrency 
          type='number'
          placeholder='Enter Amount'
          value={amount}
          />
        </form>
    </>
  )
}

export default CurrencyConverterPractice