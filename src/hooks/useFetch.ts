import {useCallback, useState} from "react";


export const useFetch = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);

    const request = useCallback(async (url:string, method = 'GET', body = null as null | Object, headers: any = {}) => {
        setLoading(true);
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, {method, body, headers});
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Error is occurred');
            }

            setLoading(false);

            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return { loading, request, error, clearError };
}
