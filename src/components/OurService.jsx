import { useRef, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function OurService() {
  const serviceRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState({});
  const navigate = useNavigate(); // Hook to navigate programmatically

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

  const services = useMemo(
    () => [
      {
        title: "Digital Marketing",
        description:
          "Boost your brand’s online presence with our expert digital marketing services. From SEO and social media management to targeted ad campaigns, we help you connect with your audience and achieve measurable growth.",
        image: "/digital-marketing-banner.jpg", // Update with an appropriate image path
      },
      {
        title: "E-commerce Website",
        description:
          "Build an online store that stands out and drives sales effortlessly. From secure payment integration to user-friendly interfaces, we create tailored solutions. Make shopping easy, engaging, and scalable for growth.",
        image: "/E-commerce-banner.jpg",
      },
    ],
    []
  );

  const handleLearnMoreClick = () => {
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top of the page
  };

  return (
    <div>
      <style>
        {`
          .slide-in-right {
            opacity: 0;
            transform: translateX(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          .slide-in-right.visible {
            opacity: 1;
            transform: translateX(0);
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
            >
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-lg text-gray-800 mb-4">
                  {service.description}
                </p>
                <button
                  className="px-6 py-2 mt-4 text-lg font-semibold text-white bg-[#f86a04] hover:bg-[#e65c00]"
                  aria-label={`Learn more about ${service.title}`}
                  onClick={handleLearnMoreClick} // Redirect and scroll to top
                >
                  Learn More
                </button>
              </div>
              <div className="w-full md:w-1/3 h-48 md:h-auto mt-4 md:mt-0">
                <img
                  src={service.image}
                  alt={`${service.title} illustration`}
                  className="image-cover rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
