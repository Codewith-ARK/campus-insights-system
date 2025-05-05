import React from 'react'

export default function Feature() {

  const features = [
    { icon: "/icon/analytics.png", title: "Advanced Analytics", desc: "Smart insights with real-time data and performance tracking." },
    { icon: "/icon/collaboration.png", title: "Collaborative Tools", desc: "Seamless collaboration for teams and projects." },
    { icon: "/icon/real-time.png", title: "Real-Time Updates", desc: "Instant notifications and live event alerts." },
  ];

  return (
    <>
      <section className="py-20 bg-gray-900">
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
              <img src={feature.icon} alt={feature.title} className="w-20 h-20 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-emerald-300">{feature.title}</h3>
              <p className="mt-4 text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
