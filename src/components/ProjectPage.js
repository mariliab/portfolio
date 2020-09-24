import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link,
  } from "react-router-dom";

function ProjectPage({projects}) {
    const params = useParams();
    let project;
    if(projects){
        project = projects.find(p => p.id === params.projectid);
    }
    useEffect(() => {
        window.scrollTo(0, 0); 
      });

return <div className="project-page">
        <div className="container">
        <h1 style={{margin: '0'}}>{project.title}</h1>
        <div>
            <p className="modal-subheading">{project.description}</p>
            <h3>PROJECT INFORMATION</h3>
            <p>{project.longDescription}</p>
            <h3>TECHNOLOGIES</h3>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {project.technologies.map((technology, index)  => <div key={index} className="technologies-item" style={{padding: '0.5rem 1rem', marginRight: "1rem", marginBottom: "1rem", borderRadius: "9999px", background: "rgb(251, 243, 240)"}}>{technology}</div> )}
            </div>
        {project.link ? <div><h3>LINK</h3><a href={project.link}>{project.linktext}</a></div> : null}
    </div>
        </div>
</div>
}

export default ProjectPage