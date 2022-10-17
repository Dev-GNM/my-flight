import './App.css';
import React, { useState, useEffect } from 'react';
// import LoginForm from './components/LoginForm';
// import RegisterForm from './components/RegisterForm';
import Nav from './components/Pages/Nav'
import Slider from './components/Pages/Slider'
import AirlineImg from './components/Pages/AirlineImg';
import NewReview from './components/Pages/NewReview'
// import Review from './components/Pages/Review';
import Footer from './components/Pages/Footer';
import Login from './components/Pages/Login';


function App() {
  const [user, setUser] = useState(null);
  const [review, setReview] = useState([]);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  if (!user) return <Login onLogin={setUser} />;


  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123"
  // }

  // const [user, setUser] = useState({name:"", email:""});
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);

  //   if (details.email == adminUser.email && details.password == adminUser.password) {
  //     console.log("Logged in");
  //     // window.location.href = '/home'
  //     setUser({
  //       name: details.name,
  //       email: details.email,
  //     });
  //   } else {
  //     console.log("Invalid logins!");
  //     alert("Invalid logins!");
  //   }
  // }

  // const Logout = () => {
  //   console.log("Logout");
  //   setUser({ name:"", email:""});
  // }

  return (
    <div className="App">
      {/* {(user.email !="") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          </div>
           ): (
            <LoginForm Login={Login} error={error} href="/home"/> */}
      {/* )} */}
      <Nav />
      <Slider />
      <AirlineImg />
      <NewReview review={review} setReview={setReview}/>   
      {/* <Review /> */}
      <Footer />
    </div>
  );
}

export default App;
