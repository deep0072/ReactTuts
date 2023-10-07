import React, { useState } from "react";
import { data } from "../../data";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const handleChange = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();

    setUsers([...users, { id: fakeId, name }]);
    setName("");
  };

  const removeId = (id)=>{
    const updatedUser = users.filter((user)=> user.id != id)
    setUsers(updatedUser)

  }
  return (
    <div>
      <h3>Add user</h3>
      <form className="form" onSubmit={handleChange}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            {" "}
            name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button type="submit" className="btn btn-block">
            {" "}
            submit
          </button>
        </div>
      </form>
      <h4>users</h4>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {" "}
            <h4>
              {" "}
              {user.name} <button className="btn btn-block" onClick={()=>removeId(user.id)}>remove</button>
            </h4>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default ControlledInputs;
