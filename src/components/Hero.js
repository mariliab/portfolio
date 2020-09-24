import React from "react";
import {useSpring, animated} from 'react-spring'

function Hero() {
    const props = useSpring({opacity: 1, marginTop: '0', from: {opacity: 0, marginTop: '-10rem'}})
    return <animated.div style={props}>
           <div id="hero" style={{minHeight: "50vh", paddingTop: "5rem", paddingBottom: "5rem", background: "#fbf3f0", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div className="container">
                    <h4 style={{marginBottom: "0", fontSize: "200%", color: "#2f2724"}}>PORTFOLIO</h4>    
                            <h1 style={{fontSize: "500%", margin: "0", color: "#2f2724"}}>Marilia Bognandi</h1>
                            <h2 style={{fontSize: "200%", marginBottom: "3rem", color: "#2f2724"}}>Frontend developer / UX / UI designer / Photographer</h2>
                            <a href="#contact" style={{border: "2px solid #2f2724", color: "#2f2724", textDecoration: "none", fontWeight: "bold", background: "white", padding: "1rem 2rem", height: "3rem", boxShadow: "5px 5px 0 0 #2f2724", borderRadius: "9999px"}}>Get in contact</a>
                    </div>
                </div>
            </animated.div>
}

export default Hero