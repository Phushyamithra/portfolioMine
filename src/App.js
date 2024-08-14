import './styles/App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Favicon from './components/Favicon';

function App() {
  return (
    <div className="app"> {/* Ensure this matches the CSS class */}
      <Favicon />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
