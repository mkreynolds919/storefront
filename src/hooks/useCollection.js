import { useState, useEffect } from 'react';

export default function useItem(collection) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!collection) return;

        fetch(`https://dummyjson.com/products/category/${collection}`)
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch collection");
                return response.json();
            })
            .then(data => {
                setData(data.products);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, [collection]);

    return { data, loading, error };
}