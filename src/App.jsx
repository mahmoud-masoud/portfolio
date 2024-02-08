import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ProjectsWrapper from './Components/Projects/ProjectsWrapper';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      <Header />
      <ProjectsWrapper />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
