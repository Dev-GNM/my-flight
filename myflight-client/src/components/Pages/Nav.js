import React from 'react';

function Nav() {
    return (
        <nav id="nav-list">
             <div className="logo">
                <h1>myFlightXP</h1>
            </div>
            <div className="nav-bar">
            <li><a href="/">Home</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/login">Logout</a></li> 
            </div>
            
        </nav>
    );
}

export default Nav;