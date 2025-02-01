import { FaDownload } from "react-icons/fa";
import "./DownloadCV.css";
import cv from "/images/GorMkhitaryan.pdf";

const DownloadCV = () => {
    return (
      <section id="download-cv" className="section">
        <a 
          href={cv}
          download="Gor_Mkhitaryan_CV"  
          className="download-btn"
        >
          <FaDownload className="download-icon" />
          Download_CV
        </a>
      </section>
    );
};

export default DownloadCV;