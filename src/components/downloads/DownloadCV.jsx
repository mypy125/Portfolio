import { FaDownload } from "react-icons/fa";
import cv from "../assets/images/Gor_Mkhitatryan_CV";

const DownloadCV = () => {
    return (
      <section id="download-cv" className="section">
        <a 
          href={cv}
          download="Gor_Mkhitatryan_CV"  
          className="download-btn"
        >
          <FaDownload className="download-icon" />
          Download_CV
        </a>
      </section>
    );
};

export default DownloadCV;
