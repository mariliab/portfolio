import React from "react"
import profilePicture from "../images/marilia.jpeg";
import {useSpring, animated} from 'react-spring';

function About() {
    const animationProps = useSpring({opacity: 1, marginTop: '0', from: {opacity: 0, marginTop: '-10rem'}})
    return <animated.div style={animationProps}><div id="about-page" style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
            <div className="container">
                <h1>About</h1>
                <div className="about-info">
                    <div className="profile-picture">
                        <img src={profilePicture} alt="Marilia Bognandi"/>
                    </div>
                <p>My name is <span className="bold">Marilia Bognandi</span> and im a frontend developer / ux-designer going fullstack developer. I love working with new ideas and to think outside the box.<br></br><br></br> I love learning new things, whether it's frontend, ux, ui, graphic design, photography, marketing, handling clients, business strategy, <span className="bold">I want to know it all!</span><br></br><br></br> Because my dream is to build a user friendly and scalable startup, and I'm on a mission to gather any knowledge that will get me there. </p>
                </div>
                </div></div>
                </animated.div>
}

export default About