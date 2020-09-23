import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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

Modal.setAppElement('body');

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projectpage/:projectid">
          <ProjectPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
