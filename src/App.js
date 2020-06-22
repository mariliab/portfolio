import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
