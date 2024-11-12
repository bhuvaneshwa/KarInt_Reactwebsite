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
      { threshold: 0.2 } // Adjusts how much of the section needs to be visible to trigger
    );

    serviceRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "01. Consulting",
      description:
        "We provide expert consulting services to help businesses achieve their goals with strategic insights and actionable plans.",
    },
    {
      title: "02. Development",
      description:
        "Our development team creates high-quality, scalable software solutions tailored to your needs, ensuring optimal performance and reliability.",
    },
    {
      title: "03. Design",
      description:
        "Our design experts bring your ideas to life with visually stunning and user-friendly designs that enhance user experience.",
    },
    {
      title: "04. Marketing",
      description:
        "We offer comprehensive marketing services to boost your brand's visibility and engagement, driving growth and customer loyalty.",
    },
    {
      title: "05. Support",
      description:
        "Our dedicated support team provides ongoing assistance to ensure your business operations run smoothly, every step of the way.",
    },
  ];

  return (
    <div>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in-up {
            opacity: 0;
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
            animation: fadeInUp 0.5s ease forwards;
          }
        `}
      </style>

      <div className="bg-gray-400 h-screen p-10 flex flex-col">
        <h1 className="text-6xl font-bold mb-8 text-center lg:text-left">
          Our Services
        </h1>
        <div className="flex flex-col text-3xl font-semibold ml-auto space-y-8 w-3/4 lg:w-1/2">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (serviceRefs.current[index] = el)}
              data-index={index}
              className={`fade-in-up ${
                visibleSections[index] ? "visible" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }} // Staggered delay
            >
              <h2 className="text-4xl font-bold mb-2">{service.title}</h2>
              <p className="text-lg text-gray-800">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
