import { useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered((s) => !s);

  return (
    <section className="relative bg-[#0d0d0d] text-white min-h-screen overflow-hidden">
      <style>
        {`
        @keyframes spinEarth {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 80px 30px rgba(248,106,4,0.25), inset 0 0 50px rgba(255,180,100,0.2); }
          50% { box-shadow: 0 0 130px 50px rgba(255,130,20,0.35), inset 0 0 70px rgba(255,200,120,0.35); }
        }

        .earth-sun {
          background: radial-gradient(circle at 30% 30%, #ff9b00 0%, #f86a04 40%, #3b0000 100%);
          background-blend-mode: screen;
          animation: spinEarth 40s linear infinite, pulseGlow 6s ease-in-out infinite;
          filter: saturate(1.4);
        }

        .ray {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 14px;
          height: 130%;
          background: linear-gradient(180deg, rgba(248,106,4,0.5), rgba(255,200,100,0));
          transform-origin: center -50%;
          border-radius: 6px;
          opacity: 0;
          filter: blur(8px);
          transition: opacity 350ms ease, transform 350ms ease;
        }
        .ray.show { opacity: 1; transform: scale(1.08) rotate(var(--r)); }

        .earth-label {
          position: absolute;
          padding: 10px 14px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          font-size: 0.9rem;
          border-radius: 9999px;
          opacity: 0;
          transform: translateY(6px) scale(0.95);
          transition: opacity 400ms ease, transform 400ms ease;
          white-space: nowrap;
        }
        .earth-label.show { opacity: 1; transform: translateY(0) scale(1); }

        .hover-text {
          position: absolute;
          color: #ffffff;
          font-size: 1.2rem;
          letter-spacing: 1px;
          font-weight: 500;
          text-transform: uppercase;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .hover-text.hide {
          opacity: 0;
          transform: scale(0.9);
        }

        @media (max-width: 767px) {
          .ray, .earth-label { display: none; }
        }
      `}
      </style>

      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-6 md:px-12 pt-32 pb-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-8">
            Igniting Growth with{" "}
            <span className="text-[#f86a04]">Innovation and Technology</span>
          </h1>

          <p className="text-gray-300 text-lg mb-6 max-w-xl">
            Empower your business through digital transformation.  
            KAR International Infotech leads innovation by blending  
            technology, creativity, and data-driven strategies.
          </p>

          <p className="text-gray-400 text-base mb-8">
            From AI-driven automation to global infrastructure management —  
            we fuel your progress with cutting-edge solutions that  
            evolve with the speed of the future.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/services">
              <button className="px-10 py-4 text-base font-semibold uppercase bg-[#f86a04] text-white rounded-md hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f86a04]/50">
                Get Started
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-10 py-4 text-base font-semibold uppercase border-2 border-[#f86a04] text-[#f86a04] rounded-md hover:bg-[#f86a04] hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f86a04]/50">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Sun-Like Earth */}
        <div className="hidden md:flex justify-center items-start w-full md:w-1/2 mt-12 md:mt-0">
          <div
            className="relative w-[550px] h-[550px] flex justify-center items-center mt-10"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              role="button"
              tabIndex={0}
              onFocus={() => setHovered(true)}
              onBlur={() => setHovered(false)}
              onClick={toggleHover}
              className="relative w-[480px] h-[480px] rounded-full flex justify-center items-center cursor-pointer"
              style={{
                transition: "transform 300ms ease",
                transform: hovered ? "scale(1.05)" : "scale(1)",
              }}
            >
              {/* Rays */}
              {[...Array(16)].map((_, i) => (
                <span
                  key={i}
                  className={`ray ${hovered ? "show" : ""}`}
                  style={{
                    transform: `rotate(${i * 22.5}deg)`,
                    ["--r"]: `${i * 22.5}deg`,
                    transitionDelay: `${i * 20}ms`,
                    height: `${100 + i * 4}%`,
                  }}
                />
              ))}

              {/* Sun-like surface */}
              <div
                className="earth-sun rounded-full border-4 border-[#f86a04]/40"
                style={{
                  width: "420px",
                  height: "420px",
                  boxShadow: hovered
                    ? "0 0 160px 40px rgba(248,106,4,0.4)"
                    : "0 0 80px 20px rgba(248,106,4,0.25)",
                  transition: "box-shadow 400ms ease",
                }}
              />

              {/* Center “Hover me” text */}
              <div className={`hover-text ${hovered ? "hide" : ""}`}>
                Hover Me
              </div>

              {/* 8 Labels */}
              {[
                { label: "Cloud Solutions", top: "-40px", left: "50%", transform: "translateX(-50%)" },
                { label: "AI & Automation", top: "60px", right: "-90px" },
                { label: "Data Analytics", top: "180px", right: "-110px" },
                { label: "Cybersecurity", bottom: "180px", right: "-100px" },
                { label: "App Development", bottom: "60px", right: "-80px" },
                { label: "24/7 Support", bottom: "-40px", left: "50%", transform: "translateX(-50%)" },
                { label: "Digital Marketing", bottom: "60px", left: "-110px" },
                { label: "Global Strategy", top: "100px", left: "-100px" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`earth-label ${hovered ? "show" : ""}`}
                  style={{
                    position: "absolute",
                    top: item.top,
                    bottom: item.bottom,
                    left: item.left,
                    right: item.right,
                    transform: item.transform,
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
