import React from "react";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import Header from "../components/Navbar";
import Logo from "../assets/Logo/CIS logo2.jpg";
import TeamImage from "../assets/Images/1.gif";
function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-white">
      <Header></Header>

      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${TeamImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="flex justify-center mb-4 ">
            <img src={Logo} alt="CIS Logo" className="w-40 h-40 rounded-full" />
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight font-inter  ">
            About Campus Insights System
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed font-inter">
            Campus Insights System" is an innovative platform designed to
            streamline campus management, enhance communication, and provide
            insightful data analytics for students, faculty, and administration.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gray-800 font-inter">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-cyan-400 ">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Our mission is to provide a comprehensive feedback system that
            enables students, faculty, and staff to share their thoughts and
            suggestions, fostering a culture of continuous improvement and
            enhancing the overall campus experience.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-cyan-600 font-inter">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Value 1 */}
          <div className="bg-cyan-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-cyan-400">
              Real-Time Feedback Collection
            </h3>
            <p className="mt-4  ">
              Capture and analyze feedback instantly from students, faculty, and
              staff to improve campus services and operations.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-cyan-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold  text-cyan-400">Smart Reports</h3>
            <p className="mt-4 ">
              Use feedback data to create reports that help make better
              decisions.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-cyan-900  p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-cyan-400">
              User-Friendly Interface
            </h3>
            <p className="mt-4 ">
              Provide an easy-to-use platform for submitting feedback, tracking
              responses, and engaging with campus management.
            </p>
          </div>
        </div>
      </section>
      <TeamSection></TeamSection>
      <Footer></Footer>
    </div>
  );
}

export default About;
