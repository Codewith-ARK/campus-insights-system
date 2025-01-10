import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../assets/Logo/CIS logo2.jpg";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar></Navbar>

      <section className="bg-gradient-to-r from-cyan-700 to-cyan-400 text-white py-24">
        <div className="flex justify-center mb-4 ">
          <img src={Logo} alt="CIS Logo" className="w-40 h-40 rounded-full" />
        </div>
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            We'd love to hear from you! Reach out for any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">
            Get In Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-cyan-600 p-8 rounded-lg shadow-lg space-y-6"
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-left font-semibold text-white mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-left font-semibold text-white mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-4 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-left font-semibold text-white mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholder="Type your message here"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-300 hover:bg-teal-700 hover:text-cyan-50 text-cyan-700 font-semibold rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">
            Our Contact Details
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-cyan-700 p-8 rounded-lg shadow-lg max-w-xs w-full flex flex-col items-center">
              <FaMapMarkerAlt className="text-white text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4 font-custom2">
                Address
              </h3>
              <p className="text-lg text-white font-inter">
                University Of Sufism And Modern Sciences Bhit Shah, Sindh,
                Pakistan
              </p>
            </div>

            <div className="bg-cyan-700 p-8 rounded-lg shadow-lg max-w-xs w-full flex flex-col items-center">
              <FaPhoneAlt className="text-white text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4 font-custom2">
                Phone
              </h3>
              <p className="text-lg text-white font-inter">(123) 456-7890</p>
            </div>

            <div className="bg-cyan-700 p-8 rounded-lg shadow-lg max-w-xs w-full flex flex-col items-center">
              <FaEnvelope className="text-white text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4 font-custom2">
                Email
              </h3>
              <p className="text-lg text-white font-inter">
                campusinsightssystem@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
