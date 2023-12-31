import {useState,useEffect} from 'react'
const useFetch= (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url)
            .then((response) => {
            if (!response.ok) {
                throw Error("Could not fetch the data for that resource");
            }
            return response.json();
            })
            .then((data) => {
              console.log(data);
              setData(data);
              setIsPending(false);
              setError(null)
            })
            .catch(error =>{
                if (error.name === 'AbortError') {
                    console.log('fetch aborted')
                  } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(error.message);
                  }
            })
        }, 1000);// abort the fetch
        return () => abortCont.abort();
      }, [url])
  return ({data,isPending,error})
}
export default useFetch;
