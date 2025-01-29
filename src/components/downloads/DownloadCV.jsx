import { FaDownload } from "react-icons/fa";

const DownloadCV = () => {
    return (
      <section id="download-cv" className="section">
        <a 
          href="src/assets/images/Gor Mkhitaryan.pdf" 
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
