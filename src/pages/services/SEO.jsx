export default function SEO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              SEO Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Rank Higher on
              <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                Google
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Professional SEO services that improve your search engine rankings, drive organic traffic, and help customers find your business online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 transform">
                <span className="flex items-center gap-3">
                  Boost My Rankings
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                Free SEO Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Complete SEO Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to dominate search results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔍",
                  title: "Keyword Research",
                  description: "Find the right keywords your customers are searching for to drive targeted traffic.",
                  features: ["Competitor Analysis", "Search Volume Data", "Long-tail Keywords"]
                },
                {
                  icon: "📝",
                  title: "On-Page SEO",
                  description: "Optimize your website content, structure, and HTML elements for better rankings.",
                  features: ["Title Tags", "Meta Descriptions", "Header Optimization"]
                },
                {
                  icon: "🔗",
                  title: "Link Building",
                  description: "Build high-quality backlinks to increase your website's authority and rankings.",
                  features: ["Guest Posting", "Directory Submissions", "Outreach Campaigns"]
                },
                {
                  icon: "📱",
                  title: "Local SEO",
                  description: "Dominate local search results and attract customers in your area.",
                  features: ["Google My Business", "Local Citations", "Review Management"]
                },
                {
                  icon: "⚡",
                  title: "Technical SEO",
                  description: "Fix technical issues that prevent search engines from indexing your site properly.",
                  features: ["Site Speed", "Mobile Optimization", "Schema Markup"]
                },
                {
                  icon: "📊",
                  title: "SEO Analytics",
                  description: "Track your rankings, traffic, and conversions with detailed reporting.",
                  features: ["Ranking Reports", "Traffic Analysis", "ROI Tracking"]
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
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Tools */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Professional SEO Tools
              </h2>
              <p className="text-xl text-gray-600">
                We use industry-leading tools for maximum results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "SEMrush", color: "from-orange-500 to-red-500" },
                { name: "Ahrefs", color: "from-blue-500 to-indigo-600" },
                { name: "Moz", color: "from-blue-600 to-blue-800" },
                { name: "Screaming Frog", color: "from-green-500 to-emerald-600" },
                { name: "Google Analytics", color: "from-orange-400 to-red-500" },
                { name: "Search Console", color: "from-blue-500 to-green-500" },
                { name: "GTMetrix", color: "from-red-500 to-pink-500" },
                { name: "PageSpeed", color: "from-green-500 to-blue-500" },
                { name: "Ubersuggest", color: "from-orange-400 to-orange-600" },
                { name: "BrightLocal", color: "from-yellow-500 to-orange-500" },
                { name: "Majestic", color: "from-purple-500 to-indigo-600" },
                { name: "SpyFu", color: "from-green-600 to-teal-600" }
              ].map((tool, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}></div>
                  <h3 className="font-semibold text-gray-900 text-sm">{tool.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Our SEO Process
              </h2>
              <p className="text-xl text-gray-600">
                Proven methodology for sustainable rankings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "SEO Audit",
                  description: "Comprehensive analysis of your website's current SEO performance and issues."
                },
                {
                  step: "02", 
                  title: "Strategy",
                  description: "Custom SEO strategy based on your business goals and target audience."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Execute on-page, technical, and off-page SEO optimizations."
                },
                {
                  step: "04",
                  title: "Monitoring",
                  description: "Track rankings, traffic, and continuously optimize for better results."
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">
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
                      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* SEO Results */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                SEO Results That Matter
              </h2>
              <p className="text-xl text-gray-600">
                Real improvements in search visibility and traffic
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "400%",
                  label: "Organic Traffic Increase",
                  icon: "📈"
                },
                {
                  metric: "250%",
                  label: "Keyword Rankings Boost",
                  icon: "🎯"
                },
                {
                  metric: "90%",
                  label: "Page 1 Rankings",
                  icon: "🥇"
                },
                {
                  metric: "300%",
                  label: "Lead Generation Growth",
                  icon: "💼"
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent mb-2">
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
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Dominate
              <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                Search Results?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s optimize your website and start driving more organic traffic today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 transform">
                Start SEO Campaign
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                Free SEO Analysis
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}