import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; 

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-icons">
        <a href="mailto:gor1990.mkhitatryan@gmail.com" target="_blank">
          <FaEnvelope className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/gor-mk" target="_blank">
          <FaLinkedin className="contact-icon" />
        </a>
        <a href="https://github.com/mypy125" target="_blank">
          <FaGithub className="contact-icon" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
