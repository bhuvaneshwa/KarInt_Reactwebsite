export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-900 via-blue-900 to-teal-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Digital Marketing Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Grow Your Business
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Online
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Comprehensive digital marketing strategies that drive traffic, generate leads, and increase sales for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 transform">
                <span className="flex items-center gap-3">
                  Get More Customers
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                Free Strategy Call
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
                Digital Marketing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete digital marketing solutions to grow your online presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Social Media Marketing",
                  description: "Engage your audience on Facebook, Instagram, LinkedIn, and other platforms.",
                  color: "from-blue-400 to-indigo-500"
                },
                {
                  icon: "🔍",
                  title: "Search Engine Optimization",
                  description: "Rank higher on Google and drive organic traffic to your website.",
                  color: "from-green-400 to-emerald-500"
                },
                {
                  icon: "💡",
                  title: "Pay-Per-Click Advertising",
                  description: "Google Ads and social media advertising for immediate results.",
                  color: "from-yellow-400 to-orange-500"
                },
                {
                  icon: "📧",
                  title: "Email Marketing",
                  description: "Nurture leads and retain customers with targeted email campaigns.",
                  color: "from-purple-400 to-pink-500"
                },
                {
                  icon: "📈",
                  title: "Content Marketing",
                  description: "Valuable content that attracts and converts your target audience.",
                  color: "from-teal-400 to-cyan-500"
                },
                {
                  icon: "📊",
                  title: "Analytics & Reporting",
                  description: "Data-driven insights to optimize your marketing performance.",
                  color: "from-red-400 to-pink-500"
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

      {/* Marketing Platforms */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Platforms We Master
              </h2>
              <p className="text-xl text-gray-600">
                We&apos;re experts on all major digital marketing platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "Google Ads", color: "from-blue-500 to-green-500" },
                { name: "Facebook", color: "from-blue-600 to-blue-800" },
                { name: "Instagram", color: "from-pink-500 to-purple-600" },
                { name: "LinkedIn", color: "from-blue-700 to-indigo-800" },
                { name: "YouTube", color: "from-red-500 to-red-700" },
                { name: "Twitter", color: "from-blue-400 to-blue-600" },
                { name: "TikTok", color: "from-gray-800 to-pink-600" },
                { name: "Pinterest", color: "from-red-400 to-pink-500" },
                { name: "Mailchimp", color: "from-yellow-400 to-orange-500" },
                { name: "HubSpot", color: "from-orange-500 to-red-500" },
                { name: "Shopify", color: "from-green-500 to-emerald-600" },
                { name: "WordPress", color: "from-blue-600 to-indigo-700" }
              ].map((platform, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                  <h3 className="font-semibold text-gray-900 text-sm">{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Our Marketing Process
              </h2>
              <p className="text-xl text-gray-600">
                Strategic approach that delivers measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Strategy",
                  description: "Research your market, competitors, and create a data-driven marketing strategy."
                },
                {
                  step: "02", 
                  title: "Setup",
                  description: "Configure campaigns, tracking, and all necessary marketing tools and platforms."
                },
                {
                  step: "03",
                  title: "Execute",
                  description: "Launch campaigns and start generating traffic, leads, and sales for your business."
                },
                {
                  step: "04",
                  title: "Optimize",
                  description: "Monitor performance and continuously optimize for better results and ROI."
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
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
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Results We Deliver
              </h2>
              <p className="text-xl text-gray-600">
                Measurable outcomes that drive business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "300%",
                  label: "Average Traffic Increase",
                  icon: "📈"
                },
                {
                  metric: "85%",
                  label: "Lead Generation Boost",
                  icon: "🎯"
                },
                {
                  metric: "250%",
                  label: "Social Media Growth",
                  icon: "📱"
                },
                {
                  metric: "200%",
                  label: "ROI Improvement",
                  icon: "💰"
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-green-900 via-blue-900 to-teal-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Scale Your
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s create a marketing strategy that delivers real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-105 transform">
                Start Growing Today
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                Free Marketing Audit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}