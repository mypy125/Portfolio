import { motion } from "framer-motion";
import { FaProjectDiagram } from "react-icons/fa";
import "./Projects.css";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
 
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="section">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaProjectDiagram /> Projects
      </motion.h3>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-item"
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
