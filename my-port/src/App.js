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
      <About />
      <Projects />
      </main>
      <Contact />

    </div>
  );
}

export default App;
