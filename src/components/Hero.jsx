import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % content.length);
        setFade(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, [content.length]);

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
          .transition-fade {
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
            opacity: 0;
            transform: translateY(20px);
          }
          .transition-fade.show {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

      <section
        className="relative text-white bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: 'url(/banner1.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 sm:px-6 md:px-12 pt-24 md:pt-32 text-center container mx-auto">
          <div className={`w-full max-w-5xl transition-fade ${fade ? "show" : ""}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              {content[currentIndex].heading}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-2 sm:px-4">
              {content[currentIndex].paragraph}
            </p>
            <div className="flex justify-center mt-8 gap-4">
              <Link to="/services">
              <button className="mt-8 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium tracking-wide text-white uppercase transition duration-300 transform bg-primary rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Get Started
            </button>
            </Link>
           
           <Link to="/contact">
            <button className="mt-8 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium tracking-wide text-white uppercase transition duration-300 transform bg-primary rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
             Contact Us
            </button>
            </Link>
              </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
