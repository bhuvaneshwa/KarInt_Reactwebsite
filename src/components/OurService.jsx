import { useRef, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export default function OurService() {
  const serviceRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
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
        image: "/digital-marketing-banner.jpg",
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      <div className="bg-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-20">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#f86a04] font-extralight italic mb-10 text-center lg:text-left">
            Our <br /> <span className="text-black">Services</span>
          </h1>

          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceRefs.current[index] = el)}
                data-index={index}
                className={`slide-in-right ${
                  visibleSections[index] ? "visible" : ""
                } bg-white p-6 shadow-lg border border-gray-200 flex flex-col md:flex-row items-center hover:border-l-4 hover:border-[#f86a04]`}
              >
                <div className="w-full md:w-2/3 mb-4 md:mb-0 md:pr-6">
                  <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-800 mb-4">
                    {service.description}
                  </p>
                  <button
                    className="px-5 py-2 text-sm sm:text-base font-semibold text-white bg-[#f86a04] hover:bg-[#e65c00] rounded"
                    onClick={handleLearnMoreClick}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                  </button>
                </div>
                <div className="w-full md:w-1/3 h-48 md:h-56">
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
    </div>
  );
}
