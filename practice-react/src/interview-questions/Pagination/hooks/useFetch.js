import { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        ;(async function(){
            setError(null);
            setLoading(false);
            try {
                const apiData = await fetch(url);
                const res = await apiData.json();
                setData(res);
                console.log(res);
            } catch (error) {
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        })()
    },[url])

    return {data, error, loading}
}

export default useFetch