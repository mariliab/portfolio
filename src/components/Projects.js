import React from "react"
import UhipImage from "../images/Uhip-mockup.jpg"
import UhipSketch from "../images/Uhip-startpage-sketch.jpg"
import OnboardingImage from "../images/onboarding-iphone-mockup-env.jpg"
import SWBImage from "../images/SWB-mockup.jpg"
import SportlibImage from "../images/Sportlib-mockup.jpg"
import PerpelloImage from "../images/Perpello-world-mockup.jpg"

function Projects() {
    const projects = [
        {title: "Onboarding", categories: "UX / UI Design / Frontend development", description: "A web application for HR people to simplify the process of onboarding new employees.", image: OnboardingImage, link: "https://morpheus-tribe-onboarding.netlify.app/", linktext: "see website"},
        {title: "Uhip sportswear", categories: "UI Design for E-commerce", description: "UI re-design of Uhip e-commerce", image: UhipImage, link: UhipSketch, linktext: "see sketch"},
        {title: "Perpello - company blog and website", categories: "UI Design / Frontend development", description: "Perpello is a company focued on e-commerce and wanted to produce value creating content via an engaging blog.", image: PerpelloImage, link: "https://perpello.se/var-varld", linktext: "see company blog"},
        {title: "Swedish Warmblood Association", categories: "UX / UI Design / Frontend development", description: "SWB is a cover system for horse breeding and wanted to digitalize their whole business by also updating the ux and making it easier to register new covers and foals.", image: SWBImage},
        {title: "Sportlib", categories: "Graphic Design for OTT platform", description: "Sportlib is a video streaming platform for sports enthusiasts and needed image thumbnails for their videos.", image: SportlibImage}]

return <div id="projects" style={{background: "#2f2724", padding: "5rem 1rem"}}><h2 style={{margin: "0", padding: "1rem", fontSize: "300%", color: "white"}}>WORK</h2> <div style={{display: "flex", flexWrap: "wrap"}}> {projects.map((project)  => (<div class="project-item" style={{width: "100%", margin: "1rem"}}>
            <div style={{width: "100%", height: "inherit", backgroundImage: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", backgroundRepeat: "no-repeat"}}>
                <div style={{backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))", width: "100%", position: "absolute", bottom: "0", color: "white", paddingBottom: "2rem"}}>
    <h3 style={{fontSize: "200%", marginBottom: "0"}}>{project.title}</h3><h4 style={{textTransform: "uppercase", marginTop: "1rem"}}>{project.categories}</h4>{project.link? <div style={{marginTop: "3rem", height: "3rem"}}><a style={{color: "white", boxShadow: "5px 5px 0 0 #edc7b6", border: "1px solid", borderRadius: "9999px", padding: "1rem 2rem", fontWeight: "bold", textDecoration: "none"}} href={project.link} target="_blank">{project.linktext}</a></div> : null}<p style={{paddingLeft: "1rem", paddingRight: "1rem"}}>{project.description}</p></div></div></div>)) }</div></div>
}

export default Projects