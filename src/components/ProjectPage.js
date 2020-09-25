import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link,
  } from "react-router-dom";
  import {useSpring, animated} from 'react-spring';

function ProjectPage({projects}) {
    const params = useParams();
    const props = useSpring({opacity: 1, marginTop: '0', from: {opacity: 0, marginTop: '-10rem'}})

    const nextProject = +params.projectid + +1;
    let project;
    if(projects){
        project = projects.find(p => p.id === params.projectid);
    }
    useEffect(() => {
        window.scrollTo(0, 0); 
      });

return <animated.div style={props}><div className="project-page">
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
        <div id="nextProject"><div className="container">
            <Link to={`/projectpage/${nextProject}`} style={{
                                color: "#2f2724", 
                                boxShadow: "5px 5px 0 0 #edc7b6", 
                                border: "1px solid", 
                                borderRadius: "9999px", 
                                padding: "1rem 2rem", 
                                fontWeight: "bold", 
                                textDecoration: "none"
                            }} >Next project</Link>
            </div>
        </div>
</div></animated.div>
}

export default ProjectPage