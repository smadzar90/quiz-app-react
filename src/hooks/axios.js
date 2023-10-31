import { useEffect, useState } from 'react';
import axios from 'axios';


const client = axios.create({
    baseURL: "https://opentdb.com/" 
});

function GetDataFromApi(url) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        client.get(url)
              .then(res => {
                    setResponse(res)
                })
              .catch(err => {
                    setError(err)
                })
              .finally(() => 
                    setLoading(false)
        );
    }, [url]);

    return {response, error, loading};
}

export default GetDataFromApi;