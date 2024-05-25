import React, { useEffect, useState } from 'react'

const useOnline = () => {
    const [isOnline,setIsOnline] = useState(window.navigator.onLine)
  
    // useEffect(()=>{
    //     window.addEventListener("online",()=>{
    //         setIsOnline(true)
    //     })
        
    //     window.addEventListener("offline",()=>{
    //         setIsOnline(false)
    //     })

    // }, []) 

    return isOnline
}

export default useOnline