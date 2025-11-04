import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, Globe, Smartphone, Code, Star } from "lucide-react";

export default function Portfolio() {
  const categories = ["All", "Web", "Mobile", "Design", "Marketing"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Kraftify Ecommerce",
      category: "Web",
      desc: "A scalable e-commerce platform built with React, Node.js, and Stripe integration for seamless checkout.",
      image: "https://source.unsplash.com/600x400/?ecommerce,web",
      link: "#",
    },
    {
      id: 2,
      title: "BloomSpa Website",
      category: "Design",
      desc: "A clean, modern wellness brand website focused on UX, SEO, and lead generation.",
      image: "https://source.unsplash.com/600x400/?spa,website,design",
      link: "#",
    },
    {
      id: 3,
      title: "ShopSwift App",
      category: "Mobile",
      desc: "A React Native shopping app with Firebase backend and real-time notifications.",
      image: "https://source.unsplash.com/600x400/?mobile-app,shopping",
      link: "#",
    },
    {
      id: 4,
      title: "VisionTech Software",
      category: "Web",
      desc: "Enterprise software dashboard using Laravel and React for analytics and data visualization.",
      image: "https://source.unsplash.com/600x400/?dashboard,analytics,code",
      link: "#",
    },
    {
      id: 5,
      title: "SkyLink Digital Campaign",
      category: "Marketing",
      desc: "SEO and PPC campaign that boosted client traffic by 180% within three months.",
      image: "https://source.unsplash.com/600x400/?digital-marketing,seo",
      link: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div  className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-black"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center text-gray-900">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
          >
            Our <span className="text-[#f86a04]">Portfolio</span>
          </motion.h1>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Explore our latest projects that combine creativity, technology, and
            results — built for modern businesses that want to scale.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mt-4 px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === cat
                ? "bg-[#f86a04] text-white border-[#f86a04]"
                : "bg-white text-gray-700 border-gray-200 hover:border-[#f86a04]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                <Link
                  to={project.link}
                  className="text-[#f86a04] font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
          What Our Clients <span className="text-[#f86a04]">Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Aarav Kumar",
              feedback:
                "They delivered our app ahead of schedule and the design is absolutely flawless.",
              rating: 5,
            },
            {
              name: "Nisha Patel",
              feedback:
                "Our traffic grew massively after their marketing campaign — amazing team!",
              rating: 5,
            },
            {
              name: "Rahul Mehta",
              feedback:
                "Reliable, creative, and responsive. Highly recommend for any tech project.",
              rating: 4,
            },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-3">
                <Star className="text-yellow-400 fill-yellow-400" />
                <p className="font-semibold text-black">{t.name}</p>
              </div>
              <p className="text-gray-700 text-sm italic">“{t.feedback}”</p>
              <div className="mt-3 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating ? "fill-yellow-400" : "fill-gray-200"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#f86a04] to-orange-600 p-10 md:p-14 text-white text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Let's Build Your Next Project Together
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Whether it's a website, an app, or a digital campaign — we bring
              your ideas to life with precision and creativity.
            </p>
            <Link
              to="/contact"
              className="rounded-xl bg-white px-6 py-3 font-medium text-gray-900 hover:bg-white/90"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
