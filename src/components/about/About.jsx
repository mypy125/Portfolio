import { motion } from 'framer-motion';
import "./About.css";
import photo from "/images/photo.jpg";
import { FaCode, FaServer, FaTools, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="section">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        HI
      </motion.h3>
      <div className="about-content">
        <motion.img
          src={photo}
          alt="Photo"
          className="about-photo"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            Im a Back-End Developer with four years of specialized education in client-server application development. I have extensive experience in creating scalable, secure, and efficient solutions. Passionate about problem-solving, learning new technologies, and contributing to impactful projects.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <FaCode className="highlight-icon" />
              <span>Scalable Solutions</span>
            </div>
            <div className="highlight-item">
              <FaServer className="highlight-icon" />
              <span>Secure Systems</span>
            </div>
            <div className="highlight-item">
              <FaTools className="highlight-icon" />
              <span>Efficient Development</span>
            </div>
            <div className="highlight-item">
              <FaLightbulb className="highlight-icon" />
              <span>Problem-Solving</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;