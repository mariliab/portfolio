import React from "react"
import Hero from "./Hero"
import Projects from "./Projects"

function Home({projects}) {
    return <div><Hero/><Projects projects={projects}/></div>
}

export default Home