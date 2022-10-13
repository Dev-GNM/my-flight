import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
// import Nav from './components/Nav'
// import Slider from './components/Slider'
// import Airlines from './components/Airlines'

function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Invalid logins!");
      alert("Invalid logins!");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ name:"", email:""});
  }

  return (
    <div className="App">
      {(user.email !=="") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
           ): (
            <LoginForm Login={Login} error={error}/>
      )}
      <RegisterForm />
    </div>
  );
}

export default App;
