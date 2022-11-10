import { useEffect } from "react"




const useTitle = (data) => {

    useEffect(() => {
   
        document.title = data;

    }, [data])

}

export default useTitle