import { useEffect, useState } from 'react';

function useFetch({ url }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    async function fetchData() {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            const resData = await res.json(); 
            setData(resData.products); 
        } catch (error) {
            setError(error.message);
            console.error("Fetch error:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]); 

    return { data, error };
}

export default useFetch;
