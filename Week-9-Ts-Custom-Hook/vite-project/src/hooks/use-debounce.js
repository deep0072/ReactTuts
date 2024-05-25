import React, { useEffect, useState } from 'react'

const useDebounce = (value, timeOut) => {

    const [debounceVal, setDebounceVal] = useState(value)
    useEffect(()=>{
        let timeOutNumber = setTimeout(()=>{
            setDebounceVal(value)
        },timeOut)

        return ()=>{
            clearTimeout(timeOutNumber)
        }
    },[value])

    return debounceVal
}

export default useDebounce