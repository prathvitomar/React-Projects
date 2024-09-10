import { useState, useEffect } from 'react'
import axios from 'axios'


function useCurrencyHook(currency) {
    // const [loading, setLoading] = useState(true);
    const [value, setValue] = useState({});
    // if(loading) return (<h1>Loading.......</h1>)
        useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setValue(res))
        .catch(error => console.log(error))
        // axios.get(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        // .then((data) => setValue(data.data))
        // .catch(error => console.log(error))
        // .finally(()=> setLoading(false))
    },[currency])
    return value;
}

export default useCurrencyHook