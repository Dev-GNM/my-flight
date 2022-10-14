import React, { useState } from 'react'
// import RegisterForm from './components/RegisterForm'

 function LoginForm({ Login, error }) {
    const [details, setDetails ] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();
        e.target.reset();

        Login(details);
    }


  return (
   <form onSubmit={submitHandler}>
    <div clasName="form-inner">
        <div><h2>WE HACK THE SYSTEM, YOU GET THE FLIGHT OF YOUR LIFE</h2></div>
      {(error !="") ? ( <div className="error">{error}</div> ) :""}
      <div className="form-group">
        <label htmlfor="name">Full Name:</label>
        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} required/> 
      </div>
      <div className="form-group">
        <label htmlfor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
      </div>
      <div className="form-group">
        <label htmlfor="password">Password:</label>
        <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
      </div>
      <input type="submit" value="Login" />
      <div>
      <button type="button" class="collapsible" href="/register">Create account</button>
      </div>
    </div>
   </form>
  )
}

export default LoginForm
