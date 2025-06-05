import React from "react";

export default function page() {
  const teamMembers = [
    {
      name: "Abdul Rehman Khan",
      role: "Team Leader",
      description: "Specializing in scalable solutions for modern applications.",
      img: "/images/team/ark.png",
    },
    {
      name: "Muhammad Moosa Nizamani",
      role: "UI/UX Designer",
      description: "Creating seamless and engaging user experiences.",
      img: "/images/logo.png",
    },
    {
      name: "Zaheer Ahmed",
      role: "Project Manager",
      description: "Ensuring project timelines and deliverables are met.",
      img: "/images/team/zaheer.png",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white relative overflow-hidden">

      {/* Decorative Background Shapes */}
      <div className="absolute top-14 left-10 w-32 h-32 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full animate-spin-slow blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-bl from-pink-500 to-yellow-400 rounded-full animate-pulse blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-96 h-96 border-8 border-dashed border-gray-400/30 rounded-full animate-float"></div>

      {/* Hero Section
      <header className="text-center py-16 relative z-10">
        <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
        <p className="text-xl text-gray-300">
          CAMPUS INSIGHTS SYST
        </p>
      </header> */}

      {/* Project Logo & About */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-12 px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-4">About</h2>
          <p className="text-gray-300 text-lg text-justify">
            Campus Insights System (or Feedback Evaluation System) is a comprehensive platform designed to gather, manage, and analyze feedback within a campus environment. Its primary goal is to enhance educational quality, administrative services, and overall campus experience through structured input from students, faculty, and staff.

            This system allows:

            Students to provide feedback on courses, faculty, and campus facilities.

            Teachers to view performance analytics and improve teaching strategies.

            Admins to analyze feedback trends and make data-driven decisions for continuous improvement.

            With real-time dashboards, user-friendly forms, and secure login for each role (admin, teacher, student), the system ensures transparency, accountability, and active participation in shaping a better campus environment.
          </p>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="px-8 py-16 rounded-xl mx-4">
        <h2 className="text-3xl font-bold text-center mb-10">Project Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border border-gray-800 bg-black/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:scale-105 ease-out duration-300">
            <img src="/icon/dashboard.webp" alt="Dashboard" className="h-56 w-full object-cover" />
            <div className="p-4 text-center bg-gray-900/50">
              <p className="font-semibold text-lg text-gray-200">Real-Time Dashboard</p>
            </div>
          </div>
          <div className="border border-gray-800 bg-black/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:scale-105 ease-out duration-300">
            <img src="/icon/form.gif" alt="Feedback Form" className="h-56 w-full object-cover" />
            <div className="p-4 text-center bg-gray-900/50">
              <p className="font-semibold text-lg text-gray-200">Feedback Submission Form</p>
            </div>
          </div>
          <div className="border border-gray-800 bg-black/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:scale-105 ease-out duration-300">
            <img src="/icon/analytics_and_reports.gif" alt="Analytics" className="h-56 w-full object-cover" />
            <div className="p-4 text-center bg-gray-900/50">
              <p className="font-semibold text-lg text-gray-200">Analytics and Reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 mt-20  rounded-xl mx-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-white tracking-wide">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed px-4">
            Our mission is to bridge the gap between feedback and meaningful change within educational institutions.
            The Campus Insights System empowers students, faculty, and administrators to collaboratively shape
            a better learning environment. We strive to deliver transparency, encourage improvement, and promote
            accountability through smart, secure, and data-driven feedback mechanisms.
          </p>
        </div>
      </section>


      {/* Supervisor Section */}
      <section className="py-20 px-6  rounded-xl mx-4 mb-20 bg-gray-900/30">
        <h2 className="text-3xl font-bold text-center mb-8 font-Montserrat">Supervisor</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 ">
          <img
            src="/public/Images/Sir.png"
            alt="Supervisor"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          <div className="max-w-lg text-center sm:text-left ">
            <h3 className="text-2xl font-bold">Prof. Dr. Mir Dhani Bux Talpur</h3>
            <p className="text-gray-200 mt-2 font-bold">Project Guide & Evaluator</p>
            <p className="text-gray-200 mt-2 text-sm">
              Guiding the development of robust solutions and academic excellence in final year projects.
            </p>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bottom-2">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900/30 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-center text-gray-200">{member.role}</p>
              <p className="text-gray-300 text-sm mt-2 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}