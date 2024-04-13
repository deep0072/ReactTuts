import React, { useCallback, useEffect, useMemo, useState } from "react";
import { memo } from "react";

// when parents state changes then all its child also rerender which is huge  problem
// to eliminate this problem we can use temporary solution that is 'memo'
// function start with memo will only rerender if the inputs given to it changes though parent render or not



const UseCallBack = () => {
  const [counter, setCounter] = useState(0);

  // when we pass this function as an input to ChildComponent will rerender whenever counter state variable  changes

  // whats the reason of change::==>> well inputFunction in props and the function given below both refer to different memory. 
  //refrence integrity not maintained

  
  // so how to prevent this rerendering useCallBack.
  // it memoize the function across the rerender

  const inputFunction = useCallback(()=>{
    console.log("hi there")
  },[])

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>count</button>

      <ChildComponent  inputFunction = {inputFunction}/>
    </div>
  );
};

export default UseCallBack;

// whenever counter changes then this component will render
// const ChildComponent = () => {

//     console.log("child rerendered")

// }

// as i am using memo here it will not render whenever counter changes
const ChildComponent = memo(() => {

    console.log("child rerendered")

})
