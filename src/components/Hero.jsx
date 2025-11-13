import { Link } from "react-router-dom";

export default function Hero() {

  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden">
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
          background: 
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 5%),
            radial-gradient(circle at 30% 30%, #ffb347 0%, #ff9b00 25%, #f86a04 50%, #d45a00 75%, #1a0000 100%);
          background-blend-mode: screen;
          animation: spinEarth 40s linear infinite, pulseGlow 6s ease-in-out infinite;
          filter: saturate(1.4);
          position: relative;
          transform-style: preserve-3d;
          box-shadow: 
            inset -40px -40px 80px rgba(0, 0, 0, 0.5),
            inset 20px 20px 60px rgba(255, 180, 100, 0.3),
            0 0 120px 30px rgba(248, 106, 4, 0.35),
            0 0 200px 60px rgba(248, 106, 4, 0.15);
        }
        
        .earth-sun::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 10%;
          width: 35%;
          height: 35%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(20px);
          animation: shimmer 4s ease-in-out infinite;
        }
        
        .earth-sun::after {
          content: '';
          position: absolute;
          bottom: 15%;
          right: 15%;
          width: 40%;
          height: 40%;
          background: radial-gradient(circle, rgba(0, 0, 0, 0.6) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(25px);
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }


        .earth-label {
          position: absolute;
          padding: 10px 14px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          font-size: 0.9rem;
          border-radius: 9999px;
          opacity: 1;
          transform: translateY(0) scale(1);
          white-space: nowrap;
        }


        @media (max-width: 767px) {
          .earth-label { display: none; }
        }
      `}
      </style>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 pt-2 pb-16 min-h-screen">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
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
        <div className="hidden md:flex justify-center items-center w-full md:w-1/2">
          <div className="relative w-[550px] h-[550px] flex justify-center items-center">
            <div className="relative w-[480px] h-[480px] rounded-full flex justify-center items-center">
              {/* 3D Sphere */}
              <div
                className="earth-sun rounded-full"
                style={{
                  width: "420px",
                  height: "420px",
                  transform: "perspective(1000px) rotateX(5deg) rotateY(-5deg)",
                  border: "2px solid rgba(248, 106, 4, 0.3)",
                }}
              />
              
              {/* Orbital Ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "500px",
                  height: "500px",
                  border: "2px solid rgba(248, 106, 4, 0.2)",
                  transform: "perspective(1000px) rotateX(75deg)",
                  animation: "spin 20s linear infinite",
                }}
              />
              
              {/* Inner Glow Ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: "380px",
                  height: "380px",
                  border: "1px solid rgba(255, 180, 100, 0.3)",
                  boxShadow: "inset 0 0 40px rgba(248, 106, 4, 0.4)",
                }}
              />

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
                  className="earth-label"
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
