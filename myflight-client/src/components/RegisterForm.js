import React, { useState } from "react";

function RegisterForm({ onLogin }) {
  const [user, setUser] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first, last, email, password }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then(onLogin());
          console.log(response);
        } else {
          response.json().then(console.log);
        }
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }
  return (
    <div>
      <h1 className="text-info text-center">Create Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          name="fname"
          placeholder="Enter first name"
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          name="lname"
          placeholder="Enter last name"
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <br/>
        <input
          className="form-control"
          name="email"
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          name="password"
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          className="btn btn-outline-info"
          name="btn_login"
          value="Register"
          type="submit"
        />
        <a className="btn btn-link" href="/login">
          Already have an account? Login
        </a>
      </form>
    </div>
  );
}
export default RegisterForm;