import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link,
  } from "react-router-dom";
  import {useSpring, animated} from 'react-spring';
  import arrowRight from "../images/arrow-right.svg"

function ProjectPage({projects}) {
    const params = useParams();

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

const animationProps = useSpring({opacity: 1, marginLeft: '0', from: {opacity: 0, marginLeft: '-100%'}})

return <animated.div style={animationProps}><div className="project-page">
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
            <div className="primary-button-wrapper">
                <Link to={`/projectpage/${getNextProject()}`}>
                        Next project 
                        <img src={arrowRight} alt="NExt project"></img>
                </Link>
            </div>
            </div>
        </div>
</div></animated.div>
}

export default ProjectPage