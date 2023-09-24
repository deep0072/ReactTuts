import { useState } from "react"

// first create toggle button
// when we click toggle button then set the value  to true and also false .
// if value true then show the danger text otherwise do not show

const ToggleChallenge = () => {
    const [value, setValue] = useState(true)
    
    
  return (
    <div>
        ToggleChallenge
        <button className="btn" onClick= {()=>setValue(!value)}>toggle</button>
        {value && <Alert />}
        
        
    </div>
  )
}

export default ToggleChallenge

const Alert = ()=>{
    return <div className="alert alert-danger"> Danger</div>
}