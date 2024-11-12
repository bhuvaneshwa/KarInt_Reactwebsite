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

      <section className="dark:bg-gray-100 dark:text-white">
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
        <div className="p-5 italic font-extralight px-36 text-[45px]">
          <h1>
            <span className="text-[#f86a04]">The Impact</span>
            <br />
            We Have Made
          </h1>
        </div>
        <div className="flex flex-row justify-end px-36 gap-1 pb-10">
          <div className="border border-gray-400 p-8">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">
                <CountUp start={0} end={50} duration={2.5} suffix="+" />
              </p>
              <p className="text-sm sm:text-base">Clients</p>
            </div>
          </div>
          <div className="border border-gray-400 p-8">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">
                <CountUp start={0} end={100} duration={2.5} suffix="+" />
              </p>
              <p className="text-sm sm:text-base">Projects</p>
            </div>
          </div>
          <div className="border border-gray-400 p-8">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">
                <CountUp start={0} end={200} duration={2.5} suffix="+" />
              </p>
              <p className="text-sm sm:text-base">Awards</p>
            </div>
          </div>
          <div className="border border-gray-400 p-8">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">
                <CountUp start={0} end={300} duration={2.5} suffix="+" />
              </p>
              <p className="text-sm sm:text-base">Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
      <VisionMission/>
    </div>
  );
}
