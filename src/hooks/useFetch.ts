/* eslint-disable @typescript-eslint/no-shadow */

import React, { useEffect, useState } from 'react';

const useFetch = (fetchService: () => Promise<Response>, setter: React.Dispatch<React.SetStateAction<any>>) => {
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const res = await fetchService();
                const data = await res.json();

                if (data.length === 0) throw new Error('No data found :(');

                setter(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [fetchService, setter])

    return { isLoading, error }
}

export default useFetch;