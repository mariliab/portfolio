import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavBar() {
    const [isSticky, setIsSticky] = React.useState(false);

    function handleScroll() {
        const header = document.getElementById("navbar");
        if (window.pageYOffset > header.offsetHeight) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    }

    const stickyHeader = Boolean(isSticky);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return <nav id="navbar" className={stickyHeader ? "sticky-header" : "not sticky"}>
        <div>
        <div>
        <Link to="/" style={{color: "black", textDecoration: "none"}}>Marilia Bognandi portfolio</Link>
        </div>
        <div>
            <Link to="/" style={{padding: "0 0.5rem", color: "black", textDecoration: "none"}}>Home</Link>
            <a href="http://bognandiphotography.com/" style={{padding: "0 0.5rem", color: "black", textDecoration: "none"}} target="_blank">Photography</a>
            <Link to="/About" style={{padding: "0 0.5rem", color: "black", textDecoration: "none"}}>About</Link>
        </div>
        </div>
    </nav>
}

export default NavBar