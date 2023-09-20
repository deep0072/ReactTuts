import React, { useEffect, useState } from 'react'

export const ExampleUseEffect = () => {
    const [value,setValue] = useState(0);
    const [value2,setValue2] = useState(0);
    function firstValue() {
        setValue(value+1);
    }
    function secondValue() {
        setValue2(value2+1);
    }

    // console.log(value) // it will run on every each render. so wee need to use UseEffect here

    useEffect(()=>{
        console.log("logging from value")
    }, [value]) // in this second argument is dependency array which will let the print only one time in browser
    useEffect(()=>{
        console.log("logging from secondValue") 
    }, [value2]) // in this second argument is dependency array which will let the print only one time if array is empty in browser
                  // if we enter some variable in it then all things that is present inside the useEffect will render when that variable changes
  return (
    <div>
       
    {value}
    <button onClick={firstValue
    }>firstValue</button>    
    <br></br>
    <br></br>
    {value2}
    <button onClick={secondValue
    }>secondValue</button>    
    </div>
  )
}
