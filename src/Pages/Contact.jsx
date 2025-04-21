import React from "react";

function Contact() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white relative overflow-hidden">
      {/* Background 3D Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full animate-spin-slow blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-bl from-pink-500 to-yellow-400 rounded-full animate-pulse blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-96 h-96 border-8 border-dashed border-gray-400/30 rounded-full animate-float"></div>

      {/* Hero Section */}
      <header className="text-center py-16 relative z-10">
        <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-300">
          We'd love to hear from you! Reach out with your questions or feedback.
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full mt-2 p-3 bg-gray-800 rounded-lg border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  className="w-full mt-2 p-3 bg-gray-800 rounded-lg border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows="5"
                  className="w-full mt-2 p-3 bg-gray-800 rounded-lg border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-300">
                Reach out to us directly or visit our office.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center">
                  <i className="fas fa-phone-alt text-white"></i>
                </div>
                <p className="ml-4 text-gray-300">+1 123 456 7890</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex justify-center items-center">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <p className="ml-4 text-gray-300">info@campusinsights.com</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex justify-center items-center">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <p className="ml-4 text-gray-300">
                  123 Main Street, City, State
                </p>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="h-64 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509618!2d144.9630577153168!3d-37.81362797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e2d62d33%3A0x3d0000!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1632571911554!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
