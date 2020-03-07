import {useState, useCallback} from 'react'

export const UseHttp = () => {
    const [SetLoading, Loading] = useState(false)
    const [error,setError] = useState(null)
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {

            SetLoading(true);
            const json = JSON.stringify(body);
            const response = await fetch(url, {
                method,
                json,
                headers
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'что то не так!')
            }
            SetLoading(false)
        } catch (e) {
            SetLoading(false);
            setError(e.message);
            throw e
        }
    },[]);
    const ClearError = () =>setError(null);
    return {Loading,request,error,ClearError}
};