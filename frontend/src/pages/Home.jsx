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
      <Navbar />
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
              Campus Insights System
            </h1>

            <p className="mt-4 mb-3 text-white text-justify">
              Share anonymous feedback and provide valuable insights about campus facilities, activities, and teaching experiences.
            </p>
            <Button 
            address={"/login"}
            text={"Get Started"}
            />
          </div>
        </header>
      </div>
      <TeamSection />
      <Footer></Footer>
    </div>
  );
}

export default Home;
