import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInHomePage = () => {
  const [username, setUsername] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState({});
  const handleChange = (e) => {
    const newUsername = {
      ...username,
      [e.target.name]: e.target.value,
    };
    setUsername(newUsername);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://ancient-hamlet-95801.herokuapp.com/api/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify(username),
    })
      .then((res) => res.json())
      .then((data) => setToken(data));
    console.log(token);
  };

  return (
    <div className="container-SignUp">
      <div className="signHome">
        <div className="div-form landingsign">
          <form onSubmit={handleSubmit}>
            <div className="formline">
              <label>Email </label>

              <input name="email" onChange={handleChange}></input>
            </div>
            <div className="formline">
              <label>Password </label>
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
