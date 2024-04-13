import React, { useState } from "react";
import { memo } from "react";

// when parents state changes then all its child also rerender which is huge  problem
// to eliminate this problem we can use temporary solution that is 'memo'
// function start with memo will only rerender if the inputs given to it changes though parent render or not

const Memo = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>count</button>

      <ChildComponent />
    </div>
  );
};

export default Memo;

// whenever counter changes then this component will render
// const ChildComponent = () => {

//     console.log("child rerendered")

// }

// as i am using memo here it will not render whenever counter changes
const ChildComponent = memo(() => {

    console.log("child rerendered")

})
