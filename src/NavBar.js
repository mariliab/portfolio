import React, { useState, useEffect, useCallback } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function NavBar() {
    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
        (e) => {
          const window = e.currentTarget;
          const body = document.body;
          const header = document.querySelector("#navbar");
          console.log("Header height: " + header.offsetHeight);
          if (window.scrollY > header.offsetHeight) {
            if (y > window.scrollY) {
              if (body.classList.contains("scrollDown")) {
                body.classList.remove("scrollDown");
              }
              body.classList.add("scrollUp");
            } else if (y < window.scrollY) {
              if (body.classList.contains("scrollUp")) {
                body.classList.remove("scrollUp");
              }
              body.classList.add("scrollDown");
            }
          }
    
          setY(window.scrollY);
        },
        [y]
      );
    
      useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", (e) => handleNavigation(e));
    
        return () => {
          window.removeEventListener("scroll", (e) => handleNavigation(e));
        };
      }, [handleNavigation]);

    return <header id="navbar"><nav className="NavContent">
        <div>
        <div>
        <Link to="/" style={{color: "black", textDecoration: "none"}}>MB portfolio</Link>
        </div>
        <div>
            <Link to="/" style={{padding: "0 0.5rem", color: "black", textDecoration: "none"}}>Home</Link>
            <a href="http://bognandiphotography.com/" style={{padding: "0 0.5rem", color: "black", textDecoration: "none"}} target="_blank">Photography</a>
            <Link to="/About" style={{padding: "0 0.5rem", color: "black", textDecoration: "none"}}>About</Link>
        </div>
        </div>
    </nav></header>
}

export default NavBar