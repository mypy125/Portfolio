import { useState } from "react";
import { motion } from "framer-motion";
import "./SurveyForm.css"; 
import {
  stackOptions,
  frameworkMap,
  projectValues,
  javaLevels,
  workPreferences,
  devGrowth,
} from "../../data/quizData.js";
import { SurveyService } from "../../service/developerService.js";

export default function ForDevelopers() {
  const [formData, setFormData] = useState({
    stack: "",
    backendFramework: "",
    projectPriority: "",
    javaLevel: "",
    workStyle: "",
    learning: "",
    growthStyle: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const totalFields = 7;
  const filledFields = Object.values(formData).filter(Boolean).length;
  const progress = Math.round((filledFields / totalFields) * 100);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (filledFields < totalFields) {
      setError("Please fill all fields");
      return;
    }
  
    setLoading(true);
    
    const result = await SurveyService.saveDeveloperSurvey(formData);
    
    setLoading(false);
  
    if (result.success) {
      setSuccess(true);
      setFormData({
        stack: "",
        backendFramework: "",
        projectPriority: "",
        javaLevel: "",
        workStyle: "",
        learning: "",
        growthStyle: ""
      });
    } else {
      setError(result.error);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const fields = [
    {
      label: (
        <label htmlFor="stack" className="form-label">
          1. What stack do you use most often?
        </label>
      ),
      content: (
        <select
          name="stack"
          value={formData.stack}
          onChange={(e) => {
            const newStack = e.target.value;
            setFormData((prev) => ({
              ...prev,
              stack: newStack,
              backendFramework: "",
            }));
          }}
          className="form-input"
        >
        <option value="">🧩Select a stack</option>
        {stackOptions.map((stack) => (
        <option key={stack} value={stack}>
          {stack}
        </option>
      ))}
    </select>
      ),
    },
    {
      label: "2. What is your favorite backend framework?",
      content: (
        <div className="radio-group">
          {(frameworkMap[formData.stack] || []).map(({ label, value, icon }) => (
            <label
              key={value}
              className={`radio-label ${formData.backendFramework === value ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="backendFramework"
                value={value}
                checked={formData.backendFramework === value}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="icon">{icon}</span> {label}
              {formData.backendFramework === value && <span className="selected-icon">✅</span>}
            </label>
          ))}
        </div>
      ),
    },
    {
      label: "3. What is more important to you in the project?",
      content: (
        <div className="radio-group">
          {projectValues.map(({ label, value, icon }) => (
            <label
              key={value}
              className={`radio-label ${formData.projectPriority === value ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="projectPriority"
                value={value}
                checked={formData.projectPriority === value}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="icon">{icon}</span> {label}
              {formData.projectPriority === value && <span className="selected-icon">✅</span>}
            </label>
          ))}
        </div>
      ),
    },
    {
      label: "4. What is your level of experience?",
      content: (
        <div className="radio-group">
          {javaLevels.map(({ label, value, icon }) => (
            <label
              key={value}
              className={`radio-label ${formData.javaLevel === value ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="javaLevel"
                value={value}
                checked={formData.javaLevel === value}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="icon">{icon}</span> {label}
              {formData.javaLevel === value && <span className="selected-icon">✅</span>}
            </label>
          ))}
        </div>
      ),
    },
    {
      label: "5. Remote work, hybrid or office?",
      content: (
        <div className="radio-group">
          {workPreferences.map(({ label, value, icon }) => (
            <label
              key={value}
              className={`radio-label ${formData.workStyle === value ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="workStyle"
                value={value}
                checked={formData.workStyle === value}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="icon">{icon}</span> {label}
              {formData.workStyle === value && <span className="selected-icon">✅</span>}
            </label>
          ))}
        </div>
      ),
    },
    {
      label: "6. What are you studying now?",
      content: (
        <input
          type="text"
          name="learning"
          value={formData.learning}
          onChange={handleChange}
          className="form-input"
          placeholder="Languages, libraries, DevOps, AI..."
        />
      ),
    },
    {
      label: "7. How do you prefer to develop?",
      content: (
        <div className="radio-group">
          {devGrowth.map(({ label, value, icon }) => (
            <label
              key={value}
              className={`radio-label ${formData.growthStyle === value ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="growthStyle"
                value={value}
                checked={formData.growthStyle === value}
                onChange={handleChange}
                className="radio-input"
              />
              <span className="icon">{icon}</span> {label}
              {formData.growthStyle === value && <span className="selected-icon">✅</span>}
            </label>
          ))}
        </div>
      ),
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="dev-form">
      <h1 className="form-title">🧠 Survey for developers</h1>

      <div className="progress-bar-wrapper">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <span className="progress-text">{progress}% filled</span>
      </div>

      {fields.map((field, i) => (
        <motion.div
          className="form-group"
          key={i}
          custom={i}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <label className="form-label">{field.label}</label>
          {field.content}
        </motion.div>
      ))}
       {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {success && (
        <div className="success-message">
          Thank you! We hope you find the perfect developer 🚀
        </div>
      )}
      <button type="submit"
       disabled={loading}
        className="submit-button">
          {loading ? (
          <span className="button-loading">
            <span className="spinner"></span>
            Sending...
          </span>
        ) : (
          "Send"
        )}
        </button>
    </form>
  );
}
