import { useState, useEffect } from "react";

export default function Hero() {
  const content = [
    {
      heading: "Igniting Growth with Innovation and Technology",
      paragraph:
        "At KAR International Infotech, we combine creativity and advanced technology to drive exceptional results. Supercharge your success, optimize operations, and achieve rapid growth with our personalized, forward-focused solutions. Let’s transform your vision into reality.",
    },
    {
      heading: "Driving Success with Cutting-Edge Innovation",
      paragraph:
        "At KAR International Infotech, we blend creativity and advanced technology to deliver impactful results. Unlock new growth opportunities, enhance operational efficiency, and lead your industry with our tailored, forward-thinking solutions. Let’s build the future of your business together.",
    },
    {
      heading: "Catalyzing Success Through Pioneering Innovation",
      paragraph:
        "At KAR International Infotech, we seamlessly integrate visionary creativity with state-of-the-art technology to produce transformative results. Unleash unprecedented growth, optimize your operations, and redefine industry standards with our bespoke, cutting-edge solutions. Together, let’s shape the future of your business.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [content.length]);

  return (
    <div>
      {/* Inline Styles for Fade-In Keyframes */}
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
        <div className="container bg-black flex flex-col lg:flex-row items-start justify-between p-6 mx-auto">
          {/* Text Section */}
          <div
            className="flex flex-col justify-start p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left w-full lg:w-1/2 fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <h1 className="text-3xl font-bold leading-none sm:text-6xl">
              {content[currentIndex].heading}
            </h1>
            <p className="mt-12 text-sm  mb-8 text-justify sm:mb-12 ">
              {content[currentIndex].paragraph}
            </p>
           
          </div>

          {/* Image Section */}
          <div
            className="flex items-start justify-start sm:h-80 lg:h-auto w-full lg:w-1/2 fade-in"
            style={{ animationDelay: "1s" }}
          >
            <img
              src="/banner1.jpg"
              alt="Hero Banner"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
