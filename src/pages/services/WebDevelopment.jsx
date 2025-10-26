export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Web Development Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Stunning Websites That
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              We build fast, secure, and visually stunning websites that help businesses stand out online and convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 transform">
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive web development solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎨",
                  title: "Custom Design",
                  description: "Unique, responsive designs that reflect your brand identity and engage your audience."
                },
                {
                  icon: "⚡",
                  title: "Fast Performance",
                  description: "Optimized for speed with lightning-fast loading times and smooth user experience."
                },
                {
                  icon: "🔒",
                  title: "Secure & Reliable",
                  description: "Built with security best practices and reliable hosting infrastructure."
                },
                {
                  icon: "📱",
                  title: "Mobile-First",
                  description: "Fully responsive designs that work perfectly on all devices and screen sizes."
                },
                {
                  icon: "🔍",
                  title: "SEO Optimized",
                  description: "Search engine friendly code and structure to help you rank higher on Google."
                },
                {
                  icon: "🛠️",
                  title: "Easy Management",
                  description: "User-friendly content management systems that make updates simple and quick."
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-3"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
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

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge technologies for modern web solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "React", color: "from-blue-400 to-blue-600" },
                { name: "Next.js", color: "from-gray-600 to-gray-800" },
                { name: "Vue.js", color: "from-green-400 to-green-600" },
                { name: "Angular", color: "from-red-400 to-red-600" },
                { name: "Node.js", color: "from-green-500 to-green-700" },
                { name: "Laravel", color: "from-red-500 to-orange-500" },
                { name: "WordPress", color: "from-blue-600 to-indigo-600" },
                { name: "Shopify", color: "from-green-600 to-emerald-600" },
                { name: "MongoDB", color: "from-green-500 to-green-700" },
                { name: "MySQL", color: "from-blue-500 to-blue-700" },
                { name: "AWS", color: "from-orange-400 to-orange-600" },
                { name: "Docker", color: "from-blue-400 to-cyan-500" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600">
                A proven methodology that delivers exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We understand your business goals, target audience, and project requirements through detailed consultation."
                },
                {
                  step: "02", 
                  title: "Design",
                  description: "Our designers create stunning mockups and prototypes that bring your vision to life."
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Our developers build your website using the latest technologies and best practices."
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "We thoroughly test, optimize, and launch your website with ongoing support and maintenance."
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Build Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dream Website?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 transform">
                Start Your Project
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