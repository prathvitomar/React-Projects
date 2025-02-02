import React, { useEffect } from 'react'
import { useState } from 'react'

function MainCurrencyConverter() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(null);
    const [currencyOption, setCurrencyOption] = useState([]);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    console.log(from)

    useEffect(()=>{
        ;(async function() {
            try {
                const data = await fetch(`https://api.frankfurter.app/currencies`)
                const res = await data.json();
                console.log(Object.keys(res));
                setCurrencyOption(Object.keys(res));
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })()
        console.log('First Fetch')
    },[])

    function handleSwap(){
        setTo(from);
        setFrom(to);
    }

    const convert = async() => {
        try {
            const data = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
            const res = await data.json();
            console.log(res);
            setResult(res);
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <>
    <div>
        <div>
            <h1>Currency Converter</h1>
            <div>
                <div>
                    <h3>From :</h3>
                <select value={from} onChange={(e)=> setFrom(e.target.value)}>
                    <option value="" disabled>Select an answer</option>
                    {currencyOption.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                </div>
                <div>
                    <button onClick={handleSwap}>Swap</button>
                </div>
                <div>
                    <h3>To :</h3>
                <select value={to} onChange={(e)=> setTo(e.target.value)}>
                    <option value="" disabled>Select an answer</option>
                    {currencyOption.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                </div>
                <div>
                    <h3>Enter Amount :</h3>
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
                </div>
                <div>
                    <button onClick={convert}>Convert</button>
                </div>
                {
                    result && <h1>Converted Amount of amount from {from} to {to} is : {result.rates[to]}.</h1>
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default MainCurrencyConverter

// https://api.frankfurter.app/currencies
// https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}
// https://api.frankfurter.app/latest?amount=10&from=inr&to=usd