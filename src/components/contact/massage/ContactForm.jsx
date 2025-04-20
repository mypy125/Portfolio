import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields!");
      return;
    }

    setStatus("Sending...");

    try {
      const templateParams = {
        name: formData.name,     
        email: formData.email,     
        message: formData.message, 
        time: new Date().toLocaleString() 
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setStatus("Message sent successfully! 🎉");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setStatus(""), 5000);
    } catch (err) {
      console.error("Sending error ", err);
      setStatus("Sending error. Try again later.");
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          />
        </div>
        <button type="submit" disabled={status === "Sending..."}>
          {status === "Sending..." ? "Sending..." : "Send"}
        </button>
      </form>
      {status && (
        <div className={`status-message ${
          status.includes("successfully") ? "success" : "error"
        }`}>
          {status}
        </div>
      )}
    </div>
  );
};

export default ContactForm;