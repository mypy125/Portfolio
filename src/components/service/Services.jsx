import { useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";
import { services } from "../../data/servicesData";
import { FaCode, FaServer, FaMobile, FaDatabase, FaCloud } from "react-icons/fa";
import ServiceDetails from "./details/ServiceDetails.jsx"; 
import ContactForm from "../contact/massage/ContactForm.jsx";

const icons = {
  FaCode: <FaCode />,
  FaServer: <FaServer />,
  FaMobile: <FaMobile />,
  FaDatabase: <FaDatabase />,
  FaCloud: <FaCloud />
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    const section = document.getElementById("service-details");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h3>

      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            onClick={() => handleCardClick(service)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="service-content">
              <div className="service-icon">{icons[service.icon]}</div>
              <div className="service-text">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
            <img src={service.image} alt={service.title} className="service-image" />
          </motion.div>
        ))}
      </div>

      {selectedService && <ServiceDetails service={selectedService} />}

      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
    </section>
  );
};

export default Services;
