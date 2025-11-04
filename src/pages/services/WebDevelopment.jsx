import React from "react";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]" aria-hidden />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
              <span className="w-2 h-2 bg-[#f86a04] rounded-full animate-pulse"></span>
              Web Development Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Stunning Websites That
              <span className="block bg-gradient-to-r from-[#f86a04] via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              We build fast, secure, and visually stunning websites that help businesses stand out online and convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#f86a04] to-orange-500 rounded-2xl font-bold text-white shadow-lg hover:shadow-orange-400/30 transition-all duration-500 hover:scale-105 transform">
                <span className="flex items-center gap-3">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-6">What We Offer</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">Comprehensive web development solutions tailored to your business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "🎨", title: "Custom Design", desc: "Unique, responsive designs that reflect your brand identity and engage your audience." },
                { icon: "⚡", title: "Fast Performance", desc: "Optimized for speed with lightning-fast loading times and smooth user experience." },
                { icon: "🔒", title: "Secure & Reliable", desc: "Built with security best practices and reliable hosting infrastructure." },
                { icon: "📱", title: "Mobile-First", desc: "Fully responsive designs that work perfectly on all devices and screen sizes." },
                { icon: "🔍", title: "SEO Optimized", desc: "Search engine friendly code and structure to help you rank higher on Google." },
                { icon: "🛠️", title: "Easy Management", desc: "User-friendly content management systems that make updates simple and quick." }
              ].map((s, i) => (
                <div key={i} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-3">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Our Development Process</h2>
              <p className="text-xl text-gray-700">A proven methodology that delivers exceptional results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We understand your business goals, target audience, and project requirements through detailed consultation." },
                { step: "02", title: "Design", description: "Our designers create stunning mockups and prototypes that bring your vision to life." },
                { step: "03", title: "Development", description: "Our developers build your website using the latest technologies and best practices." },
                { step: "04", title: "Launch", description: "We thoroughly test, optimize, and launch your website with ongoing support and maintenance." }
              ].map((p, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-[#f86a04] to-orange-400 bg-clip-text text-transparent mb-4">{p.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{p.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{p.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg className="w-8 h-8 text-[#f86a04]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Case Studies</h2>
              <p className="text-gray-700">Real results from our recent projects.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[{
                title: 'Kraftify Ecommerce',
                result: '+120% revenue in 3 months',
                summary: 'Complete rework of UX, checkout optimization, and performance tuning.'
              },{
                title: 'SkyLink Campaign',
                result: '+180% traffic in 90 days',
                summary: 'SEO + PPC combined strategy with content and landing page improvements.'
              }].map((c, idx) => (
                <div key={idx} className="bg-gradient-to-r from-yellow-50 to-[#f86a04]/10 rounded-2xl p-6 shadow-md">
                  <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                  <div className="text-sm text-[#f86a04] font-semibold mb-2">{c.result}</div>
                  <p className="text-gray-700">{c.summary}</p>
                  <div className="mt-4"><button className="px-4 py-2 rounded-full bg-[#f86a04] text-white font-medium">Read Case Study</button></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-700">Cutting-edge technologies for modern web solutions</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "React", color: "from-[#61dafb] to-[#21a1f1]" },
                { name: "Next.js", color: "from-gray-600 to-gray-800" },
                { name: "Vue.js", color: "from-green-400 to-green-600" },
                { name: "Angular", color: "from-red-400 to-red-600" },
                { name: "Node.js", color: "from-green-500 to-green-700" },
                { name: "Laravel", color: "from-[#f86a04] to-orange-500" },
                { name: "WordPress", color: "from-blue-600 to-indigo-600" },
                { name: "Shopify", color: "from-green-600 to-emerald-600" },
                { name: "MongoDB", color: "from-green-500 to-green-700" },
                { name: "MySQL", color: "from-blue-500 to-blue-700" },
                { name: "AWS", color: "from-orange-400 to-orange-600" },
                { name: "Docker", color: "from-blue-400 to-cyan-500" }
              ].map((tech, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Pricing</h2>
            <p className="text-gray-700">Simple, transparent pricing to suit startups and growing teams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              name: 'Starter',
              price: '₹25,000',
              perks: ['Landing page','Basic SEO','1 month support']
            },{
              name: 'Growth',
              price: '₹75,000',
              perks: ['Custom website','SEO & Analytics','3 months support']
            },{
              name: 'Enterprise',
              price: 'Custom',
              perks: ['Enterprise solutions','Dedicated team','SLA & Support']
            }].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md text-center">
                <h3 className="font-semibold text-xl mb-2">{p.name}</h3>
                <div className="text-3xl font-bold text-[#f86a04] mb-4">{p.price}</div>
                <ul className="text-gray-600 mb-6 space-y-2">{p.perks.map((perk, idx) => <li key={idx}>• {perk}</li>)}</ul>
                <button className="px-6 py-3 rounded-full bg-[#f86a04] text-white font-medium">Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700">Answers to common questions about our services and process.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[{
              q: 'How long does it take to build a website?',
              a: 'Typical timeline is 4-8 weeks for a standard website depending on complexity.'
            },{
              q: 'Do you offer maintenance?',
              a: 'Yes — we offer monthly maintenance plans and ad-hoc support.'
            },{
              q: 'Can you help with content and SEO?',
              a: 'Absolutely — we provide content strategy and SEO as part of growth packages.'
            }].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl p-5 shadow-sm">
                <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-700">Tell us about your project and we will get back within 24 hours.</p>
          </div>

          <form className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
            <input className="p-4 rounded-lg border border-gray-200" placeholder="Your name" />
            <input className="p-4 rounded-lg border border-gray-200" placeholder="Email" />
            <input className="p-4 rounded-lg border border-gray-200" placeholder="Budget (optional)" />
            <textarea className="p-4 rounded-lg border border-gray-200" rows={5} placeholder="Project details"></textarea>
            <div className="flex justify-center"><button type="submit" className="px-6 py-3 bg-[#f86a04] text-white rounded-full font-medium">Send Message</button></div>
          </form>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 shadow-md flex items-center gap-4">
            <div className="flex-1">
              <h4 className="font-semibold text-lg">Join our newsletter</h4>
              <p className="text-gray-600 text-sm">Get monthly tips on product, growth, and web best practices.</p>
            </div>
            <div className="flex gap-2"><input className="p-3 rounded-full border border-gray-200" placeholder="Your email" /><button className="px-4 py-3 bg-[#f86a04] text-white rounded-full font-medium">Subscribe</button></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg">Company</h3>
              <p className="text-gray-300 mt-2">Building digital products that users love.</p>
            </div>
            <div>
              <h4 className="font-semibold">Services</h4>
              <ul className="mt-2 text-gray-300 space-y-1"><li>Web Development</li><li>Mobile Apps</li><li>Design</li></ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <p className="text-gray-300 mt-2">hello@company.com</p>
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Company. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
