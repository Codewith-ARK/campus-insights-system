// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles for animations
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";
// import 'font-awesome/css/font-awesome.min.css';
// import Icon1 from "../assets/Icons/analytics.gif"
// import Icon2 from "../assets/Icons/contract.gif"
// import Icon3 from "../assets/Icons/update.gif"
// import { Link, useNavigate } from "react-router-dom";

// function Home() {
//   // Initialize AOS on component mount
//   useEffect(() => {
//     AOS.init({
//       duration: 1200, // Increased animation duration for smoother transitions
//       once: true, // Animation happens only once
//       easing: "ease-out-cubic", // Custom easing function for better flow
//       offset: 100, // Triggers animation when the element is 100px from the viewport
//     });
//   }, []);


    
//       const navigate = useNavigate();

//   return (
//     <div className="">
//       <Navbar />



//       {/* bg-gradient-to-t from-emerald-700 to-sky-950 */}

//      {/* Hero Section: Right text, left image  */}
//        <div className="min-h-screen flex items-center justify-between px-8 py-16 bg-[#0a192f] text-white scroll-smooth relative">
//         <div className="w-full md:w-1/2 text-right m-20 z-10">
     
    
//           <h1
//             className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-5 animate-fade-up"
//             data-aos="fade-right"
//           >
//           Welcome to <span className="text-cyan-400 ">Campus Insights System</span>
//           </h1>
//           <p
//             className="text-lg text-cyan-200 mb-6 text-center animate-fade-in"
//             data-aos="fade-right"
//             data-aos-delay="300"
//           >
//             Smart Analytics for a Better Campus Experience
//           </p>
          

//           <div className="flex justify-center items-center gap-6">

       
//   <button
//     className="mt-8 bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-cyan-600 transition"
//     data-aos="fade-right"
//     data-aos-delay="600" onClick={() => navigate('/login')}
//   >

//     Get Started
//   </button>

// </div>
//           <div className="absolute top-1/4 right-32 w-64 h-64 bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-10 rounded-full  transform translate-x-[-50%] translate-y-[-50%]"></div>
//           <div className="absolute top-1/3 right-full w-96 h-96 bg-gradient-to-br from-cyan-500 to-teal-500 opacity-30 rounded-full  transform translate-x-[50%] translate-y-[-50%]"></div>
//           <div className="absolute bottom-0 left-3/4 w-72 h-72 bg-gradient-to-t from-cyan-400 to-transparent opacity-40 rounded-full animate-pulse transform translate-y-[50%]"></div>
//         </div>
//         <div className="w-full md:w-1/2 text-center animate-float hover:scale-105 transition-transform duration-500">
//           <img
//             src="./public/Images/image2.png"
//             alt="Hero"
//             className="max-w-full rounded-xl transform hover:scale-110 transition-all duration-300"
//             data-aos="fade-left"
//             data-aos-delay="400"
//           />
//         </div>
//       </div>
     
   
// //////

// <div className="w-full overflow-hidden leading-none rotate-180">
//   <svg
//     className="w-full h-40"  
//     viewBox="0 0 1200 120"
//     preserveAspectRatio="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <linearGradient id="customGradient" x1="0" x2="1" y1="0" y2="0">
//         <stop offset="0%" stopColor="#047857" /> {/* emerald-700 */}
//         <stop offset="100%" stopColor="#047857" /> {/* sky-950 */}
//       </linearGradient>
//     </defs>
//     <path
//       d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
//       fill="url(#customGradient)"
//     />
//   </svg>
// </div>

// {/* /// */}


//  <div className="flex items-center justify-center my-12" data-aos="fade-up">
//   <div className="w-1/4 h-px bg-gray-500"></div>
//   <div className="mx-4 text-gray-200 text-sm uppercase tracking-widest font-semibold">
//     <i className="fas fa-star text-yellow-500 mr-2"></i> Explore More <i className="fas fa-star text-yellow-500 ml-2"></i>
//   </div>
//   <div className="w-1/4 h-px bg-gray-500"></div>
// </div>

//       {/* Features Section: Redesigned with modern style */}
// <div className="py-20 bg-gradient-to-b from-emerald-700 to-sky-950 text-white">
//   <div className="text-center mb-12">
//     <h2 className="text-4xl font-bold mb-4 text-white" data-aos="fade-up">
//       Key Features
//     </h2>
//     <p className="text-lg mb-6 text-white opacity-80" data-aos="fade-up" data-aos-delay="200">
//       Discover the top features that enhance your campus experience.
//     </p>
//   </div>
  
//   <div className="flex flex-wrap justify-center gap-10">
//     {/* Feature 1 */}
//     <div className="w-72 h-80 bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="300">
//       <div className="w-full h-48 flex items-center justify-center text-white text-3xl">
//       <img
//               src={Icon1}
//               alt="Real-Time Updates"
//               className="w-24 h-24 object-contain"
//             />
//       </div>
//       <div className="p-6 text-center bg-teal-700">
//         <h3 className="text-2xl font-semibold text-gray-100 mb-2">Advanced Analytics</h3>
//         <p className="text-white">
//           Get smart insights with real-time data and performance metrics.
//         </p>
//       </div>
//     </div>
    
//     {/* Feature 2 */}
//     <div className="w-72 h-80 bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="500">
//       <div className="w-full h-48 flex items-center justify-center text-white text-3xl">
//       <img
//               src={Icon2}
//               alt="Real-Time Updates"
//               className="w-24 h-24 object-contain"
//             />
//       </div>
//       <div className="p-6 text-center  bg-teal-700">
//         <h3 className="text-2xl font-semibold text-gray-100 mb-2">Collaborative Tools</h3>
//         <p className="text-white ">
//         Help teams work together easily and stay connected.
//         </p>
//       </div>
//     </div>
    
//     {/* Feature 3 */}
//     <div className="w-72 h-80 bg-white shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="700">
//     <div className="w-full h-48 flex items-center justify-center text-white text-3xl">
//     <img
//               src={Icon3}
//               alt="Real-Time Updates"
//               className="w-24 h-24 object-contain"
//             />
//       </div>
//       <div className="p-6 text-center bg-teal-700 ">
//         <h3 className="text-2xl font-semibold text-gray-100 mb-2">Real-Time Updates</h3>
//         <p className="text-white">
//           Stay updated with live notifications and event alerts.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>


// {/* Team and Supervisor Section */}
// <div className="py-20 bg-gradient-to-t from-emerald-700 to-sky-950">
//   {/* Supervisor Section */}
//   <div className="text-center mb-16">
//     <h2 className="text-4xl font-bold text-white" data-aos="fade-up" >
//       Our Supervisor
//     </h2>
//     <p
//       className="text-lg text-gray-300 mt-4"
//       data-aos="fade-up"
//       data-aos-delay="300"
//     >
//       Guiding us every step of the way with expertise and dedication.
//     </p>
//   </div>
//   <div className="flex justify-center mb-20 ">
//     <div
//       className="w-80 h-96 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
//       data-aos="zoom-in"
//       data-aos-delay="500"
//     >
//       <img
//         src="./public/Images/Sir.png" // Replace with actual image path
//         alt="Supervisor"
//         className="w-full h-2/3 object-cover"
//       />
//       <div className="p-4 bg-teal-700">
//         <h3 className="text-xl font-bold text-white">Dr. Mir Dhani Bux Talpur</h3>
//         <p className="text-gray-300">Project Supervisor</p>
//       </div>
//     </div>
//   </div>

//   {/* Team Section */}
//   <div className="text-center mb-12">
//     <h2 className="text-4xl font-bold text-white" data-aos="fade-up">
//       Meet Our Team
//     </h2>
//     <p
//       className="text-lg text-gray-300 mt-4"
//       data-aos="fade-up"
//       data-aos-delay="300"
//     >
//       Dedicated to delivering the best campus experience.
//     </p>
//   </div>
//   <div className="flex flex-wrap justify-center gap-10 px-4">
//     {/* Team Member 1 */}
//     <div
//       className="w-72 h-96 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
//       data-aos="flip-left"
//       data-aos-delay="500"
//     >
//       <img
//         src="./public/Images/Abdul Rehman img.png"
//         alt="Team Member"
//         className="w-full h-2/3 object-cover"
//       />
//       <div className="p-4 bg-white">
//         <h3 className="text-xl font-semibold text-teal-800">Abdul Rehman Khan</h3>
//         <p className="text-gray-800">Lead Developer</p>
//       </div>
//     </div>

//     {/* Team Member 2 */}
//     <div
//       className="w-72 h-96 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
//       data-aos="flip-left"
//       data-aos-delay="700"
//     >
//       <img
//         src="./public/Images/img.png"
//         alt="Team Member"
//         className="w-full h-2/3 object-cover"
//       />
//       <div className="p-4 bg-white">
//         <h3 className="text-xl font-semibold text-teal-800">Muhammad Moosa </h3>
//         <p className="text-gray-800">UI/UX Designer</p>
//       </div>
//     </div>

//     {/* Team Member 3 */}
//     <div
//       className="w-72 h-96 shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
//       data-aos="flip-left"
//       data-aos-delay="900"
//     >
//       <img
//         src="./public/Images/zaheer.png"
//         alt="Team Member"
//         className="w-full h-2/3 object-cover"
//       />
//       <div className="p-4 bg-white">
//         <h3 className="text-xl font-semibold text-teal-800">Zaheer Ahemd</h3>
//         <p className="text-gray-800">Project Manager</p>
//       </div>
//     </div>
//   </div>
// </div>


 
//       <div className="w-full h-px bg-gray-300 my-13" data-aos="fade-up"></div>
//      { /* Statistics Section: Total students, reports, etc. */}

//       <div className="bg-gradient-to-b  from-emerald-700 to-sky-950 py-20 text-center text-white">
//          {/* Heading */}
//   <div className="text-center mb-12" data-aos="fade-up">
//     <h2 className="text-4xl font-bold text-white">Key Stats</h2>
//     <p className="text-lg text-gray-200 mt-4">
//     Quick facts about our students, reports, and team.
//     </p>
//   </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           <div
//             className=" text-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <h3 className="text-3xl font-bold">1,500</h3>
//             <p className="text-xl">Total Students</p>
//           </div>
//           <div
//             className=" text-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
//             data-aos="fade-up"
//             data-aos-delay="400"
//           >
//             <h3 className="text-3xl font-bold">200</h3>
//             <p className="text-xl">Total Reports</p>
//           </div>
//           <div
//             className=" text-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
//             data-aos="fade-up"
//             data-aos-delay="600"
//           >
//             <h3 className="text-3xl font-bold">50+</h3>
//             <p className="text-xl">Team Members</p>
//           </div>
//         </div>
//       </div>

//       <div className="w-full h-px bg-gray-300 my-13" data-aos="fade-up"></div>
     

//       {/* About Section */}
//       {/* <div className="bg-gradient-to-t from-emerald-700 to-sky-950 py-20 text-center">
//         <h2 className="text-4xl font-bold text-white" data-aos="fade-up">
//           About Us
//         </h2>
//         <p
//           className="text-lg text-gray-200 mt-6"
//           data-aos="fade-up"
//           data-aos-delay="300"
//         >
//           We are dedicated to enhancing the campus experience through intelligent data analytics, seamless communication, and robust solutions.
//         </p>
//       </div> */}

//       {/* About Us Section */}
// <div className="bg-gradient-to-t  from-emerald-700 to-sky-950 py-20 px-4 sm:px-10" id="about">
//   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//     {/* Text Content */}
//     <div data-aos="fade-right">
//       <h2 className="text-4xl font-bold text-white mb-6">About Our System</h2>
//       <p className="text-gray-200 text-lg mb-4">
//       Campus Insights System is an all-in-one digital platform designed to enhance campus operations, improve communication, and streamline academic and administrative processes. Whether you're a student, teacher, or administrator, the system provides a user-friendly interface to access class schedules, manage reports, view announcements, and collaborate efficiently.</p>
//        <a
//         href="#features"
//         className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-800 transition duration-300"
//       >
//         Learn More
//       </a>
//     </div>

//     {/* Image */}
//     <div className="rounded-lg overflow-hidden shadow-xl" data-aos="fade-left">
//       <img
//         src="./public/Images/Campus-insight-system logo1-01.png"
//         alt="About the system"
//         className="w-full h-full object-cover"
//       />
//     </div>
//   </div>
// </div>

//       {/* <div className="flex items-center justify-center my-12" data-aos="fade-up">
//   <div className="w-1/4 h-px bg-gray-500"></div>
//   <div className="mx-4 text-gray-800 text-sm uppercase tracking-widest font-semibold">
//     <i className="fas fa-star text-yellow-500 mr-2"></i> Explore More <i className="fas fa-star text-yellow-500 ml-2"></i>
//   </div>
//   <div className="w-1/4 h-px bg-gray-500"></div>
// </div> */}

// <svg className="w-full h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
//   <defs>
//     <linearGradient id="wave4" x1="0" x2="1" y1="0" y2="0">
//       <stop offset="0%" stopColor="#047857" />
//       <stop offset="100%" stopColor="#047857" />
//     </linearGradient>
//   </defs>
//   <path
//     d="M0,0 C200,80 500,20 800,100 C1000,160 1200,20 1200,20 L1200,0 L0,0 Z"
//     fill="url(#wave4)"
//   />
// </svg>

//       <Footer />
//     </div>
//   );
// }

// export default Home;




import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import HeroImage from "../../public/Images/image2.png";
import SupervisorImage from "../../public/Images/Sir.png";
import Team1 from "../../public/Images/Abdul Rehman img.png";
import Team2 from "../../public/Images/img.png";
import Team3 from "../../public/Images/zaheer.png";
import Icon1 from "../assets/Icons/analytics.png";
import Icon2 from "../assets/Icons/collaboration.png";
import Icon3 from "../assets/Icons/real-time.png";
import Logo from "../../public/Images/logo.png"

const features = [
  { icon: Icon1, title: "Advanced Analytics", desc: "Smart insights with real-time data and performance tracking." },
  { icon: Icon2, title: "Collaborative Tools", desc: "Seamless collaboration for teams and projects." },
  { icon: Icon3, title: "Real-Time Updates", desc: "Instant notifications and live event alerts." },
];

const teamMembers = [
  { name: "Abdul Rehman Khan", role: "Backend Developer", image: Team1, bio: "Building powerful backend systems with Python and Node.js." },
  { name: "Muhammad Moosa Nizamani", role: "Frontend Developer", image: Team2, bio: "Crafting seamless and intuitive UI/UX with React and Tailwind." },
  { name: "Zaheer Ahmed Wassan", role: "UI/UX Designer", image: Team3, bio: "Designing user-centered interfaces that engage and inspire." },
];

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic", offset: 100 });
  }, []);

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Navbar />


      {/* Hero Section */}
<section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 relative text-center space-y-8">
  
  {/* Campus Logo */}
  <div
    className="w-36 h-36 mb-3 animate-spin-slow" // small, animated logo
    data-aos="fade-down"
  >
    <img
      src={Logo}  // <-- replace CampusLogo with your actual logo import
      alt="Campus Logo"
      className="w-full h-full object-contain"
    />
  </div>

  {/* Hero Text */}
  <div className="w-full max-w-2xl space-y-8" data-aos="fade-up" data-aos-delay="400">
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
      Welcome to <span className="text-emerald-400">Campus Insights System</span>
    </h1>
    <p className="text-lg text-gray-300 max-w-lg mx-auto">
      Smart Analytics for a Better Campus Experience.
    </p>
    <button
      onClick={() => navigate("/login")}
      className="mt-8 bg-emerald-500 hover:bg-emerald-600 transition px-6 py-3 rounded-full text-lg font-semibold"
    >
      Get Started
    </button>
  </div>

  {/* Background Effects */}
  <div className="absolute -top-10 right-0 w-80 h-80 bg-emerald-500 opacity-20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
</section>


      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-400" data-aos="fade-up">Key Features</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Discover the powerful features that make your campus life smarter and easier.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 px-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-72 text-center border border-emerald-500 hover:scale-105 transition"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <img src={feature.icon} alt={feature.title} className="w-20 h-20 mx-auto mb-6 animate-spin-slow" />
              <h3 className="text-2xl font-bold text-emerald-300">{feature.title}</h3>
              <p className="mt-4 text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supervisor Section */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-400" data-aos="fade-up">Our Supervisor</h2>
          <p className="text-gray-400 mt-4" data-aos="fade-up" data-aos-delay="300">
            Guiding us every step of the way with expertise and dedication.
          </p>
        </div>

        <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="400">
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={SupervisorImage} alt="Supervisor" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex flex-col justify-end p-6">
              <h3 className="text-xl text-emerald-400 font-bold">Dr. Mir Dhani Bux Talpur</h3>
              <p className="text-emerald-300 text-sm">Supervisor & Mentor</p>
              <p className="text-gray-300 text-xs mt-2">
                20+ years in Computer Science research, mentoring innovative student projects with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Team Section */}
<section className="py-20 bg-gray-800">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-emerald-400" data-aos="fade-up">Our Team</h2>
    <p className="text-gray-400 mt-4" data-aos="fade-up" data-aos-delay="300">
      Meet the talented team behind this project.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-10 px-8">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
        data-aos="zoom-in"
        data-aos-delay={index * 200}
      >
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-6">
          <h3 className="text-xl text-emerald-400 font-bold">{member.name}</h3>
          <p className="text-emerald-300 text-sm">{member.role}</p>
          <p className="text-gray-300 text-xs mt-2">{member.bio}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      <Footer />
    </div>
  );
}

export default Home;
