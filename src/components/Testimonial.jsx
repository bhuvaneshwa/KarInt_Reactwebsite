import { useState, useEffect } from "react";
import Kskb from "../images/01.jpg";
import Pred from "../images/02.jpg";
import client03 from "../images/clients/03.png";
import client05 from "../images/clients/05.jpg";
import client07 from "../images/clients/07.jpg";
import client09 from "../images/clients/09.jpg";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "KAR International Infotech has transformed our online presence with a professional and seamless website. Their expertise and commitment to quality service are truly commendable.",
      name: "Mr. K Seenivasen – Ex-Army",
      position: "Owner, KSKN Matrimony",
      image: Kskb,
    },
    {
      id: 2,
      text: "The team at KAR International Infotech understands client needs perfectly. Their innovative approach and technical skills helped us establish a strong digital presence!",
      name: "Mr. Saravana Kumar Arunachalam",
      position: "Owner, SK Predictions",
      image: Pred,
    },
    {
      id: 3,
      text: "Outstanding service! KAR International Infotech delivered our e-commerce platform ahead of schedule with exceptional quality. Their support team is always responsive and helpful.",
      name: "Ms. Priya Rajendran",
      position: "CEO, Fashion Hub India",
      image: client03,
    },
    {
      id: 4,
      text: "We partnered with KAR International Infotech for our digital marketing campaign, and the results exceeded our expectations. Our online visibility increased by 300%!",
      name: "Mr. Arun Kumar",
      position: "Marketing Director, TechVision Solutions",
      image: client05,
    },
    {
      id: 5,
      text: "The custom ERP solution developed by KAR International Infotech has streamlined our entire business operations. Highly professional and reliable team!",
      name: "Mr. Vijay Mohan",
      position: "Managing Director, Global Logistics Ltd",
      image: client07,
    },
    {
      id: 6,
      text: "Excellent work on our mobile app development! The team was professional, communicative, and delivered a product that our customers love. Highly recommended!",
      name: "Ms. Sneha Desai",
      position: "Founder, HealthCare Plus",
      image: client09,
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get two testimonials to display
  const getVisibleTestimonials = () => {
    const first = testimonials[currentIndex];
    const second = testimonials[(currentIndex + 1) % testimonials.length];
    return [first, second];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div>
      <section className="my-8 bg-gray-100 py-12 px-4 sm:px-6 lg:px-10">
        <div className="container mx-auto flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            What our customers are saying about us
          </h1>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-500">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 md:p-8 relative animate-fadeIn">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 text-primary"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>

                <p className="px-6 py-4 text-base sm:text-lg italic text-gray-700">
                  {testimonial.text}
                </p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 text-primary"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>

              <span className="w-12 h-1 my-4 rounded-lg bg-primary"></span>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mb-2"
              />
              <p className="text-gray-900 font-semibold text-center">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500 text-center">
                {testimonial.position}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 2, 4].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-primary w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index / 2 + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
