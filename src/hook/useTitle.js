import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}- Detective Kevin`;
    },[title])
}

export default useTitle;