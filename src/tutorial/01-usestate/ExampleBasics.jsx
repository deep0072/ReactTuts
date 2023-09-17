import { useState } from "react"

export  default function  UseStateBasics(){
    const [count,setCount] =useState(0)

    const handleCount = ()=> {
        setCount(count+1)
    }
    
    return (
        <div>
            <h2>{count}</h2>

            <button type = "button" onClick={handleCount} className="btn"> click</button>
        </div>
    )
}