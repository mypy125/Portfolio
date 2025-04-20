import { motion } from "framer-motion";
import "./ServiceDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom/dist";

const ServiceDetails = ({ service }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <button className="back-button" onClick={handleGoBack}>
          <FaArrowLeft /> Back to Home
      </button>
      <section id="service-details" className="service-details-section dark-section">
         <button className="back-button" onClick={handleGoBack}>
          <FaArrowLeft /> Back to Home
        </button>
        
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="details-title"
        >
          {service.title}
        </motion.h3>
    
        <div className="details-images">
          {service.section.images.map((img, i) => (
            <img key={i} src={img} alt={`${service.title} ${i}`} className="detail-image" />
          ))}
        </div>
        
        <motion.div
          className="details-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>
        {service.section.content.split("\n").map((line, idx) => (
            <p key={idx} className="details-line">{line.trim()}</p>
          ))}
      </section>
    </>
    
  );
};

export default ServiceDetails;
