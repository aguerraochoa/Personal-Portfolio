import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import About from './About'
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <div className="container">
        <NavBar />
        <div className="main">
          <Home />
          <About />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
