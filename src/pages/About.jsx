import Founder from "../components/Founder";
import Testimonial from "../components/Testimonial";
import VisionMission from "../components/VisionMission";


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
      <section className="bg-gray-100 text-black dark:bg-black dark:text-white">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-12 py-12 gap-8">
          {/* Text Section */}
          <div className="fade-in w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Where expertise <span className="text-[#f86a04] capitalize">converges</span> with 
              <span className="text-[#f86a04]">  experience</span>
            
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
      

   

      {/* Additional Sections */}
      <VisionMission />
    

      <Founder />
      <Testimonial />
    </div>
  );
}
