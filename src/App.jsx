import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home.jsx"
import ServicesPage from "./components/service/ServicePage.jsx"
import ForDevelopers from "./components/quiz/ForDevelopers.jsx"
import ForRecruiters from "./components/quiz/ForRecruiters.jsx"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/dev-quiz" element={<ForDevelopers />} />
      <Route path="/rec-quiz" element={<ForRecruiters />} />
    </Routes>
   
  )
}

export default App
