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
            const resData = await res.json(); // Await the JSON parsing
            setData(resData.products); // Access 'products' assuming the structure is correct
        } catch (error) {
            setError(error.message);
            console.error("Fetch error:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]); // Add 'url' as a dependency

    return { data, error };
}

export default useFetch;
