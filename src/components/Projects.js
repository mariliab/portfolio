import React, {useState} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

function ProjectItem({project}) {

    return <div className="project-item" style={{alignItems: "center", justifyContent: "center"}}>
                <div className="project-image" style={{backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                </div>
            <div className="project-info">
                    <h3 style={{fontSize: "200%", marginBottom: "0"}}>{project.title}</h3>
                    <h4 style={{textTransform: "uppercase", marginTop: "1rem"}}>{project.categories}</h4>
                    <p>{project.description}</p>
                    <div style={{marginTop: "3rem", height: "3rem"}}>
                    <div className="primary-button-wrapper">
                    <Link to={`/projectpage/${project.id}`} id={project.id} project={project}>Read more</Link>
                    </div>
                    </div>
                </div>
            </div>
}

function Projects({projects}) {
return <div id="projects" style={{background: "#f7e8e1", paddingTop: "5rem"}}>
            {projects.map((project)  => <ProjectItem project={project} key={project.id}/> )}
        </div>
}

export default Projects