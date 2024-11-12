import { useRef, useEffect, useState } from "react";

export default function OurService() {
  const serviceRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prevVisibleSections) => ({
              ...prevVisibleSections,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    serviceRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Website Design",
      description:
        "We craft visually stunning, user-friendly websites that engage and retain visitors. Our designs focus on seamless navigation and brand alignment. Let us transform your vision into a digital masterpiece.",
      image: "/careers-banner.jpg",
    },
    {
      title: "E-commerce Website",
      description:
        "Build an online store that stands out and drives sales effortlessly. From secure payment integration to user-friendly interfaces, we create tailored solutions. Make shopping easy, engaging, and scalable for growth.",
      image: "/careers-banner.jpg",
    },
    // Add other services here
  ];

  return (
    <div>
      <style>
        {`
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .slide-in-right {
            opacity: 0;
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          .slide-in-right.visible {
            opacity: 1;
            transform: translateX(0);
            animation: slideInRight 0.8s ease forwards;
          }
          .image-cover {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>

      <div className="bg-gray-200 min-h-screen p-10 flex flex-col">
        <h1 className="text-6xl text-[#f86a04] font-extralight px-20 italic mb-8 text-center lg:text-left">
          Our <br /> <span className="text-black">Services</span>
        </h1>
        <div className="flex flex-col text-xl font-extralight ml-auto space-y-8 w-3/4 lg:w-1/2">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              data-index={index}
              className={`slide-in-right ${
                visibleSections[index] ? "visible" : ""
              } bg-white p-6 shadow-lg border-gray-200 flex flex-col md:flex-row items-center hover:border-l-4 hover:border-[#f86a04] space-x-4`}
              style={{ animationDelay: `${index * 0.4}s` }}  // Adjusted delay for smoother transition
            >
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-lg text-gray-800 mb-4">{service.description}</p>
                <button className="px-6 py-2 mt-4 text-lg font-semibold text-white bg-[#f86a04] rounded-md hover:bg-[#e65c00]">
                  Learn More
                </button>
              </div>
              <div className="w-1/3 h-full mt-4 md:mt-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="image-cover "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
