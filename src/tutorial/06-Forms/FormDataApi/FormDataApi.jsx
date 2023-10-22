import React from "react";

const FormDataApi = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.currentTarget is target the form to which event is listening
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");

    const name = formData.get("name");
    const password = formData.get("password");
    console.log(formData);
    //Object.fromEntries this convert all form's data into objects
    // it can be used to send the data of form as payload
    const newUser = Object.fromEntries(formData);
    console.log(newUser);

    // here reset method will clear the each form input field
    e.currentTarget.reset();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        FormDataApi
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="text" className="form-input" id="email" name="email" />
        </div>
        <div action="" className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default FormDataApi;
