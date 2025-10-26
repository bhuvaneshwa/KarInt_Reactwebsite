export default function GraphicDesigning() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
              Graphic Design Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Creative Designs That
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Tell Your Story
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              From logos to complete brand identities, we create stunning visual designs that make your business memorable and professional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105 transform">
                <span className="flex items-center gap-3">
                  Start Designing
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Design Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete visual identity solutions for your brand
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Logo Design",
                  description: "Unique, memorable logos that perfectly represent your brand identity and values.",
                  color: "from-pink-400 to-rose-500"
                },
                {
                  icon: "📱",
                  title: "Brand Identity",
                  description: "Complete brand packages including colors, typography, and style guides.",
                  color: "from-purple-400 to-indigo-500"
                },
                {
                  icon: "📊",
                  title: "Print Design",
                  description: "Business cards, brochures, flyers, and other marketing materials.",
                  color: "from-blue-400 to-cyan-500"
                },
                {
                  icon: "🌐",
                  title: "Web Graphics",
                  description: "Website banners, icons, and digital assets for online presence.",
                  color: "from-green-400 to-emerald-500"
                },
                {
                  icon: "📢",
                  title: "Social Media",
                  description: "Eye-catching posts, stories, and covers for all social platforms.",
                  color: "from-orange-400 to-red-500"
                },
                {
                  icon: "📦",
                  title: "Packaging",
                  description: "Product packaging design that stands out on shelves and online.",
                  color: "from-violet-400 to-purple-500"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-3"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className={`w-full h-1 bg-gradient-to-r ${service.color} rounded-full mb-6`}></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Design Tools & Software
              </h2>
              <p className="text-xl text-gray-600">
                Professional-grade tools for exceptional results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "Photoshop", color: "from-blue-500 to-blue-700" },
                { name: "Illustrator", color: "from-orange-500 to-red-500" },
                { name: "InDesign", color: "from-pink-500 to-purple-500" },
                { name: "Figma", color: "from-purple-500 to-indigo-500" },
                { name: "Sketch", color: "from-yellow-500 to-orange-500" },
                { name: "CorelDRAW", color: "from-green-500 to-emerald-500" },
                { name: "After Effects", color: "from-purple-600 to-blue-600" },
                { name: "Canva Pro", color: "from-cyan-500 to-blue-500" },
                { name: "XD", color: "from-pink-500 to-red-500" },
                { name: "Procreate", color: "from-orange-400 to-pink-500" },
                { name: "Cinema 4D", color: "from-blue-600 to-indigo-600" },
                { name: "Blender", color: "from-orange-500 to-yellow-500" }
              ].map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                  <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Our Design Process
              </h2>
              <p className="text-xl text-gray-600">
                From concept to final delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Brief",
                  description: "Understanding your vision, goals, and design requirements."
                },
                {
                  step: "02", 
                  title: "Research",
                  description: "Market analysis, competitor study, and trend research."
                },
                {
                  step: "03",
                  title: "Concept",
                  description: "Initial ideas, sketches, and creative exploration."
                },
                {
                  step: "04",
                  title: "Design",
                  description: "Creating polished designs with attention to detail."
                },
                {
                  step: "05",
                  title: "Delivery",
                  description: "Final files in all required formats and sizes."
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Featured Work
              </h2>
              <p className="text-xl text-gray-600">
                Some of our recent design projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="h-64 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-purple-600/20 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Project {item}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Brand Identity Design
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Create
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Amazing Designs?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s bring your vision to life with stunning visual designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105 transform">
                Start Your Design
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}