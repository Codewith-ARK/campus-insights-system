import React from 'react'

export default function Team() {
  
  const teamMembers = [
    { name: "Abdul Rehman Khan", role: "Backend Developer", image: '/images/team/ark.png', bio: "Building powerful backend systems with Python and Node.js." },
    { name: "Muhammad Moosa Nizamani", role: "Frontend Developer", image: null, bio: "Crafting seamless and intuitive UI/UX with React and Tailwind." },
    { name: "Zaheer Ahmed Wassan", role: "UI/UX Designer", image: '/images/team/zaheer.png', bio: "Designing user-centered interfaces that engage and inspire." },
  ];

  return (
    <>
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
              <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-end p-6">
                <h3 className="text-xl text-emerald-400 font-bold">{member.name}</h3>
                <p className="text-emerald-300 text-sm">{member.role}</p>
                <p className="text-gray-300 text-xs mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
