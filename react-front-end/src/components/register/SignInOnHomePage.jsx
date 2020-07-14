import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInHomePage = () => {
  const [username, setUsername] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const newUsername = {
      ...username,
      [e.target.name]: e.target.value,
    };
    setUsername(newUsername);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("#", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(username),
    });
    console.log(username);
  };

  return (
    <div className="container-SignUp">
      <div className="signHome">
        
        <div className="div-form landingsign">
        <form onSubmit={handleSubmit}>
          <div className = "formline">
          <label>Username </label>
            
            <input name="username" onChange={handleChange}></input>
            </div>
            <div className = "formline">
          <label>
            Password </label>
            <input name="password" onChange={handleChange}></input>
            </div>
          <button>Sign In</button>
        </form>
        </div>
        <p>don't you have an account?</p>
        <Link to="/signUp"> Signup here</Link>
      </div>
      <div>
        <img src="https://github.com/AlexandruBudaca/Hackaton-sf-ldn-2020/blob/babak/Design/images%20files/Pages%20files/dev-signin.jpg?raw=true" />
      </div>
    </div>
  );
};

export default SignInHomePage;
