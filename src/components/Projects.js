import React, {useState} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from '../images/close.svg'

//images
import UhipImage from "../images/Uhip-mockup.jpg"
import UhipSketch from "../images/Uhip-startpage-sketch.jpg"
import OnboardingImage from "../images/Onboarding-mockup.jpg"
import SWBImage from "../images/SWB-mockup.jpg"
import SportlibImage from "../images/Sportlib-mockup.jpg"
import PerpelloImage from "../images/Perpello-world-mockup.jpg"
import JMImage from "../images/JMathome-mockup.jpg"
import SCNImage from "../images/SCNNordic.jpeg"
import { findByLabelText } from "@testing-library/react";

const projects = [
    {   id: "1", 
        title: "Onboarding", 
        categories: "Frontend development / UX / UI Design", 
        description: "A single-page application for HR people to simplify the process of onboarding new employees.",
        longDescription: "When hiring a new employee, there are lots of things that need to be done. From ordering computers to giving access to different systems. This project was intended as a tool for our HR to help with this process. My role has been to do User research, design and iterate the UI, implement the UI, user authentication and authorization, CI/CD, deployment etc.", 
        technologies: [
            "React.js", "GraphQL", "Hasura", "Auth0", "Tailwind css", "Netlify", "CI/CD", "Git", "WebHooks"
        ], 
        image: OnboardingImage, link: "https://morpheus-tribe-onboarding.netlify.app/", 
        linktext: "see website"
    },
    {
        id: "2", 
        title: "JM@home", 
        categories: "Frontend development / UI Design", 
        description: "UI redesign of JM@Home's exisitng platform.", 
        longDescription: "JM@home is a daughter company of JM and in this project I was included in a small development team that managed the web. My role was to suggest and implement new webdesign of the platform.", 
        technologies: [
        "ASP .NET Core", "Html", "Razor", "Less", "Javascript", "Umbraco CMS", "Adobe XD"
        ], 
        image: JMImage, 
        link: "https://jmathome.se/", 
        linktext: "see website"
    },
    {   id: "3", 
        title: "Perpello", 
        categories: "UI Design / Frontend development", 
        description: "Perpello is a company focued on e-commerce and wanted to produce value creating content via an engaging blog.", 
        longDescription: "My role has been to implement the new design of the website aswell as managing content such as updating and producing.", 
        technologies: [
            "ASP .NET Core", "Html", "Razor", "Less", "Litium CMS"
        ], 
        image: PerpelloImage, 
        link: "https://perpello.se/var-varld", 
        linktext: "see company blog"
    },
    {   id: "4", 
        title: "Swedish Warmblood Association", 
        categories: "Frontend development / UX / UI Design", 
        description: "SWB is a cover system for horse breeding and wanted to digitalize their whole business by also updating the ux and making it easier to register new covers and foals.", 
        longDescription: "SWB manages all breeding of the warmblood horse in Sweden via a digital platform. The project was to implement a complete make-over of the platforms architechture as well as design. My role was to suggest UX and UI as well as implementing it.", 
        technologies: [
            "ASP .NET Core", "Html", "Razor", "Less", "C#", "NopCommerce CMS", "Adobe XD"
        ], 
        image: SWBImage
    },
    {
        id: "5", 
        title: "SCN Nordic", 
        categories: "Web development / Project management", 
        description: "Implementation of product web for SCN Nordic, supplier of components and systems for machine builders in the Nordic countries.", 
        longDescription: "SCN wanted to digitalize their business as well as being more accessible for clients by implementing a mobile friendly ui. My role in this project has been to keep regular contact with the board, and well as manage the project team and implement the new product data model based on their requirements.", 
        technologies: [
        "ASP .NET Core", "Html", "Razor", "Less", "C#", "Litium CMS", "Litium Accelerator", "Adobe XD", "Photography"
    ], 
    image: SCNImage,
    link: "https://www.scnnordic.com/",
    linktext: "go to website"
    },
    {   
        id: "6", 
        title: "Uhip sportswear", 
        categories: "UI Design", 
        description: "UI re-design of Uhip e-commerce", 
        longDescription: "Small project to present a re-design of Uhip e-commerce website. My role was to create the sketches.", 
        technologies: [
            "Adobe XD"
        ], 
        image: UhipImage, 
        link: UhipSketch, 
        linktext: "see sketch"
    },
    {   id: "7", 
        title: "Sportlib", 
        categories: "Graphic Design for OTT platform", 
        description: "Sportlib is a video streaming platform for sports enthusiasts and needed image thumbnails for their videos.", 
        longDescription: "My role included various tasks. From developing the streaming platform, ensuring all requirements were met for the app to be published on App store / Google play as well as creating content, mostly graphic thumbnails for videos.",
        technologies: [
            "Photoshop", "OZ streaming platform"
        ], 
        image: SportlibImage
    }]

Modal.setAppElement('body');

function ProjectItem({project}) {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    return <div class="project-item" style={{alignItems: "center", justifyContent: "center"}}>
                <div className="project-image" style={{backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                </div>
            <div className="project-info">
                    <h3 style={{fontSize: "200%", marginBottom: "0"}}>{project.title}</h3>
                    <h4 style={{textTransform: "uppercase", marginTop: "1rem"}}>{project.categories}</h4>
                    <p>{project.description}</p>
                    <div style={{marginTop: "3rem", height: "3rem"}}>
                        <a className="link-button-primary"
                            style={{
                                color: "#2f2724", 
                                boxShadow: "5px 5px 0 0 #edc7b6", 
                                border: "1px solid", 
                                borderRadius: "9999px", 
                                padding: "1rem 2rem", 
                                fontWeight: "bold", 
                                textDecoration: "none"
                            }} 
                            onClick={() => setModalIsOpen(true)}>Read more</a>
                    </div>
                </div>
                <Modal id="projectItemModal" style={{
                    overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.33)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "1000"
                },
                width: "100%",
                height: "100%",
                background: 'lightpink'
                }}
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}>
                <div style={{
                width: "100%",
                height: "100%",
                background: 'white',
                }}>
                    <div className="modal-heading" style={{
                    display: "flex", 
                    justifyContent: "space-between"
                    }}>
                        <h1 style={{margin: '0'}}>{project.title}</h1>
                        <button style={{
                            background: 'none',
                            border: 'none'
                        }} onClick={() => setModalIsOpen(false)}><CloseIcon className="close-button" style={{width: '25px'}}/></button>
                    </div>
                    <div className="modal-body">
                        <p className="modal-subheading">{project.description}</p>
                        <h3>PROJECT INFORMATION</h3>
                    <p>{project.longDescription}</p>
                        <h3>TECHNOLOGIES</h3>
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            {project.technologies.map((technology)  => <div className="technologies-item" style={{padding: '0.5rem 1rem', marginRight: "1rem", marginBottom: "1rem", borderRadius: "9999px", background: "rgb(251, 243, 240)"}}>{technology}</div> )}
                        </div>
                        {project.link ? <div><h3>LINK</h3><a href={project.link}>{project.linktext}</a></div> : null}
                    </div>
                </div>
            </Modal>
            </div>
}

function Projects() {
return <div id="projects" style={{background: "#f7e8e1", paddingTop: "5rem"}}>
            {projects.map((project)  => <ProjectItem project={project}/> )}
        </div>
}

export default Projects