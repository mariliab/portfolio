import React from "react"

function Footer() {
    return <div id="contact" style={{background: "#fbf3f0", padding: "5rem 1rem 10rem 1rem", position: "relative"}}><h2 style={{paddingBottom: "1rem", fontSize: "300%", color: "#2f2724"}}>Say Hello!</h2><h3>
        <a style={{ color: "#2f2724", padding: "1rem", textDecoration: "none", borderRadius: "9999px"}} href="mailto:marilia.bognandi@gmail.com" target="_blank">Email</a>
        <a style={{ color: "#2f2724", padding: "1rem", textDecoration: "none", borderRadius: "9999px"}} href="https://www.instagram.com/bognandiphotography/" target="_blank">Instagram</a>
        <a style={{ color: "#2f2724", padding: "1rem", textDecoration: "none", borderRadius: "9999px"}} href="https://www.linkedin.com/in/mariliabognandi/" target="_blank">LinkedIn</a>
        <a style={{ color: "#2f2724", padding: "1rem", textDecoration: "none", borderRadius: "9999px"}} href="https://github.com/mariliab" target="_blank">Github</a>
        </h3><div style={{position: "absolute", fontSize: "90%",bottom: "1rem", left: "0", right: "0"}}><p>© 2020 Marilia Bognandi.</p> <br></br><p style={{fontStyle: "italic"}}>Built with React.js</p></div></div>
}

export default Footer