import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const result = await emailjs.sendForm(
        "service_v6aotiw",
        "template_v9y5ov8",
        e.target,
        "26l0pXTYmCkkapxq9"
      );

      if (result.status === 200) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Error sending email. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main>
      <section className="contact">
        <h1>Contact Us</h1>
        <div className="contact-container">
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Username"
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>

            {status && <p>{status}</p>}
          </div>

          <div className="map-section">
            <h2>Our Location</h2>
            <iframe
              id="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.140206480087!2d75.86969137508127!3d22.68582397941119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce9643647dd%3A0xc1ffcef90e9b429d!2sCrystal%20IT%20Park!5e0!3m2!1sen!2sin!4v1731081221692!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
