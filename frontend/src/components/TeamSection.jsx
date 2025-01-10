import React from "react";
import Images1 from "../assets/Images/dbt.jpeg";
import Image2 from "../assets/Images/ARK.jpg";
import Image4 from "../assets/Images/Z.jpg";
import Image3 from "../assets/Images/image3.png";

function TeamSection() {
  return (
    <section className="bg-cyan-600 py-16 flex-wrap">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl font-bold text-cyan-200 mb-8 mt-8 font-custom2">
          Meet Our Team
        </h2>
        <div class="bg-cyan-900 font-custom1 text-white p-6 transform hover:scale-105  hover:shadow-xl transition duration-300">
          <img
            class="w-40 h-40 rounded-md mx-auto mb-4"
            src={Images1}
            alt="Supervisor 1"
          />
          <h3 class="text-xl font-semibold font-inter text-cyan-400">
            Dr. Dhani Bux Talpur
          </h3>
          <p class=" mb-4 font-custom2  text-cyan-200">Supervisor</p>
          <p class=" mb-4 ">
            Dr. Dhani Bux Talpur is the supervisor, overseeing the research team
            working on the Campus Insights System project and ensuring the
            highest standards across all facets of the project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 font-custom1 mt-10 ">
          {/* Team Member 1 */}
          <div className="bg-cyan-900 transform hover:scale-105 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src={Image2}
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold  text-cyan-400 ">
              Abdul Rehman Khan
            </h3>
            <p className="mb-4 text-cyan-200">Back-End Developer</p>
            <p className=" mb-4 text-white">
              Abdul Rehman Khan is back-end developer, back-end developer
              manages the server, database, and application logic to ensure
              smooth functionality.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-cyan-900 font-custom1  transform hover:scale-105  p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src={Image3}
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold  text-cyan-400">
              Muhammad Moosa
            </h3>
            <p className=" mb-4 text-cyan-200">Front-End Developer</p>
            <p className=" mb-4 text-white">
              Muhammad Moosa is front-end developer, front-end developer creates
              the websites user interface, making it visually appealing and easy
              to navigate.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-cyan-900 transform hover:scale-105 font-custom1 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src={Image4}
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold text-cyan-400">
              Zaheer Wassan
            </h3>
            <p className=" mb-4 text-cyan-200">Designer</p>
            <p className=" mb-4 text-white">
              Zaheer is the creative genius behind our design, bringing ideas to
              life with visual brilliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
