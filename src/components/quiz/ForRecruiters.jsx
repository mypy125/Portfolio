import { useState } from "react";
import { motion } from "framer-motion";
import "./SurveyForm.css"; 
import {
    hiringFocusOptions,
    candidateTraitsOptions
} from "../../data/quizData.js";


export default function ForRecruiters() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    hiringFocus: "",
    traits: [],
    dealbreaker: "",
    favoriteStack: "",
    messageToDevs: "",
  });

  const totalFields = 7;
  const filledFields = Object.values(formData).filter(
    (v) => (Array.isArray(v) ? v.length > 0 : v)
  ).length;
  const progress = Math.round((filledFields / totalFields) * 100);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      if (type === "checkbox") {
        const updated = checked
          ? [...(prev[name] || []), value]
          : (prev[name] || []).filter((item) => item !== value);
        return { ...prev, [name]: updated };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recruiter form submitted:", formData);
    alert("Thank you! We hope you find the perfect developer 🙌");
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <form onSubmit={handleSubmit} className="dev-form">
      <h1 className="form-title">🎯 Recruiter, tell us about your heroes!</h1>

      <div className="progress-bar-wrapper">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        <span className="progress-text">{progress}% filled</span>
      </div>

      {[
        {
          label: "1. What is your name?",
          content: (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          ),
        },
        {
          label: "2. What is the name of your company?",
          content: (
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
            />
          ),
        },
        {
          label: "3. Who are you looking for?",
          content: (
            <div className="radio-group">
              {hiringFocusOptions.map(({ label, value }) => (
                <label key={value} className={`radio-label ${formData.hiringFocus === value ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="hiringFocus"
                    value={value}
                    checked={formData.hiringFocus === value}
                    onChange={handleChange}
                    className="radio-input"
                  />
                  {label}
                  {formData.hiringFocus === value && <span className="selected-icon">✅</span>}
                </label>
              ))}
            </div>
          ),
        },
        {
          label: "4. What qualities are important to you?",
          content: (
            <div className="checkbox-group">
              {candidateTraitsOptions.map(({ label, value }) => (
                <label key={value} className={`checkbox-label ${formData.traits.includes(value) ? "checked" : ""}`}>
                  <input
                    type="checkbox"
                    name="traits"
                    value={value}
                    checked={formData.traits.includes(value)}
                    onChange={handleChange}
                    className="checkbox-input"
                  />
                  <span className="checkbox-custom"></span>
                  {label}
                </label>
              ))}
            </div>
          ),
        },
        {
          label: "5. What is a red flag for you when hiring?",
          content: (
            <input
              type="text"
              name="dealbreaker"
              value={formData.dealbreaker}
              onChange={handleChange}
              className="form-input"
            />
          ),
        },
        {
          label: "6. What technologies do you like to see on a resume?",
          content: (
            <input
              type="text"
              name="favoriteStack"
              value={formData.favoriteStack}
              onChange={handleChange}
              className="form-input"
            />
          ),
        },
        {
          label: "7. What do you want to say to the developers?",
          content: (
            <textarea
              name="messageToDevs"
              value={formData.messageToDevs}
              onChange={handleChange}
              className="form-textarea"
              rows={4}
            />
          ),
        },
      ].map((field, i) => (
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

      <button type="submit" className="submit-button">Send</button>
    </form>
  );
}
