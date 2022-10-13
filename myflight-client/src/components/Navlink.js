import React from 'react';

function Navlink() {
    return (
        <nav id="nav-list">
             <div className="logo">
                <h1>myFlight</h1>
            </div>
            <div className="nav-bar">
            <li><a href="/">Home</a></li>
            <li><a href=".new-posts-container">Careers</a></li>
            <li><a href="/">Login</a></li> 
            <li><a href="#footer">Signup</a></li> 
            {/* <NavLink to = "/NewPost"> 
            post

            </NavLink> */}
            
            </div>
            
        </nav>
    );
}

export default Navlink;