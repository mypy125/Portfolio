import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; 

const Contact = () => {
    return (
      <section id="contact" className="section">
        <h3>Contact</h3>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>Email: <a href="mailto:gor1990.mkhitatryan@gmail.com">gor1990.mkhitatryan@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <p>LinkedIn: <a href="https://www.linkedin.com/in/gor-mk" target="_blank">linkedin.com/in/gor-mk</a></p>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <p>GitHub: <a href="https://github.com/mypy125" target="_blank">github.com/mypy125</a></p>
        </div>
        
      </section>
    );
};

export default Contact;
