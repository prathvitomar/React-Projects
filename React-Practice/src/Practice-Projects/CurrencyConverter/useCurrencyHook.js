import { useState, useEffect } from 'react'
import axios from 'axios'


function useCurrencyHook(currency) {
    const [value, setValue] = useState([]);

    useEffect(()=>{
        axios.get(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then(data => setValue(data.data))
        .catch(error => console.log(error))
    },[])
    
    return value;
}

export default useCurrencyHook