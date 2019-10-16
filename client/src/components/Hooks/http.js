import { useReducer, useCallback } from 'react';


const useHttp = () => {
    const sendRequest = useCallback((url, method, body, reqIdentifier) => {

        fetch(url, {
            method: method,
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( response => {
            return response.json();
        }).then(responseData => {

        }).catch( error => {

        })
    }, [])
}

export default useHttp;