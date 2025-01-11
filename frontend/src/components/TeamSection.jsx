import React from "react";

const TeamData = [
  {
    name: "Dr. Dhani Bux Talpur",
    role: "Supervisor",
    desc: "Dr. Dhani Bux Talpur is the supervisor, overseeing the research team working on the Campus Insights System project and ensuring the highest standards across all facets of the project.",
    imgUrl: "/images/team/dhani-bux.jpeg"
  },
  {
    name: "Abdul Rehman Khan",
    role: "Team-Lead",
    desc: "Backend developer, making sure your data is stored and processed securely.",
    imgUrl: "/images/team/ark.jpg"
  },
  {
    name: "Muhammad Moosa",
    role: "Team-Member",
    desc: "Muhammad Moosa is front-end developer, front-end developer creates the websites user interface, making it visually appealing and easy to navigate.",
    imgUrl: "/images/team/avatar.png"
  },
  {
    name: "Zaheer Ahmed",
    role: "Team-Member",
    desc: "Designer, bringing ideas to life with visual brilliance.",
    imgUrl: "/images/team/zaheer.png"
  }
]

export default function TeamSection() {
  return (
    <section className="bg-cyan-600 py-16 flex-wrap">
      <div className="px-4 md:px-20 lg:px-40 text-center ">
        <h2 className="text-3xl font-bold text-cyan-200 mb-8 mt-8 font-custom2">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TeamData.map((item, index) => (
            <TeamCard
              name={item.name}
              role={item.role}
              desc={item.desc}
              imgUrl={item.imgUrl}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, imgUrl, desc }) {
  return (
    <>
      <div className="md:first:col-span-2 lg:first:col-span-3 flex flex-col gap-3 bg-cyan-900 text-white p-6 transform hover:scale-105 hover:shadow-xl transition duration-300 rounded-md cursor-pointer">
        <img
          className="w-40 aspect-square rounded-md mx-auto object-cover"
          src={imgUrl}
          alt={name}
        />
        <div>
          <h3 className="text-xl font-semibold text-cyan-400">{name}</h3>
          <p className="text-cyan-200">{role}</p>
        </div>
        <p className="text-sm">{desc}</p>
      </div>
    </>
  )
}