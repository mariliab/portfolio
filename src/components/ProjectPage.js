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

    let project;
    if(projects){
        project = projects.find(p => p.id === params.projectid);
    }
    useEffect(() => {
        window.scrollTo(0, 0); 
    });

function getNextProject(){
    let nextProject;
    if (+params.projectid + 1 > projects.length) {
        nextProject = +projects[0].id;
    } else {
        nextProject = +params.projectid + +1;
    }
    return nextProject;
}

return <animated.div style={props}><div className="project-page">
    <div className="project-information-wrapper">
    <div className="project-image" style={{backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}></div>
    <div className="project-information">
    <div className="container">
        <h1 style={{margin: '0'}}>{project.title}</h1>
        {project.date ? <small><p>{project.date}</p></small> : null}
        <div>
            <p className="modal-subheading">{project.description}</p>
            <h3>PROJECT INFORMATION</h3>
            <p>{project.longDescription}</p>
            <h3>TECHNOLOGIES</h3>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {project.technologies.map((technology, index)  => <div key={index} className="technologies-item" style={{padding: '0.5rem 1rem', marginRight: "1rem", marginBottom: "1rem", borderRadius: "9999px", background: "rgb(251, 243, 240)"}}>{technology}</div> )}
            </div>

        {project.links? <div className="project-links"><h3>LINKS</h3>{project.links.map((l, index)  => <a href={l.link}>{l.linktext}</a> )}</div> : null}
    </div>
        </div>
    </div>
    </div>
        <div id="nextProject"><div className="container">
            <Link to={`/projectpage/${getNextProject()}`} style={{
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