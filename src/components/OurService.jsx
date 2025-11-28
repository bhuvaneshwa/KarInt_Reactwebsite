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
      image: "/images/design-html-web-design-template-concept.jpg",
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
      image: "/images/social-media-marketing-concept-marketing-with-applications (1).jpg",
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
      image: "/images/laptop-excited-adult-buying-home-sitting.jpg",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 bg-black text-white overflow-hidden">
     
     

     

      {/* 🔹 Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-[#f86a04] font-extrabold tracking-tight">
            Our Servicess
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
              className="relative flex flex-col md:flex-row gap-6 items-start bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_40px_rgba(248,106,4,0.2)] transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Left Accent */}
              <div
                className={`absolute left-0 top-3 bottom-3 w-1 rounded-l-2xl ${
                  idx === 0 ? "bg-[#f86a04]" : "bg-[#f86a04]/70"
                }`}
              />

              {/* Image Section */}
              <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4 md:bottom-auto md:top-4 md:left-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#f86a04] to-[#ff8c42] shadow-lg">
                    <div className="text-white">{s.icon}</div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="z-10 flex-1 p-6">
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
