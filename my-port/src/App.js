import './App.css';
import { useState } from "react"
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects'

//use state for on hover of projects

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      </header>
      <main>
        <div className="about-me">
      <About />
      </div>
      <div className="projects" id="projects">
      <Projects />
      </div>
      </main>
      <div className="contact" id="contact">
      <Contact />
      </div>
    </div>
  );
}

export default App;
