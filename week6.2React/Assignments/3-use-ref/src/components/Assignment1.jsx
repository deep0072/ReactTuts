import React, { useEffect, useRef } from 'react'

// create a component with a text input field and a button. When the component mounts or the button clicked
// automatically focus the text input field using useRef

const Assignment1 = () => {
    const divRef = useRef()

    // simple approach
    // get id of input and use focus method
    // useEffect(()=>{
    //       document.getElementById("inputBox").focus()


    // },[])

    // const handleClickButton = ()=>{
    //     document.getElementById("inputBox").focus()


    // }

    // using use ref

    const inputRef = useRef()
    useEffect(()=>{
          inputRef.current.focus()


    },[])

    const handleClickButton = ()=>{
        inputRef.current.focus()


    }
  return (
    <div>
        <input ref={inputRef} id="inputBox" type="text" placeholder='enter text here'/>
        <button onClick={handleClickButton}> focus input </button>
    </div>
  )
}

export default Assignment1