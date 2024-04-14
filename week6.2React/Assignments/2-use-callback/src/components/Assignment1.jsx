import React, { memo, useCallback, useState } from "react";

// create a counter component with increment and decrement functions. Pass these functions to a child component
//  which has buttons to perform increment and decrement functions
const Assignment1 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(()=> {
    console.log("increment")
    setCount(count=>count + 1);
  }, []) 
  
  // why did we put count dependency

  //1. in first time render callBack keep track of function that it will be mounted and run .
  // so in second rendering function already mounted so it wont run.
  // as we add count dependcy then call back look at count and then pass the function in child component. 
  // means whenver count changes increment and decrement will execute.
  
  const handleDecrement = useCallback(()=> {
    console.log("decrement")
    setCount(count=>count - 1);
  }, [])

  return (
    <div>
      Assignment
      {count}
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default Assignment1;

// whenever click on increment and decrement CounterButton also rendering because the function we
// are passing to this CounterButton also recreating. to stop this recreation we need to
// use callback so that props cant be changed and CounterButton wont be rerender
const CounterButtons = memo(({ onIncrement, onDecrement }) => {
 
    return <div>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  
});
