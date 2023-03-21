import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const aborter = new AbortController();

        fetch(url, { signal: aborter.signal })
            .then(res => { 
                    if(!res.ok){ throw Error('Fetch unsuccessful'); }
                    return res.json(); 
                })
            .then(data => { 
                    console.log(data); 
                    setData(data);
                    setPending(false);
                    setError(null); 
                })
            .catch (err =>{
                if (err.name === 'AbortError') {console.log('Fetch aborted'); }
                else {
                setPending(false);
                setError(err.message);
                }
            })

            
            return () => aborter.abort();
    }, [url]);

    return { data, pending, error }
}

export default useFetch;