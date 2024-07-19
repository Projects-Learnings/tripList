import {useEffect, useRef, useState} from "react";


export const useFetch = (url, _options) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const controller = new AbortController();
    const signal = controller.signal;
    const options = useRef(_options).current
    useEffect(() => {
        console.log(options)
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url, {signal});
                // if (!response.ok) {
                //    // throw new Error("Could not fetch data." + response.statusText);
                //     setError(true)
                // }
                const result = await response.json();
                setLoading(false)
                setData(result)
            } catch (e) {
                if (e.name === 'AbortError') {
                    console.log('Fetch aborted');
                    setLoading(false)
                    setError(setError)
                } else {
                    console.error('Fetch error:', error);
                    setLoading(false)
                }


                // if (e.name === "AbortError") {
                //     console.log("Fetch request was aborted")
                //     setLoading(false)
                //     setError(setError)
                // } else {
                //     setLoading(false)
                //     setError(setError)
                // }

            }


        }
        fetchData()

        return () => {
            controller.abort()
        }
    }, [url]);
    return {data, loading, error}
}
//export default useFetch;