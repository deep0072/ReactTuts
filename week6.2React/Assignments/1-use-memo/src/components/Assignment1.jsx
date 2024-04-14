import React, { useMemo, useState } from "react";

// create a component that perform expensive calculation on the user input
// (finding ) factorial on the basis of user input
// use useMemo to ensure that the calculation is only recomputed when the input changes

const Assignment1 = () => {
  const [input, setInput] = useState(0);
//   let expensiveValue = 1;
//   // normal solution
//   for (let i=1; i <= input; i++){
//     expensiveValue = expensiveValue * i;
//   }

  const expensiveValue = useMemo(()=>{
    console.log("expensive calculation")
    let value = 1
    for (let i=1; i <= input; i++){
        value = value * i;
      }
    return value


  },[input])
  // now use useMemo


  return (
    <div>
      Assignment1
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <br />
      {expensiveValue}
    </div>
  );
};

export default Assignment1;
