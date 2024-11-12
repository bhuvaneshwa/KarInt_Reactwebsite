import { useState, useEffect } from "react";

const slides = [
  { image: "assets/images/slide1.jpg", text: "Welcome to Our Website" },
  { image: "assets/images/slide2.jpg", text: "Discover Our Products" },
  { image: "assets/images/slide3.jpg", text: "Contact Us for More Info" },
];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Slide changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {slide.text}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}
