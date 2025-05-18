import { FaDownload } from "react-icons/fa";
import "./DownloadCV.css";
import { useState } from "react";
import cvEn from "/images/GorMkhitaryan_en.pdf";
import cvRu from "/images/GorMkhitaryan_ru.pdf";
import cvArm from "/images/GorMkhitaryan_arm.pdf";

const DownloadCV = () => {
  const [lang, setLang] = useState("en");

  const cvFiles = {
    en: cvEn,
    ru: cvRu,
    arm: cvArm,
  };

  return (
    <section id="download-cv" className="section">
      <h2>Download My CV</h2>

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center' }}>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="lang-select"
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="arm">Հայերեն</option>
        </select>
        <a 
          href={cvFiles[lang]}
          download={`Gor_Mkhitaryan_CV_${lang}`}
          className="download-btn"
        >
          <FaDownload className="download-icon" />
          Download_CV
        </a>
      </div>
    </section>
  );
};

export default DownloadCV;