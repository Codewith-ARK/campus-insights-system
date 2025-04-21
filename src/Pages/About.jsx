import React from "react";

function About() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Full-Stack Developer",
      description:
        "Specializing in scalable solutions for modern applications.",
      img: Image1,
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      description: "Creating seamless and engaging user experiences.",
      //   img: JaneImage,
    },
    {
      name: "Emily Carter",
      role: "Project Manager",
      description: "Ensuring project timelines and deliverables are met.",
      //   img: EmilyImage,
    },
  ];
  return (
    // <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white relative overflow-hidden">
    //   {/* 3D Shapes */}
    //   <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full animate-spin-slow blur-xl"></div>
    //   <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-bl from-pink-500 to-yellow-400 rounded-full animate-pulse blur-xl"></div>
    //   <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-96 h-96 border-8 border-dashed border-gray-400/30 rounded-full animate-float"></div>

    //   {/* Hero Section */}
    //   <header className="text-center py-16 relative z-10">
    //     <h1 className="text-5xl font-extrabold mb-6">About Us</h1>
    //     <p className="text-xl text-gray-300">
    //       Pioneering creativity and innovation in web development and design.
    //     </p>
    //   </header>

    //   {/* Team Section */}
    //   <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {/* Team Member Card */}
    //       <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
    //         <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full animate-spin-slow"></div>
    //         <h3 className="text-xl font-semibold text-center">John Doe</h3>
    //         <p className="text-center text-gray-400">Full-Stack Developer</p>
    //         <p className="text-gray-500 text-sm mt-2 text-center">
    //           Building scalable and efficient solutions for modern problems.
    //         </p>
    //       </div>

    //       <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
    //         <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-tr from-pink-500 to-red-500 rounded-full animate-pulse"></div>
    //         <h3 className="text-xl font-semibold text-center">Jane Smith</h3>
    //         <p className="text-center text-gray-400">UI/UX Designer</p>
    //         <p className="text-gray-500 text-sm mt-2 text-center">
    //           Crafting seamless and visually captivating user experiences.
    //         </p>
    //       </div>

    //       <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
    //         <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-tr from-green-500 to-yellow-500 rounded-full animate-scale"></div>
    //         <h3 className="text-xl font-semibold text-center">Emily Carter</h3>
    //         <p className="text-center text-gray-400">Project Manager</p>
    //         <p className="text-gray-500 text-sm mt-2 text-center">
    //           Keeping projects on track with precision and care.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Mission Section */}
    //   <section className="py-16 mt-20 relative z-10">
    //     <div className="max-w-4xl mx-auto text-center">
    //       <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
    //       <p className="text-lg text-gray-300">
    //         Empowering businesses to thrive with innovative web solutions and
    //         creative strategies.
    //       </p>
    //     </div>
    //   </section>
    // </div>

    <div className="bg-gradient-to-br from-sky-800 via-gray-800 to-emerald-800 min-h-screen text-white overflow-hidden relative">
      {/* Floating 3D Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full animate-float shadow-2xl blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-bl from-pink-500 to-yellow-400 rounded-full animate-spin-slow blur-xl"></div>
      <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-br from-green-400 to-teal-600 rounded-full animate-pulse blur-lg -translate-x-1/2 -translate-y-1/2"></div>

      {/* Header Section */}
      <header className="text-center py-16 relative z-10">
        <h1 className="text-6xl font-extrabold tracking-wide mb-4">
          About <span className="text-blue-500">Us</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Empowering businesses with cutting-edge solutions, innovative design,
          and expert execution.
        </p>
      </header>

      {/* Team Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Team<span className="text-blue-500">.</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className=" rounded-2xl shadow-lg p-8 max-w-xs hover:scale-105 transform transition-transform"
            >
              {/* Card Hover Animation */}
              <div className="relative group">
                {/* <img
                  className="w-32 h-32 mx-auto  object-cover mb-6 group-hover:opacity-80 transition-opacity"
                  src={member.img}
                  alt={member.name}
                /> */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-full">
                  <p className="text-sm text-gray-200 px-4 text-center">
                    {member.description}
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center">
                {member.name}
              </h3>
              <p className="text-center text-blue-400 font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-gray-900 to-black mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Our Mission<span className="text-green-400">.</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            To deliver innovative, efficient, and sustainable solutions that
            drive businesses toward success, ensuring exceptional results with a
            customer-centric approach.
          </p>
        </div>
      </section>

      {/* Parallax Footer with 3D Animations */}
      <footer className="relative bg-gray-800 py-16 text-center text-gray-300 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            Let’s Build Something Great
            <span className="text-yellow-400">.</span>
          </h3>
          <p>
            Have questions? Get in touch to discover how we can help transform
            your vision into reality.
          </p>
        </div>

        {/* Rotating Circle */}
        <div className="absolute -top-32 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-rotate-slow blur-2xl opacity-40"></div>
        <div className="absolute bottom-0 -right-32 w-72 h-72 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full animate-spin-reverse blur-2xl opacity-30"></div>
      </footer>
    </div>
  );
}

export default About;
