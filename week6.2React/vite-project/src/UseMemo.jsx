import React, { useMemo } from 'react'
import { useState } from 'react'

const UseMemo = () => {
    const [inputValue, setInputValue] = useState(0)
    const [counter, setCounter] = useState(0)


    // whenver counter and input changes then this give count calculation will be occur
    // to avoid this we need to use useMemo

    // let count = 0
    // console.log("memo got called ")
    // for (let i=1; i<=inputValue;i++){
    //     count+=i
    // }


    //---------------------------------------------------------------------------------

    // we can use ueEffect also. but we require third state varaible in this case
    // which cause to rerender .
    // useMemo always return value means computing thing on the fly do not required another state variable
    // this function only compute things when inputValue changes
    const count = useMemo(() => {
        let count = 0
        console.log("memo got called ")
        for (let i=1; i<=inputValue;i++){
            count+=i
        }
     
     
    
      return count
    }, [inputValue])
    

  return (
    <div>
        UseMemo
        <input onChange={(e)=> setInputValue(e.target.value)}></input>
        <br />
        sum from 1 to {inputValue} is {count}
        <br />
        <button onClick={()=> setCounter(counter+1)}>count: {counter}</button>
    </div>
  )
}

export default UseMemo