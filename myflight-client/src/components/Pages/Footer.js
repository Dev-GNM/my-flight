import React, { useState} from 'react';

 

  function Footer({ Login, error }) {
    const [details, setDetails ] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();
        e.target.reset();

        Login(details);
    }


  return (
    <div id="footer">
      <div className="about-us">
      <em><p>Learn about your flight provider from your peers
      </p></em>
      </div>
      <div className="support">
      <h4>We love to here from you!</h4>
      <form onSubmit={submitHandler}>
    <div clasName="form-inner">
      {(error !="") ? ( <div className="error">{error}</div> ) :""}
      <div className="form-group">
        <label htmlfor="name">Full Name:</label>
        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} required/> 
      </div>
      <div className="form-group">
        <label htmlfor="email">Email:</label>
        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
      </div>
      <div className='form-group'>
      <textarea name="comment" form="usrform">Enter text here...</textarea>
      </div>
      <input type="submit" value="Submit" />
    </div>
   </form>
      <strong><p>Designed with passion by Geoffrey</p></strong>
      </div> 
     
    </div>
 )};



export default Footer;