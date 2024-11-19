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

      <section className="dark:bg-gray-100 dark:text-white " >
        <div className="container bg-black flex flex-col lg:flex-row justify-between p-6 mx-auto">
          {/* Text Section (Now on the Left) */}
          <div
            className="flex flex-col justify-start p-10 text-center lg:max-w-md xl:max-w-lg lg:text-left w-full lg:w-1/2 fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Where expertise converges with experience
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 text-justify">
              With the right blend of technology and skills, we have been
              offering premier IT consultancy to Fortune 500 companies. We
              promise superior performance, quality-focused approach and
              world-class service delivery, while reducing overhead costs by
              approximately 70%.
            </p>
          </div>

          {/* Image Section (Now on the Right) */}
          <div
            className="flex items-start justify-start sm:h-80 lg:h-auto w-full lg:w-1/2 fade-in"
            style={{ animationDelay: "1s" }}
          >
            <img
              src="/about-banner.jpg"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>

      <section>
  <div className="bg-gray-200">
    {/* Section Header */}
    <div className="p-5 italic font-extralight text-center sm:px-10 md:px-20 lg:px-36 text-3xl sm:text-4xl md:text-5xl lg:text-[45px]">
      <h1 className="text-start">
        <span className="text-[#f86a04]">The Impact</span>
        <br />
        &nbsp;&nbsp;&nbsp; We Have Made
      </h1>
    </div>

    {/* Stats Section */}
    <div className="flex flex-wrap justify-center sm:justify-evenly lg:justify-end gap-4 md:gap-6 lg:gap-10 px-5 sm:px-10 md:px-20 lg:px-36 pb-10">
      {/* Clients */}
      <div className="border border-gray-400 p-6 md:p-8 rounded-lg bg-white shadow-md">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold leading-none lg:text-6xl text-[#f86a04]">
            <CountUp start={0} end={30} duration={2.5} suffix="+" />
          </p>
          <p className="text-base sm:text-lg">Clients</p>
        </div>
      </div>

      {/* Projects */}
      <div className="border border-gray-400 p-6 md:p-8 rounded-lg bg-white shadow-md">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold leading-none lg:text-6xl text-[#f86a04]">
            <CountUp start={0} end={70} duration={2.5} suffix="+" />
          </p>
          <p className="text-base sm:text-lg">Projects</p>
        </div>
      </div>

      {/* Awards */}
      {/* <div className="border border-gray-400 p-6 md:p-8 rounded-lg bg-white shadow-md">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold leading-none lg:text-6xl text-[#f86a04]">
            <CountUp start={0} end={200} duration={2.5} suffix="+" />
          </p>
          <p className="text-base sm:text-lg">Awards</p>
        </div>
      </div> */}

      {/* Partners */}
      <div className="border border-gray-400 p-6 md:p-8 rounded-lg bg-white shadow-md">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold leading-none lg:text-6xl text-[#f86a04]">
            <CountUp start={0} end={30} duration={2.5} suffix="+" />
          </p>
          <p className="text-base sm:text-lg">Partners</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <VisionMission/>
      <Founder/>
      <Testimonial/>
    </div>
  );
}
