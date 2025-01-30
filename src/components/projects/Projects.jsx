import { FaProjectDiagram } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h3><FaProjectDiagram /> Projects</h3>
      <div className="project-item">
        <h4>Restaurant Ordering-frontend</h4>
        <p>Built with Spring Boot & React. Integrated payment systems (Stripe, Idram, Easypay).</p>
        <a href="https://github.com/mypy125/Restaurant.am-frontend" target="_blank">View_Project</a>
      </div>
      <div className="project-item">
        <h4>ecommerce-multivendor-backend</h4>
        <p>This project is an e-commerce platform with functionality divided into three main roles: users (customers), sellers, and administrators.</p>
        <a href="https://github.com/mypy125/ecommerce-multivendor-backend" target="_blank">View_Project</a>
      </div>
    </section>
  );
};


export default Projects;