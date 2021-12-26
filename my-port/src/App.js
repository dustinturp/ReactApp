import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects'

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
      <div className="projects">
      <Projects />
      </div>
      </main>
      <div className="contact">
      <Contact />
      </div>
      <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/build/ol.js"></script>
    </div>
  );
}

export default App;
