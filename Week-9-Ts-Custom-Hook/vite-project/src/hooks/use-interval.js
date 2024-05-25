import React, { useEffect, useState } from 'react'

const useInterval = (fn , timeOut) => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        const value = setInterval(()=>{fn()},timeOut)

        return ()=>{
            clearInterval(value)
        }

    },[timeOut])
 
}

export default useInterval