import React from "react"

function Hero() {
return <div style={{minHeight: "100vh", backgroundImage: "linear-gradient(to bottom, lightpink, #edc7b6", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div>
            <h4 style={{marginBottom: "0", fontSize: "200%"}}>PORTFOLIO</h4>    
            <h1 style={{fontSize: "500%", margin: "0"}}>Marilia Bognandi</h1>
            <h2 style={{fontSize: "200%", marginBottom: "3rem"}}>Frontend developer / UX / UI designer / Photographer</h2>
            <a href="#projects" style={{border: "2px solid black", color: "black", textDecoration: "none", fontWeight: "bold", background: "white", padding: "1rem 2rem", height: "3rem", boxShadow: "5px 5px 0 0 black", borderRadius: "9999px"}}>See work</a>
            </div>
    </div>
}

export default Hero