import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-4 text-main fw-bold">Get in Touch</h2>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form
              className="shadow-lg p-4 rounded bg-white"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label className="form-label fw-semibold">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  rows="5"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-main w-100 py-2 fs-5">
                Send Message
              </button>
              {submitted && (
                <p className="text-success mt-3 text-center fw-semibold">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
