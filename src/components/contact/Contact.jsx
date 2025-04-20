import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const contacts = [
  {
    id: 1,
    icon: <FaEnvelope />,
    link: 'mailto:gor1990.mkhitatryan@gmail.com',
    color: '#D44638', 
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/gor-mk',
    color: '#0077B5',
  },
  {
    id: 3,
    icon: <FaGithub />,
    link: 'https://github.com/mypy125',
    color: '#333', 
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-icons">
        {contacts.map((contact) => (
          <motion.a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: contact.color }}
            transition={{ duration: 0.3 }}
            className="contact-icon"
          >
            {contact.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
