import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Nav from './components/Pages/Nav'
import Slider from './components/Pages/Slider'
import Airlines from './components/Pages/Airlines'

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
      <Routes>
      {(user.email !=="") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
           ): (
            <Route path="/LoginForm" element= {<LoginForm Login={Login} error={error}/>} />
      )} 
      <Route path="/RegisterForm" element= {<RegisterForm />} />
      <Route path="/" element= {<RegisterForm />} />
      <Route path="/" element= {<Nav />} />
      <Route path="/" element= {<Slider />} />
      <Route path="/" element= {<Airlines />} />
      </Routes>
    </div>
  );
}

export default App;
