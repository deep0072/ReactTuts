import React, { useCallback, useEffect, useState } from 'react'

const useDimension = () => {
    const [dimension,setDimension] = useState({width:0, height:0})

    const windowResize = ()=>{
        setDimension({width:window.innerWidth, height:window.innerHeight})

    }
        
    
    useEffect(()=>{
        console.log("setting dimensions")

        window.addEventListener('resize', windowResize);
        return ()=>{
            window.removeEventListener('resize', windowResize)
        }

    },[])

    return dimension


}

export default useDimension