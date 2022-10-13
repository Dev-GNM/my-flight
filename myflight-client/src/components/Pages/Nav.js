import React from 'react';

function Nav() {
    return (
        <nav id="nav-list">
             <div className="logo">
                <h1>myFlight</h1>
            </div>
            <div className="nav-bar">
            <li><a href="/">Home</a></li>
            <li><a href=".new-posts-container">Careers</a></li>
            <li><a href="/">About us</a></li> 
            <li><a href="#footer">Log out</a></li> 
            </div>
            
        </nav>
    );
}

export default Nav;