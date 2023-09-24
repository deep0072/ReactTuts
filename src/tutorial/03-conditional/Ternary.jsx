import { useState } from "react"

const TernaryOperator = () => {
    const [name, setName] = useState("")
  return (
    <div>
        {/* first check if name exist then it will let render   the example if given below is ternary operation*/}
        {name ? <ConsoleName name = {name}/> : "nothing is there"} 
         
        
    </div>
  )
}

export default TernaryOperator

const ConsoleName = ({name})=>{
    return <div>{name}</div>
}