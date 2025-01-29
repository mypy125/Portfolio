import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import DownloadCV from "./components/downloads/DownloadCV"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"

function App() {

  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <DownloadCV/>
      <Contact />
    </div>
  )
}

export default App
