export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              Mobile App Development
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Build Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Mobile App
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Custom mobile applications for iOS and Android that engage users, drive business growth, and deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-105 transform">
                <span className="flex items-center gap-3">
                  Start My App
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                View App Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Mobile App Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete mobile app development solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "📱",
                  title: "Native iOS Apps",
                  description: "High-performance native iOS applications using Swift and latest iOS frameworks.",
                  features: ["Swift Development", "iOS Design Guidelines", "App Store Optimization"]
                },
                {
                  icon: "🤖",
                  title: "Native Android Apps",
                  description: "Robust Android applications using Kotlin and modern Android development tools.",
                  features: ["Kotlin Development", "Material Design", "Google Play Store"]
                },
                {
                  icon: "🔄",
                  title: "Cross-Platform Apps",
                  description: "Cost-effective cross-platform solutions using React Native and Flutter.",
                  features: ["React Native", "Flutter", "Code Reusability"]
                },
                {
                  icon: "🎨",
                  title: "UI/UX Design",
                  description: "Intuitive and engaging mobile app designs that users love to interact with.",
                  features: ["User Research", "Wireframing", "Prototype Testing"]
                },
                {
                  icon: "🔗",
                  title: "API Integration",
                  description: "Seamless integration with third-party services and custom backend APIs.",
                  features: ["REST APIs", "GraphQL", "Real-time Updates"]
                },
                {
                  icon: "🚀",
                  title: "App Store Launch",
                  description: "Complete app store submission and optimization for maximum visibility.",
                  features: ["Store Submission", "ASO", "Launch Strategy"]
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
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
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

      {/* App Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Types of Apps We Build
              </h2>
              <p className="text-xl text-gray-600">
                Custom mobile solutions for every industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🛒",
                  title: "E-commerce Apps",
                  description: "Shopping apps with cart, payments, and order tracking"
                },
                {
                  icon: "🍔",
                  title: "Food Delivery",
                  description: "Restaurant and food delivery platforms"
                },
                {
                  icon: "💼",
                  title: "Business Apps",
                  description: "Enterprise and productivity applications"
                },
                {
                  icon: "🎓",
                  title: "Educational Apps",
                  description: "Learning and training mobile platforms"
                },
                {
                  icon: "🏥",
                  title: "Healthcare Apps",
                  description: "Medical and wellness mobile solutions"
                },
                {
                  icon: "💰",
                  title: "FinTech Apps",
                  description: "Banking and financial service applications"
                },
                {
                  icon: "🎮",
                  title: "Gaming Apps",
                  description: "Mobile games and entertainment apps"
                },
                {
                  icon: "🚗",
                  title: "Travel & Transport",
                  description: "Booking and navigation applications"
                }
              ].map((type, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Development Technologies
              </h2>
              <p className="text-xl text-gray-600">
                Modern frameworks and tools for app development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  category: "Native iOS",
                  technologies: [
                    { name: "Swift", color: "from-orange-400 to-red-500" },
                    { name: "Objective-C", color: "from-blue-500 to-indigo-600" },
                    { name: "Xcode", color: "from-blue-400 to-blue-600" },
                    { name: "UIKit", color: "from-gray-600 to-gray-800" },
                    { name: "SwiftUI", color: "from-blue-500 to-purple-600" },
                    { name: "Core Data", color: "from-green-500 to-emerald-600" }
                  ]
                },
                {
                  category: "Native Android",
                  technologies: [
                    { name: "Kotlin", color: "from-purple-500 to-indigo-600" },
                    { name: "Java", color: "from-orange-500 to-red-500" },
                    { name: "Android Studio", color: "from-green-500 to-green-700" },
                    { name: "Jetpack Compose", color: "from-blue-500 to-cyan-500" },
                    { name: "Room Database", color: "from-teal-500 to-green-600" },
                    { name: "Firebase", color: "from-yellow-400 to-orange-500" }
                  ]
                },
                {
                  category: "Cross-Platform",
                  technologies: [
                    { name: "React Native", color: "from-blue-400 to-blue-600" },
                    { name: "Flutter", color: "from-blue-500 to-cyan-500" },
                    { name: "Xamarin", color: "from-purple-500 to-indigo-600" },
                    { name: "Ionic", color: "from-blue-600 to-indigo-700" },
                    { name: "Cordova", color: "from-gray-600 to-gray-800" },
                    { name: "PWA", color: "from-green-500 to-emerald-600" }
                  ]
                }
              ].map((stack, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    {stack.category}
                  </h3>
                  <div className="space-y-4">
                    {stack.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300"
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${tech.color} rounded-lg`}></div>
                        <span className="font-semibold text-gray-800">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                App Development Process
              </h2>
              <p className="text-xl text-gray-600">
                From idea to app store success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {[
                {
                  step: "01",
                  title: "Ideation",
                  description: "Concept validation and market research."
                },
                {
                  step: "02", 
                  title: "Design",
                  description: "UI/UX design and user experience optimization."
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Native or cross-platform app development."
                },
                {
                  step: "04",
                  title: "Testing",
                  description: "Quality assurance and device testing."
                },
                {
                  step: "05",
                  title: "Launch",
                  description: "App store submission and deployment."
                },
                {
                  step: "06",
                  title: "Support",
                  description: "Ongoing maintenance and updates."
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                  {index < 5 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* App Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                App Features We Implement
              </h2>
              <p className="text-xl text-gray-600">
                Advanced functionality for modern mobile apps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🔐",
                  title: "User Authentication",
                  description: "Secure login with biometrics and social auth"
                },
                {
                  icon: "💾",
                  title: "Offline Capability",
                  description: "Work without internet with data sync"
                },
                {
                  icon: "🔔",
                  title: "Push Notifications",
                  description: "Real-time notifications and messaging"
                },
                {
                  icon: "📍",
                  title: "Location Services",
                  description: "GPS, maps, and location-based features"
                },
                {
                  icon: "💳",
                  title: "Payment Integration",
                  description: "Secure in-app purchases and payments"
                },
                {
                  icon: "📊",
                  title: "Analytics",
                  description: "User behavior tracking and app analytics"
                },
                {
                  icon: "☁️",
                  title: "Cloud Storage",
                  description: "Data backup and cloud synchronization"
                },
                {
                  icon: "📱",
                  title: "Device Features",
                  description: "Camera, contacts, and hardware access"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-2"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Build Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Dream App?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s turn your app idea into reality with a mobile solution that users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-105 transform">
                Start App Development
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}