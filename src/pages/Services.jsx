import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Zap, Users, Star } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description:
        "We build stunning, fast, and secure websites that help businesses stand out online.",
      image: "https://source.unsplash.com/600x400/?web-development,code",
      link: "/services/web-development",
    },
    {
      id: 2,
      name: "Graphic Designing",
      description:
        "Creative logos, banners, and designs that make your brand look professional and attractive.",
      image: "https://source.unsplash.com/600x400/?graphic-design,creative",
      link: "/services/graphic-designing",
    },
    {
      id: 3,
      name: "Digital Marketing",
      description:
        "We help businesses grow online with social media, SEO, and ads that bring real results.",
      image:
        "https://source.unsplash.com/600x400/?digital-marketing,ads,socialmedia",
      link: "/services/digital-marketing",
    },
    {
      id: 4,
      name: "Software Development",
      description:
        "Custom software solutions tailored to make your business run smoother and smarter.",
      image: "https://source.unsplash.com/600x400/?software,development,technology",
      link: "/services/software-development",
    },
    {
      id: 5,
      name: "SEO (Search Engine Optimization)",
      description:
        "Want your website to show up on Google? We optimize your site to rank higher and get more visitors.",
      image: "https://source.unsplash.com/600x400/?seo,search-engine,ranking",
      link: "/services/seo",
    },
    {
      id: 6,
      name: "Social Media Management",
      description:
        "We manage your social media pages, create engaging content, and help attract more customers.",
      image: "https://source.unsplash.com/600x400/?social-media,instagram,facebook",
      link: "/services/social-media-management",
    },
    {
      id: 7,
      name: "E-commerce Solutions",
      description:
        "Start selling online with an easy-to-use and beautifully designed online store.",
      image: "https://source.unsplash.com/600x400/?ecommerce,shopping,online-store",
      link: "/services/ecommerce-solutions",
    },
    {
      id: 8,
      name: "Mobile App Development",
      description:
        "Get your own Android or iOS app that works smoothly and keeps your users engaged.",
      image: "https://source.unsplash.com/600x400/?mobile-app,android,ios",
      link: "/services/mobile-app-development",
    },
  ];

  const reasons = [
    {
      icon: <Zap className="w-6 h-6" aria-hidden />,
      title: "Fast Delivery",
      desc: "Agile workflows and clear milestones to ship sooner without surprises.",
    },
    {
      icon: <Shield className="w-6 h-6" aria-hidden />,
      title: "Secure by Design",
      desc: "Best practices baked in: HTTPS, auth, roles, backups, and audits.",
    },
    {
      icon: <Users className="w-6 h-6" aria-hidden />,
      title: "Dedicated Support",
      desc: "Direct access to the team via chat, email, and scheduled check-ins.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" aria-hidden />,
      title: "Proven Quality",
      desc: "Code reviews, testing, and performance budgets for reliable releases.",
    },
  ];

  const testimonials = [
    {
      name: "Aarav Kumar",
      role: "Founder, Kraftify",
      quote:
        "They transformed our website and our leads doubled in a month. Super smooth process!",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=68",
    },
    {
      name: "Nisha Patel",
      role: "Marketing Head, BloomSpa",
      quote:
        "Our SEO rankings jumped from page 3 to top 3 for multiple keywords. Highly recommend.",
      rating: 5,
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
      name: "Rahul Mehta",
      role: "CTO, ShopSwift",
      quote:
        "E‑commerce revamp was spot on: faster checkout, better UX, and higher conversions.",
      rating: 4,
      avatar: "https://i.pravatar.cc/100?img=12",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm text-white">
                <span className="h-2 w-2 rounded-full bg-[#f86a04]" />
                Transform ideas into usable products
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
                Your Growth,
                <span className="text-[#f86a04]"> Engineered</span>
              </h1>
              <p className="mt-4 text-white md:text-lg">
                Full‑stack services to design, build, and scale your product—websites, apps, and growth campaigns that actually convert.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-xl bg-[#f86a04] px-5 py-3 text-white font-medium shadow hover:bg-[#e65c00] focus:outline-none focus:ring-2 focus:ring-[#f86a04]/40"
                >
                  Get a Free Quote
                </Link>
                <Link
                  to="/portfolio"
                  className="rounded-xl border px-5 py-3 font-medium text-white hover:bg-gray-50"
                >
                  View Portfolio
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-white">
                <div className="flex items-center gap-2"><Shield className="w-4 h-4" /> 100% secure, NDA on request</div>
                <div className="flex items-center gap-2"><Zap className="w-4 h-4" /> Agile delivery</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-2">
                <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Our <span className="text-[#f86a04]">Services</span>
        </h2>
        <p className="text-black max-w-3xl mb-8">
          Pick exactly what you need—design, development, marketing, or an end‑to‑end product team. We plug into your roadmap and ship value fast.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition border border-gray-100"
            >
              <img
                src={service.image}
                alt={service.name}
                loading="lazy"
                className="w-full h-44 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold text-black">{service.name}</h3>
              <p className="text-gray-500 text-sm mt-1 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center justify-center rounded-lg bg-[#f86a04] text-white px-4 py-2 font-medium hover:bg-[#e65c00]"
              >
                Know More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl  text-black font-bold">
              Why choose <span className="text-[#f86a04]">our services?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl">
              We combine strategy, design, and engineering to deliver measurable business results—on time and within budget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-orange-100 p-2 text-[#f86a04]">{r.icon}</div>
                  <h3 className="font-semibold text-black">{r.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-600">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            What clients <span className="text-[#f86a04]">say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Real stories from teams we partnered with across design, development, and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <figcaption className="font-semibold leading-tight text-black">{t.name}</figcaption>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
              <blockquote className="mt-3 text-sm text-gray-700">“{t.quote}”</blockquote>
              <div className="mt-3 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-yellow-400" : "fill-gray-200"}`}
                  />
                ))}
              </div>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#f86a04] to-orange-600 p-8 md:p-12 text-white shadow-lg">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold">Ready to build something great?</h3>
              <p className="mt-2 text-white/90">
                Tell us about your goals and we’ll propose a clear, actionable plan in 24 hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-xl bg-white px-5 py-3 font-medium text-gray-900 hover:bg-white/90"
                >
                  Start Your Project
                </Link>
                <Link
                  to="/book-call"
                  className="rounded-xl border border-white/30 px-5 py-3 font-medium text-white hover:bg-white/10"
                >
                  Book a Discovery Call
                </Link>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" aria-hidden />
          </div>
        </div>
      </section>
    </div>
  );
}
