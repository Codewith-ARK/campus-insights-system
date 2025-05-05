import React from 'react'

export default function Supervisor() {
  return (
    <>
      <section className="bg-gray-800 pt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-400" data-aos="fade-up">Our Supervisor</h2>
          <p className="text-gray-400 mt-4" data-aos="fade-up" data-aos-delay="300">
            Guiding us every step of the way with expertise and dedication.
          </p>
        </div>

        <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="400">
          <div className="relative w-72 h-80 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <img src={"/images/team/dr_dhani_bux.png"} alt="Supervisor" className="w-full h-full object-cover" />
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
    </>
  )
}
