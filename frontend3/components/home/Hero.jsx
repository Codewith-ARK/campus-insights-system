import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <>
      <section className=" min-h-screen flex flex-col items-center justify-center px-8 py-20 relative text-center space-y-8">
        {/* Campus Logo */}
        <div
          className="w-36 h-36 mb-3 animate-spin-slow" // small, animated logo
          data-aos="fade-down"
        >
          <img
            src={"/logo.png"}  // <-- replace CampusLogo with your actual logo import
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
          <Link
            href={"/login"}
            className="mt-8 bg-emerald-500 hover:bg-emerald-600 transition px-6 py-3 rounded-full text-lg font-semibold"
          >
            Get Started
          </Link>
        </div>

        {/* Background Effects */}
        <div className="absolute -top-10 right-0 w-80 h-80 bg-emerald-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
      </section>

    </>
  )
}
