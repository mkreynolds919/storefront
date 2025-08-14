import { useState, useEffect } from 'react';

export default function useItem(itemId) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!itemId) return;

        fetch(`https://dummyjson.com/products/${itemId}`)
            .then(response => {
                if (!response.ok) throw new Error("Failed to fetch item");
                return response.json();
            })
            .then(data => {
                setData(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, [itemId]);

    return { data, loading, error };
}