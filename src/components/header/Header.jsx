import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaLaptopCode } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <nav className="nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  <FaHome className="nav-icon" />
                  <span className="nav-text">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <FaUser className="nav-icon" />
                  <span className="nav-text">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  <FaLaptopCode onClick={navigate("/services")} className="nav-icon" />
                  <span className="nav-text">Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  <FaTools className="nav-icon" />
                  <span className="nav-text">Skills</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link"> 
                  <FaProjectDiagram className="nav-icon" />
                  <span className="nav-text">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  <FaEnvelope className="nav-icon" />
                  <span className="nav-text">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
