import React, { useCallback, useState } from 'react'

//create componet with text input and button. the goal is to show alert with the text entered
// when button is clicked. useCallback memoize the event handler function that triggers the alert
// ensuring its not recreated on every render

const Assignment2 = () => {
    const [inputText, setInputText] = useState('')

    // // normal approach
    // function showAlert(){
    //     alert(inputText)
    // }

    const showAlert = useCallback(()=>{
        alert(inputText)

    },[inputText])
  return (
    <div>
        Assignment2
        <input type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} />
        <br />  

        <Alert showAlert={showAlert}/>

    </div>
  )
}

export default Assignment2

const Alert = ({showAlert})=>{
    return <button onClick = {showAlert}> showalert</button>
}