import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home.jsx"
import ServicesPage from "./components/service/ServicePage.jsx"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
   
  )
}

export default App
