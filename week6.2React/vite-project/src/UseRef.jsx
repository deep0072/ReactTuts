import React, { useEffect, useRef, useState } from 'react'

// use ref is used to get the reference of dom elements 
// 


const UseRef = () => {
    const [incomeTax, setIncomeTax] = useState(900)
    const divRef = useRef()

    useEffect(()=>{
        setTimeout(()=>{
            //change the ref value of div tag
            console.log(divRef.current, "current")
            divRef.current.innerHTML = 100

        },[5000])

    },[])
    
  return (
    <div>
        UseRef
        <br />
       <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default UseRef