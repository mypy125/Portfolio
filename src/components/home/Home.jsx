import About from "../about/About.jsx";
import Contact from "../contact/Contact.jsx";
import DownloadCV from "../downloads/DownloadCV.jsx";
import Header from "../header/Header.jsx";
import Projects from "../projects/Projects.jsx";
import Skills from "../skills/Skills.jsx";

const Home = () => {
    return (
      <section id="home" className="section">
        <Header/>
        <About/>
        <Skills />
        <Projects />
        <DownloadCV />
        <Contact />
      </section>
    );
  };
  
  export default Home;