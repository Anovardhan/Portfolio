import React, { useState } from "react";
import { FaHandPeace } from "react-icons/fa";

const ContactCardForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/contactmessage/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Response:", data);

    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(true);
  };

  return submitted ? (
    <div
      className="text-center text-white d-flex justify-content-center align-items-center"
      style={{ width: "100%", minHeight: "100vh", background: "#000" }}
    >
      <h2>Thanks for submitting! 🎉</h2>
    </div>
  ) : (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%", minHeight: "100vh", background: "#000" }}
    >
      <form
        onSubmit={handleSubmit}
        className="card bg-dark text-white p-4"
        style={{ width: "450px", borderRadius: "15px", border: "1px solid #444" }}
      >
        <h4 className="text-center mb-4">The start of something magical...</h4>

        {/* Name */}
        <div className="mb-3">
          <label className="form-label text-secondary">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control bg-dark text-white border-secondary"
            placeholder="Your Full Name"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label text-secondary">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control bg-dark text-white border-secondary"
            placeholder="your@email.com"
          />
        </div>

        {/* Subject */}
        <div className="mb-3">
          <label className="form-label text-secondary">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control bg-dark text-white border-secondary"
            placeholder="Message Subject"
          />
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label text-secondary">Your Message For Me?</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="form-control bg-dark text-white border-secondary"
            placeholder="You can describe a lot, I can read it all."
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-light d-flex align-items-center justify-content-center gap-2 py-2 mt-2"
        >
          <FaHandPeace /> Submit
        </button>
      </form>
    </div>
  );
};

export default ContactCardForm;
