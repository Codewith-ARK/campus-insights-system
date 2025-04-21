import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles for animations
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import 'font-awesome/css/font-awesome.min.css';
import Icon1 from "../assets/Icons/analytics.gif"
import Icon2 from "../assets/Icons/contract.gif"
import Icon3 from "../assets/Icons/update.gif"
function Home() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1200, // Increased animation duration for smoother transitions
      once: true, // Animation happens only once
      easing: "ease-out-cubic", // Custom easing function for better flow
      offset: 100, // Triggers animation when the element is 100px from the viewport
    });
  }, []);

  return (
    <div className="bg-gray-900">
      <Navbar />





     {/* Hero Section: Right text, left image  */}
       <div className="min-h-screen flex items-center justify-between px-8 py-16 bg-gradient-to-t from-emerald-700 to-sky-950 relative">
        <div className="w-full md:w-1/2 text-right m-20 z-10">
     
    
          <h1
            className="text-5xl font-extrabold font-Poppins text-center text-sky-200 mb-4 animate-fade-up"
            data-aos="fade-right"
          >
            WELCOME TO CAMPUS INSIGHTS SYSTEM
          </h1>
          <p
            className="text-lg text-cyan-400 mb-6 text-center animate-fade-in"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Smart Analytics for a Better Campus Experience
          </p>
          

          <div className="flex justify-center items-center gap-6">
  <button
    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-gradient-to-r from-green-400 to-teal-500"
    data-aos="fade-right"
    data-aos-delay="600"
  >
    Get Started
  </button>
</div>
          <div className="absolute top-1/4 right-32 w-64 h-64 bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-20 rounded-full  transform translate-x-[-50%] translate-y-[-50%]"></div>
          <div className="absolute top-1/3 right-full w-96 h-96 bg-gradient-to-br from-cyan-500 to-teal-500 opacity-30 rounded-full  transform translate-x-[50%] translate-y-[-50%]"></div>
          <div className="absolute bottom-0 left-3/4 w-72 h-72 bg-gradient-to-t from-cyan-400 to-transparent opacity-40 rounded-full animate-pulse transform translate-y-[50%]"></div>
        </div>
        <div className="w-full md:w-1/2 text-center animate-float">
          <img
            src="./public/Images/image2.png"
            alt="Hero"
            className="max-w-full rounded-xl transform hover:scale-110 transition-all duration-300"
            data-aos="fade-left"
            data-aos-delay="400"
          />
        </div>
      </div>
     
   
//////

<div className="w-full overflow-hidden leading-none rotate-180">
  <svg
    className="w-full h-40"  
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="customGradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#047857" /> {/* emerald-700 */}
        <stop offset="100%" stopColor="#047857" /> {/* sky-950 */}
      </linearGradient>
    </defs>
    <path
      d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
      fill="url(#customGradient)"
    />
  </svg>
</div>

{/* /// */}


 <div className="flex items-center justify-center my-12" data-aos="fade-up">
  <div className="w-1/4 h-px bg-gray-500"></div>
  <div className="mx-4 text-gray-200 text-sm uppercase tracking-widest font-semibold">
    <i className="fas fa-star text-yellow-500 mr-2"></i> Explore More <i className="fas fa-star text-yellow-500 ml-2"></i>
  </div>
  <div className="w-1/4 h-px bg-gray-500"></div>
</div>

      {/* Features Section: Redesigned with modern style */}
<div className="py-20 bg-gradient-to-b from-emerald-700 to-sky-950 text-white">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4 text-white" data-aos="fade-up">
      Key Features
    </h2>
    <p className="text-lg mb-6 text-white opacity-80" data-aos="fade-up" data-aos-delay="200">
      Discover the top features that enhance your campus experience.
    </p>
  </div>
  
  <div className="flex flex-wrap justify-center gap-10">
    {/* Feature 1 */}
    <div className="w-72 h-80 bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="300">
      <div className="w-full h-48 flex items-center justify-center text-white text-3xl">
      <img
              src={Icon1}
              alt="Real-Time Updates"
              className="w-24 h-24 object-contain"
            />
      </div>
      <div className="p-6 text-center bg-teal-700">
        <h3 className="text-2xl font-semibold text-gray-100 mb-2">Advanced Analytics</h3>
        <p className="text-white">
          Get smart insights with real-time data and performance metrics.
        </p>
      </div>
    </div>
    
    {/* Feature 2 */}
    <div className="w-72 h-80 bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="500">
      <div className="w-full h-48 flex items-center justify-center text-white text-3xl">
      <img
              src={Icon2}
              alt="Real-Time Updates"
              className="w-24 h-24 object-contain"
            />
      </div>
      <div className="p-6 text-center  bg-teal-700">
        <h3 className="text-2xl font-semibold text-gray-100 mb-2">Collaborative Tools</h3>
        <p className="text-white ">
        Help teams work together easily and stay connected.
        </p>
      </div>
    </div>
    
    {/* Feature 3 */}
    <div className="w-72 h-80 bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="700">
    <div className="w-full h-48 flex items-center justify-center text-white text-3xl">
    <img
              src={Icon3}
              alt="Real-Time Updates"
              className="w-24 h-24 object-contain"
            />
      </div>
      <div className="p-6 text-center bg-teal-700 ">
        <h3 className="text-2xl font-semibold text-gray-100 mb-2">Real-Time Updates</h3>
        <p className="text-white">
          Stay updated with live notifications and event alerts.
        </p>
      </div>
    </div>
  </div>
</div>


{/* Team and Supervisor Section */}
<div className="py-20 bg-gradient-to-t from-emerald-700 to-sky-950">
  {/* Supervisor Section */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-white" data-aos="fade-up" >
      Our Supervisor
    </h2>
    <p
      className="text-lg text-gray-300 mt-4"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      Guiding us every step of the way with expertise and dedication.
    </p>
  </div>
  <div className="flex justify-center mb-20 ">
    <div
      className="w-80 h-96 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
      data-aos="zoom-in"
      data-aos-delay="500"
    >
      <img
        src="./public/Images/Sir.png" // Replace with actual image path
        alt="Supervisor"
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4 bg-teal-700">
        <h3 className="text-xl font-bold text-white">Dr. Mir Dhani Bux Talpur</h3>
        <p className="text-gray-300">Project Supervisor</p>
      </div>
    </div>
  </div>

  {/* Team Section */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-white" data-aos="fade-up">
      Meet Our Team
    </h2>
    <p
      className="text-lg text-gray-300 mt-4"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      Dedicated to delivering the best campus experience.
    </p>
  </div>
  <div className="flex flex-wrap justify-center gap-10 px-4">
    {/* Team Member 1 */}
    <div
      className="w-72 h-96 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
      data-aos="flip-left"
      data-aos-delay="500"
    >
      <img
        src="./public/Images/Abdul Rehman img.png"
        alt="Team Member"
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-teal-800">Abdul Rehman Khan</h3>
        <p className="text-gray-800">Lead Developer</p>
      </div>
    </div>

    {/* Team Member 2 */}
    <div
      className="w-72 h-96 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
      data-aos="flip-left"
      data-aos-delay="700"
    >
      <img
        src="./public/Images/img.png"
        alt="Team Member"
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-teal-800">Muhammad Moosa </h3>
        <p className="text-gray-800">UI/UX Designer</p>
      </div>
    </div>

    {/* Team Member 3 */}
    <div
      className="w-72 h-96 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
      data-aos="flip-left"
      data-aos-delay="900"
    >
      <img
        src="./public/Images/zaheer.png"
        alt="Team Member"
        className="w-full h-2/3 object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-teal-800">Zaheer Ahemd</h3>
        <p className="text-gray-800">Project Manager</p>
      </div>
    </div>
  </div>
</div>


 
      <div className="w-full h-px bg-gray-300 my-13" data-aos="fade-up"></div>
     { /* Statistics Section: Total students, reports, etc. */}

      <div className="bg-gradient-to-b  from-emerald-700 to-sky-950 py-20 text-center text-white">
         {/* Heading */}
  <div className="text-center mb-12" data-aos="fade-up">
    <h2 className="text-4xl font-bold text-white">Key Stats</h2>
    <p className="text-lg text-gray-200 mt-4">
    Quick facts about our students, reports, and team.
    </p>
  </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
            className=" text-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-3xl font-bold">1,500</h3>
            <p className="text-xl">Total Students</p>
          </div>
          <div
            className=" text-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-3xl font-bold">200</h3>
            <p className="text-xl">Total Reports</p>
          </div>
          <div
            className=" text-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-xl">Team Members</p>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-300 my-13" data-aos="fade-up"></div>
     

      {/* About Section */}
      {/* <div className="bg-gradient-to-t from-emerald-700 to-sky-950 py-20 text-center">
        <h2 className="text-4xl font-bold text-white" data-aos="fade-up">
          About Us
        </h2>
        <p
          className="text-lg text-gray-200 mt-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We are dedicated to enhancing the campus experience through intelligent data analytics, seamless communication, and robust solutions.
        </p>
      </div> */}

      {/* About Us Section */}
<div className="bg-gradient-to-t  from-emerald-700 to-sky-950 py-20 px-4 sm:px-10" id="about">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Text Content */}
    <div data-aos="fade-right">
      <h2 className="text-4xl font-bold text-white mb-6">About Our System</h2>
      <p className="text-gray-200 text-lg mb-4">
      Campus Insights System is an all-in-one digital platform designed to enhance campus operations, improve communication, and streamline academic and administrative processes. Whether you're a student, teacher, or administrator, the system provides a user-friendly interface to access class schedules, manage reports, view announcements, and collaborate efficiently.</p>
       <a
        href="#features"
        className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-800 transition duration-300"
      >
        Learn More
      </a>
    </div>

    {/* Image */}
    <div className="rounded-lg overflow-hidden shadow-xl" data-aos="fade-left">
      <img
        src="./public/Images/Campus-insight-system logo1-01.png"
        alt="About the system"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

      {/* <div className="flex items-center justify-center my-12" data-aos="fade-up">
  <div className="w-1/4 h-px bg-gray-500"></div>
  <div className="mx-4 text-gray-800 text-sm uppercase tracking-widest font-semibold">
    <i className="fas fa-star text-yellow-500 mr-2"></i> Explore More <i className="fas fa-star text-yellow-500 ml-2"></i>
  </div>
  <div className="w-1/4 h-px bg-gray-500"></div>
</div> */}

<svg className="w-full h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <defs>
    <linearGradient id="wave4" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stopColor="#047857" />
      <stop offset="100%" stopColor="#047857" />
    </linearGradient>
  </defs>
  <path
    d="M0,0 C200,80 500,20 800,100 C1000,160 1200,20 1200,20 L1200,0 L0,0 Z"
    fill="url(#wave4)"
  />
</svg>

      <Footer />
    </div>
  );
}

export default Home;
