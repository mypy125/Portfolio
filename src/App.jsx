import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home.jsx"
import ServicesPage from "./components/service/ServicePage.jsx"
// import { Router } from "react-router-dom/dist/index.js"

function App() {

  return (
    // <Router basename="/Portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    // </Router>
  )
}

export default App
