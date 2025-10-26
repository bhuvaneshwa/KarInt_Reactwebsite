import React from "react";

export default function OurService() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc:
        "Modern, responsive web apps using React, Node and scalable architectures to help your business grow online.",
      cta: "Explore",
      features: ["Custom frontends", "API-driven backends", "Performance & SEO"],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "UI / UX Design",
      desc:
        "Beautiful, functional and user-centered designs that make your products stand out and engage users effectively.",
      cta: "View Design",
      features: ["Design systems", "Prototypes & testing", "Accessible UI"],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7h7l-5.5 4 2 7L12 16 4.5 20l2-7L1 9h7l3-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Services</h2>
          <p className="mt-2 text-gray-400 max-w-xl mx-auto">
            Solutions crafted to elevate your brand — practical, scalable, and built for growth.
          </p>
        </div>

        {/* single-column */}
        <div className="grid grid-cols-1 gap-6">
          {services.map((s, idx) => (
            <article
              key={s.id}
              className="relative flex gap-6 items-start bg-gradient-to-br from-white/2 to-white/1 border border-white/5 rounded-2xl p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-250"
              aria-labelledby={`service-${s.id}-title`}
            >
              {/* left accent */}
              <div
                className={`absolute left-0 top-3 bottom-3 w-1 rounded-l-2xl ${
                  idx === 0 ? "bg-primary" : "bg-primary/80"
                }`}
                aria-hidden
              />

              {/* icon + badge */}
              <div className="flex-shrink-0 z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-tr from-primary/10 to-primary/5 ring-1 ring-primary/20">
                  <div className="text-primary">{s.icon}</div>
                </div>
              </div>

              {/* content */}
              <div className="z-10 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 id={`service-${s.id}-title`} className="text-xl font-semibold leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-gray-300 text-sm max-w-prose">{s.desc}</p>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/3 text-gray-200 border border-white/6">
                      {s.features.length} features
                    </span>
                  </div>
                </div>

                <hr className="my-4 border-white/5" />

                {/* features */}
                <ul className="flex flex-wrap gap-2 mb-4">
                  {s.features.map((f, i) => (
                    <li
                      key={i}
                      className="inline-flex items-center gap-2 text-sm text-gray-300 bg-white/3 px-3 py-1 rounded-full border border-white/6"
                    >
                      <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    onClick={() => console.log("CTA:", s.title)}
                    aria-label={`${s.cta} for ${s.title}`}
                  >
                    {s.cta}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                  <div className="text-sm text-gray-400">Trusted by clients</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
