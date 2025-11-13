import React from "react";

export default function OurService() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc:
        "Modern, responsive web apps using React, Node, and scalable architectures to help your business grow online.",
      cta: "Explore",
      features: ["Custom frontends", "API-driven backends", "Performance & SEO"],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Digital Marketing",
      desc:
        "Strategic digital marketing solutions to boost your online presence, engage your audience, and drive measurable growth.",
      cta: "Learn More",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy"],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "E-Commerce Solutions",
      desc:
        "Complete e-commerce platforms with secure payments, inventory management, and seamless shopping experiences.",
      cta: "Get Started",
      features: ["Payment Integration", "Product Management", "Analytics & Reports"],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 bg-black text-white overflow-hidden">
      {/* 🌞 Animated Radiating Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-visible">
        <div className="relative w-[1200px] h-[1200px] flex justify-center items-center">
          {/* Glowing core */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#f86a04]/50 blur-3xl animate-pulse-soft"></div>

          {/* Rotating aura */}
          <div className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#f86a04]/20 via-[#ffb347]/10 to-transparent animate-spin-slow blur-2xl"></div>

          {/* Radiating rays */}
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[130%] bg-gradient-to-b from-[#f86a04]/50 to-transparent rounded-full opacity-60 blur-sm"
              style={{
                transform: `rotate(${i * 15}deg)`,
                transformOrigin: "center",
                animation: "rayPulse 5s ease-in-out infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes rayPulse {
            0%, 100% { opacity: 0.3; transform: scaleY(1) rotate(var(--angle)); }
            50% { opacity: 0.9; transform: scaleY(1.1) rotate(var(--angle)); }
          }

          @keyframes pulse-soft {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.05); opacity: 1; }
          }

          .animate-spin-slow {
            animation: spin-slow 90s linear infinite;
          }

          .animate-pulse-soft {
            animation: pulse-soft 6s ease-in-out infinite;
          }
        `}
      </style>

      {/* 🔹 Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-[#f86a04] font-extrabold tracking-tight">
            Our Services
          </h2>
          <p className="mt-2 text-gray-400 max-w-xl mx-auto">
            Solutions crafted to elevate your brand — practical, scalable, and built for growth.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-6 relative z-20">
          {services.map((s, idx) => (
            <article
              key={s.id}
              className="relative flex gap-6 items-start bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(248,106,4,0.2)] transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Left Accent */}
              <div
                className={`absolute left-0 top-3 bottom-3 w-1 rounded-l-2xl ${
                  idx === 0 ? "bg-[#f86a04]" : "bg-[#f86a04]/70"
                }`}
              />

              {/* Icon */}
              <div className="flex-shrink-0 z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#f86a04]/20 to-[#f86a04]/5 ring-1 ring-[#f86a04]/30">
                  <div className="text-[#f86a04]">{s.icon}</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="z-10 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-gray-300 text-sm max-w-prose">
                      {s.desc}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/10 text-gray-200 border border-white/10">
                      {s.features.length} features
                    </span>
                  </div>
                </div>

                <hr className="my-4 border-white/10" />

                {/* Features */}
                <ul className="flex flex-wrap gap-2 mb-4">
                  {s.features.map((f, i) => (
                    <li
                      key={i}
                      className="inline-flex items-center gap-2 text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full border border-white/10"
                    >
                      <svg
                        className="w-3 h-3 text-[#f86a04]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Our Services Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#f86a04] to-[#ff8c42] hover:from-[#ff8c42] hover:to-[#f86a04] text-white font-bold rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(248,106,4,0.4)] transform hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = '/services'}
          >
            <span className="text-lg">Our Services</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
