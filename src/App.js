import logo from './logo.svg';
import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useLocation,
  Link
} from "react-router-dom";
import './App.css';
import Modal from 'react-modal';
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import About from "./components/About"
import Home from "./components/Home"
import ProjectPage from "./components/ProjectPage"
import Navbar from "./NavBar"

//images
import UhipImage from "./images/Uhip-mockup.jpg"
import UhipImageBefore from "./images/Uhip_startpage-before.jpg"
import UhipSketch from "./images/Uhip-startpage-sketch.jpg"
import OnboardingImage from "./images/Onboarding-mockup.jpg"
import SWBImage from "./images/SWB-mockup.jpg"
import SportlibImage from "./images/Sportlib-mockup.jpg"
import PerpelloImage from "./images/Perpello-world-mockup.jpg"
import JMImage from "./images/JMathome-mockup.jpg"
import SCNImage from "./images/SCNNordic.jpeg"

const projects = [
  {   id: "1", 
      title: "Onboarding",
      date: "April 2020 - ongoing", 
      categories: "Frontend development / UX / UI Design", 
      description: "A single-page application for HR people to simplify the process of onboarding new employees.",
      longDescription: "When hiring a new employee, there are lots of things that need to be done. From ordering computers to giving access to different systems. This project was intended as a tool for our HR to help with this process. My role has been to do User research, design and iterate the UI, implement the UI, user authentication and authorization, CI/CD, deployment etc.", 
      technologies: [
          "React.js", "GraphQL", "Hasura", "Auth0", "Tailwind css", "Netlify", "CI/CD", "Git", "WebHooks"
      ], 
      image: OnboardingImage,
      links: [
        { link: "https://morpheus-tribe-onboarding.netlify.app/", 
          linktext: "see website"}
      ] 
  },
  {
      id: "2", 
      title: "JM@home",
      date: "August 2018 - December 2019", 
      categories: "Frontend development / UI design", 
      description: "Maintenance development of JM@Home's exisitng platform.", 
      longDescription: "JM@home is a daughter company of JM and in this project I was included in a small development team that managed the web. My role was to suggest and implement new webdesign of the platform and staircase screens.", 
      technologies: [
      "ASP .NET Core", "Html", "Razor", "Less", "Javascript", "Umbraco CMS", "Adobe XD"
      ], 
      image: JMImage,
      links: [{ 
          link: "https://jmathome.se/", 
          linktext: "see website" 
        }]  
  },
  {   
    id: "3", 
    title: "Uhip sportswear", 
    date: "March 2020", 
    categories: "UI Design", 
    description: "UI re-design of Uhip e-commerce", 
    longDescription: "Small project to present a re-design of Uhip e-commerce website. My role was to create the sketches. We didn't win the implementation of the project, but I saw that they recently implemented a new design on their website. In my opinion, it's inspired by my sketches.", 
    technologies: [
        "Adobe XD"
    ], 
    image: UhipImage,
    links: [{ 
      link: UhipImageBefore, 
      linktext: "See before image"
    },
    { 
      link: UhipSketch, 
      linktext: "See new UI sketch"
    }]  
},
  {   id: "4", 
      title: "Swedish Warmblood Association", 
      date: "October 2019 - April 2020", 
      categories: "Frontend development / UX / UI Design", 
      description: "SWB is a cover system for horse breeding and wanted to digitalize their whole business by also updating the ux and making it easier to register new covers and foals.", 
      longDescription: "SWB manages all breeding of the warmblood horse in Sweden via a digital platform. The project was to implement a complete make-over of the platforms architechture as well as design. For this we used NopCommerce e-commerce platform with a suitable theme. My role was to suggest UX and UI as well as implementing it.", 
      technologies: [
          "ASP .NET Core", "Html", "Razor", "Less", "C#", "NopCommerce CMS", "Adobe XD"
      ], 
      image: SWBImage
  },
  {
      id: "5", 
      title: "SCN Nordic", 
      date: "May 2019 - September 2019", 
      categories: "Web development / Project management", 
      description: "Implementation of product web for SCN Nordic, supplier of components and systems for machine builders in the Nordic countries.", 
      longDescription: "SCN wanted to digitalize their business and showcasing their products on a product web as well as having a mobile-friendly ui. In this project we used the e-commerce platform Litium with their out-of-the box storefront Litium Accelerator. My role has been to keep regular contact with the board and all project members, and well as manage the development team and customize the ui and implement the new product data model based on their requirements.", 
      technologies: [
      "ASP .NET Core", "Html", "Razor", "Less", "C#", "Litium CMS", "Litium Accelerator", "Adobe XD", "Photography"
  ], 
  image: SCNImage,
  links: [{ 
    link: "https://www.scnnordic.com/",
    linktext: "go to website"
  }] 
  },
  {   id: "6", 
      title: "Perpello",
      date: "January 2018 - April 2020",  
      categories: "Frontend development / UI design", 
      description: "Perpello is a company focued on e-commerce and wanted to produce value creating content via an engaging blog.", 
      longDescription: "My role has been to implement the new design of the website aswell as managing content such as updating and producing.", 
      technologies: [
          "ASP .NET Core", "Html", "Razor", "Less", "Litium CMS"
      ], 
      image: PerpelloImage,
      links: [{ 
        link: "https://perpello.se/var-varld", 
        linktext: "see company blog"
      }]   
  }]

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

function App() {
  return (
    <Router>
      <ScrollToTop />
    <div className="App">
      <Navbar/>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projectpage/:projectid">
          <ProjectPage projects={projects} />
        </Route>
        <Route path="/">
          <Home projects={projects}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
