import React from "react";

export default function GraphicDesigning() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section (black) */}
      <section className="relative py-20 overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]"
          aria-hidden
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
              <span className="w-2 h-2 bg-[#f86a04] rounded-full animate-pulse"></span>
              Graphic Design Services
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Creative Designs That
              <span className="block bg-gradient-to-r from-[#f86a04] via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Tell Your Story
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              From logos to complete brand identities, we create stunning visual designs that make your business memorable and professional.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#f86a04] to-orange-500 rounded-2xl font-bold text-white shadow-lg hover:shadow-orange-400/30 transition-all duration-500 hover:scale-105 transform">
                <span className="flex items-center gap-3">
                  Start Designing
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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

      {/* Services Grid */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-6">
                Design Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Complete visual identity solutions for your brand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Logo Design",
                  description: "Unique, memorable logos that perfectly represent your brand identity and values.",
                },
                {
                  icon: "📱",
                  title: "Brand Identity",
                  description: "Complete brand packages including colors, typography, and style guides.",
                },
                {
                  icon: "📊",
                  title: "Print Design",
                  description: "Business cards, brochures, flyers, and other marketing materials.",
                },
                {
                  icon: "🌐",
                  title: "Web Graphics",
                  description: "Website banners, icons, and digital assets for online presence.",
                },
                {
                  icon: "📢",
                  title: "Social Media",
                  description: "Eye-catching posts, stories, and covers for all social platforms.",
                },
                {
                  icon: "📦",
                  title: "Packaging",
                  description: "Product packaging design that stands out on shelves and online.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-3"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* subtle brand bar */}
                  <div className="w-full h-1 bg-gradient-to-r from-[#f86a04] to-[#f86a04]/60 rounded-full mb-6"></div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-6">
                Design Tools & Software
              </h2>
              <p className="text-xl text-gray-700">Professional-grade tools for exceptional results</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "Photoshop" },
                { name: "Illustrator" },
                { name: "InDesign" },
                { name: "Figma" },
                { name: "Sketch" },
                { name: "CorelDRAW" },
                { name: "After Effects" },
                { name: "Canva Pro" },
                { name: "XD" },
                { name: "Procreate" },
                { name: "Cinema 4D" },
                { name: "Blender" },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[#f86a04] to-orange-400 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-6">
                Our Design Process
              </h2>
              <p className="text-xl text-gray-700">From concept to final delivery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Brief", description: "Understanding your vision, goals, and design requirements." },
                { step: "02", title: "Research", description: "Market analysis, competitor study, and trend research." },
                { step: "03", title: "Concept", description: "Initial ideas, sketches, and creative exploration." },
                { step: "04", title: "Design", description: "Creating polished designs with attention to detail." },
                { step: "05", title: "Delivery", description: "Final files in all required formats and sizes." },
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#f86a04] to-orange-400 bg-clip-text text-transparent mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
                  </div>

                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg className="w-6 h-6 text-[#f86a04]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-6">Featured Work</h2>
              <p className="text-xl text-gray-700">Some of our recent design projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <div className="h-64 bg-gradient-to-br from-[#f86a04]/10 to-[#f86a04]/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Project {item}</h3>
                    <p className="text-gray-600 text-sm">Brand Identity Design</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (black) */}
      <section className="py-20 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Create
              <span className="block bg-gradient-to-r from-[#f86a04] via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Amazing Designs?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">Let's bring your vision to life with stunning visual designs.</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#f86a04] to-orange-500 rounded-2xl font-bold text-white shadow-lg hover:shadow-orange-400/30 transition-all duration-500 hover:scale-105 transform">
                Start Your Design
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                Get Free Quote
              </button>
            </div>
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
              <ul className="mt-2 text-gray-300 space-y-1"><li>Web Development</li><li>Graphic Design</li><li>Branding</li></ul>
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
