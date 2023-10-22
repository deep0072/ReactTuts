// useRef ==> is used to manipulate directly in dom 
// without reRendering the page


import React, { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const [value, setValue] = useState(0);
  console.log(refContainer)
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    const name = refContainer.current.value
    console.log(name, "name")
  }


  
  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        UseRefBasics
        <div className="form-row">
          <label htmlFor="name" id="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-input" id="Name" ref={refContainer } />
        </div>
      <button type="submit" className="btn btn-block" onClick={()=>{setValue
      (value+1)}}>
        click
      </button>
      </form>

      {value}


    </div>
  );
};

export default UseRefBasics;
