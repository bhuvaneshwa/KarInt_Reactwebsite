export default function SocialMediaManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
              Social Media Management
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Build Your Brand on
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Social Media
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Professional social media management that builds communities, increases engagement, and drives business growth across all platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105 transform">
                <span className="flex items-center gap-3">
                  Grow My Following
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                Free Strategy Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Social Media Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete social media solutions for maximum impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📝",
                  title: "Content Creation",
                  description: "Engaging posts, stories, and videos that capture your audience's attention.",
                  features: ["Visual Content", "Video Production", "Copywriting"]
                },
                {
                  icon: "📅",
                  title: "Content Scheduling",
                  description: "Strategic posting schedules to maximize reach and engagement.",
                  features: ["Optimal Timing", "Multi-Platform", "Content Calendar"]
                },
                {
                  icon: "💬",
                  title: "Community Management",
                  description: "Active engagement with your audience and building loyal communities.",
                  features: ["Response Management", "Community Building", "Customer Support"]
                },
                {
                  icon: "📊",
                  title: "Social Media Analytics",
                  description: "Track performance and optimize your social media strategy with data.",
                  features: ["Performance Reports", "Audience Insights", "ROI Tracking"]
                },
                {
                  icon: "🎯",
                  title: "Paid Advertising",
                  description: "Targeted social media ads that drive traffic and conversions.",
                  features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads"]
                },
                {
                  icon: "🤝",
                  title: "Influencer Marketing",
                  description: "Partner with influencers to expand your reach and credibility.",
                  features: ["Influencer Outreach", "Campaign Management", "Performance Tracking"]
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
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
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

      {/* Social Platforms */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Platforms We Manage
              </h2>
              <p className="text-xl text-gray-600">
                Expert management across all major social platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "Facebook", color: "from-blue-600 to-blue-800", icon: "📘" },
                { name: "Instagram", color: "from-pink-500 to-purple-600", icon: "📷" },
                { name: "LinkedIn", color: "from-blue-700 to-indigo-800", icon: "💼" },
                { name: "Twitter", color: "from-blue-400 to-blue-600", icon: "🐦" },
                { name: "YouTube", color: "from-red-500 to-red-700", icon: "📺" },
                { name: "TikTok", color: "from-gray-800 to-pink-600", icon: "🎵" },
                { name: "Pinterest", color: "from-red-400 to-pink-500", icon: "📌" },
                { name: "Snapchat", color: "from-yellow-400 to-yellow-600", icon: "👻" },
                { name: "WhatsApp", color: "from-green-500 to-green-700", icon: "💬" },
                { name: "Telegram", color: "from-blue-500 to-blue-700", icon: "✈️" },
                { name: "Discord", color: "from-indigo-600 to-purple-600", icon: "🎮" },
                { name: "Reddit", color: "from-orange-500 to-red-500", icon: "🔴" }
              ].map((platform, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                >
                  <div className="text-3xl mb-3">{platform.icon}</div>
                  <div className={`w-12 h-1 bg-gradient-to-r ${platform.color} rounded-full mx-auto mb-3`}></div>
                  <h3 className="font-semibold text-gray-900 text-sm">{platform.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Content We Create
              </h2>
              <p className="text-xl text-gray-600">
                Diverse content formats to engage your audience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "📸",
                  title: "Visual Posts",
                  description: "Eye-catching graphics and photos that stop the scroll"
                },
                {
                  icon: "🎥",
                  title: "Video Content",
                  description: "Engaging videos from short clips to long-form content"
                },
                {
                  icon: "📱",
                  title: "Stories & Reels",
                  description: "Interactive stories and trending reels for maximum reach"
                },
                {
                  icon: "📝",
                  title: "Written Content",
                  description: "Compelling captions and articles that drive engagement"
                },
                {
                  icon: "🎨",
                  title: "Branded Graphics",
                  description: "Custom designs that maintain brand consistency"
                },
                {
                  icon: "🎬",
                  title: "Live Streams",
                  description: "Real-time engagement through live video broadcasts"
                },
                {
                  icon: "📊",
                  title: "Infographics",
                  description: "Data visualization that educates and informs"
                },
                {
                  icon: "🎤",
                  title: "Podcasts",
                  description: "Audio content for deeper audience connection"
                }
              ].map((content, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {content.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {content.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Our Management Process
              </h2>
              <p className="text-xl text-gray-600">
                Strategic approach to social media success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Strategy",
                  description: "Develop custom social media strategy based on your goals."
                },
                {
                  step: "02", 
                  title: "Content",
                  description: "Create engaging content calendar with diverse formats."
                },
                {
                  step: "03",
                  title: "Posting",
                  description: "Schedule and publish content at optimal times."
                },
                {
                  step: "04",
                  title: "Engage",
                  description: "Actively manage community and respond to interactions."
                },
                {
                  step: "05",
                  title: "Analyze",
                  description: "Track performance and optimize strategy continuously."
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

      {/* Social Media Results */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Results We Achieve
              </h2>
              <p className="text-xl text-gray-600">
                Measurable social media growth and engagement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "500%",
                  label: "Follower Growth",
                  icon: "👥"
                },
                {
                  metric: "350%",
                  label: "Engagement Increase",
                  icon: "💖"
                },
                {
                  metric: "400%",
                  label: "Brand Reach Expansion",
                  icon: "📢"
                },
                {
                  metric: "250%",
                  label: "Website Traffic Boost",
                  icon: "🌐"
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
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
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Build Your
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Social Media Empire?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s create a social media strategy that builds your brand and grows your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105 transform">
                Start Growing Today
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                Free Strategy Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}