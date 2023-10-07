import React, { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(name,email, "email")
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h3>ControlledInputs</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label" >
            email
          </label>
          <input type="email" id="email" className="form-input" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <button type="submit" className="btn btn-block">
          {" "}
          submit
        </button>
      </form>
    </div>
  );
};

export default ControlledInputs;
