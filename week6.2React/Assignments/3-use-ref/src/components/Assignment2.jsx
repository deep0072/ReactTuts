import React, { useRef, useState } from 'react'

// create a component that tracks and displays the number of times it has been rendered. Use useRef to
// create a variable that persist across the renders without causing additional renders when it changes
const Assignment2 = () => {
    const[render, forceRender] = useState(0)

    const numberOfRenders = useRef(0)
    const handleRerender = ()=>{
        //update state to force re-render
        forceRender(Math.random())

    }
    numberOfRenders.current = numberOfRenders.current+1
  return (
    <div>
        Assignment2
        <p>this component has rendered {numberOfRenders.current} times</p>
        <button onClick={handleRerender}> Force Re-render</button>
    </div>
  )
}

export default Assignment2