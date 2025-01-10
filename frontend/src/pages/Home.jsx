import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import TeamSection from "../components/TeamSection";
import BackgroundImage from "../assets/Images/image2.jpg";
import Footer from "../components/Footer";
import Logo from "../assets/Logo/CIS logo1.png";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="min-h-screen h-96 flex bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <header className="bg-gradient-to-r p-5 w-full mt-3  items-center justify-between">
          <div className="w-full md:w-1/2 p-5 text-left float-right">
            <div className="flex justify-center mb-4">
              <img src={Logo} alt="CIS Logo" className="w-40 h-40" />
            </div>
            <h1 className="text-4xl font-bold text-white text-center font-custom2">
              Welcome to Campus Insights System
            </h1>

            <p className="mt-8 text-white text-justify">
              Welcome to the Campus Insights System, a smart platform designed
              to enhance communication and engagement within your campus. This
              system allows students to share feedback and provide valuable
              insights about campus facilities, activities, and teaching
              experiences. With features like event updates, real-time
              notifications, and feedback collection, the Campus Insights System
              ensures that students, teachers, and administrators stay informed
              and connected. Our goal is to create a more responsive and
              interactive campus environment for everyone.
              <Button />
            </p>
          </div>
        </header>
      </div>
      <TeamSection />
      <Footer></Footer>
    </div>
  );
}

export default Home;
