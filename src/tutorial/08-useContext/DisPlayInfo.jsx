import { useContext } from "react"
import {objectContext} from "./UseContextExample"


export const DisplayName = ()=>{
    const value = useContext(objectContext)
    console.log(value, "value")
    return <h1>hi {value.name}!</h1>
}
export const DisplayAge = ()=>{
    const value = useContext(objectContext)
    
    return <h1>hi {value.name} yours age is {value.name}!</h1>
}