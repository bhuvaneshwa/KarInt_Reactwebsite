import Founder from "../components/Founder";
import Testimonial from "../components/Testimonial";
import VisionMission from "../components/VisionMission";
import CountUp from 'react-countup';

export default function About() {
  return (
    <div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 1s ease forwards;
          }
        `}
      </style>

      {/* Intro Section */}
      <section className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-12 py-12 gap-8">
          {/* Text Section */}
          <div className="fade-in w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Where expertise converges with experience
            </h1>
            <p className="mt-6 text-base sm:text-lg text-justify">
              With the right blend of technology and skills, we have been offering premier IT consultancy to Fortune 500 companies. We promise superior performance, quality-focused approach, and world-class service delivery — while reducing overhead costs by approximately 70%.
            </p>
          </div>

          {/* Image Section */}
          <div className="fade-in w-full lg:w-1/2">
            <img
              src="/about-banner.jpg"
              alt="About KAR Infotech"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-20">
        <div className="container mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight italic text-center mb-12 leading-tight">
            <span className="text-[#f86a04]">The Impact</span> <br />
            &nbsp;&nbsp;&nbsp; We Have Made
          </h2>

          {/* Stats Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* Clients */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-8 shadow-md w-[250px] text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#f86a04]">
                <CountUp start={0} end={30} duration={2.5} suffix="+" />
              </p>
              <p className="text-base sm:text-lg mt-2">Clients</p>
            </div>

            {/* Projects */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-8 shadow-md w-[250px] text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#f86a04]">
                <CountUp start={0} end={70} duration={2.5} suffix="+" />
              </p>
              <p className="text-base sm:text-lg mt-2">Projects</p>
            </div>

            {/* Partners */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 sm:p-8 shadow-md w-[250px] text-center">
              <p className="text-4xl lg:text-5xl font-bold text-[#f86a04]">
                <CountUp start={0} end={30} duration={2.5} suffix="+" />
              </p>
              <p className="text-base sm:text-lg mt-2">Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <VisionMission />
      <Founder />
      <Testimonial />
    </div>
  );
}
