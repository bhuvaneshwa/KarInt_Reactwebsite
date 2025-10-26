export default function SoftwareDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
              Software Development Services
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Custom Software
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Tailored software solutions that streamline your business processes, increase efficiency, and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105 transform">
                <span className="flex items-center gap-3">
                  Start Your Project
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Software Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Software We Build
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom software solutions for every business need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "💼",
                  title: "Enterprise Software",
                  description: "Large-scale business applications with complex workflows and integrations.",
                  features: ["ERP Systems", "CRM Solutions", "Workflow Management"]
                },
                {
                  icon: "🌐",
                  title: "Web Applications",
                  description: "Modern, scalable web apps with real-time features and cloud deployment.",
                  features: ["SaaS Platforms", "Progressive Web Apps", "API Development"]
                },
                {
                  icon: "📱",
                  title: "Mobile Applications",
                  description: "Native and cross-platform mobile apps for iOS and Android.",
                  features: ["Native iOS/Android", "React Native", "Flutter Apps"]
                },
                {
                  icon: "🏪",
                  title: "E-commerce Platforms",
                  description: "Complete online store solutions with payment and inventory management.",
                  features: ["Custom Stores", "Multi-vendor", "B2B Platforms"]
                },
                {
                  icon: "🎓",
                  title: "Learning Management",
                  description: "Educational platforms with course management and student tracking.",
                  features: ["LMS Systems", "Online Courses", "Assessment Tools"]
                },
                {
                  icon: "⚡",
                  title: "Automation Tools",
                  description: "Business process automation and workflow optimization software.",
                  features: ["Process Automation", "Data Migration", "API Integrations"]
                }
              ].map((software, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-3"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {software.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {software.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {software.description}
                  </p>
                  <div className="space-y-2">
                    {software.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
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

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-600">
                Modern technologies for robust software solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  category: "Frontend",
                  technologies: [
                    { name: "React", color: "from-blue-400 to-blue-600" },
                    { name: "Vue.js", color: "from-green-400 to-green-600" },
                    { name: "Angular", color: "from-red-400 to-red-600" },
                    { name: "TypeScript", color: "from-blue-600 to-indigo-600" },
                    { name: "Next.js", color: "from-gray-600 to-gray-800" },
                    { name: "Flutter", color: "from-blue-500 to-cyan-500" }
                  ]
                },
                {
                  category: "Backend",
                  technologies: [
                    { name: "Node.js", color: "from-green-500 to-green-700" },
                    { name: "Python", color: "from-yellow-400 to-blue-500" },
                    { name: "Java", color: "from-orange-500 to-red-500" },
                    { name: "C#/.NET", color: "from-purple-500 to-indigo-600" },
                    { name: "PHP", color: "from-indigo-500 to-purple-500" },
                    { name: "Go", color: "from-cyan-400 to-blue-500" }
                  ]
                },
                {
                  category: "Database & Cloud",
                  technologies: [
                    { name: "MongoDB", color: "from-green-500 to-green-700" },
                    { name: "PostgreSQL", color: "from-blue-500 to-blue-700" },
                    { name: "MySQL", color: "from-orange-400 to-orange-600" },
                    { name: "AWS", color: "from-orange-400 to-orange-600" },
                    { name: "Azure", color: "from-blue-500 to-blue-700" },
                    { name: "Docker", color: "from-blue-400 to-cyan-500" }
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Development Process
              </h2>
              <p className="text-xl text-gray-600">
                Agile methodology for efficient software delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding requirements, goals, and technical specifications."
                },
                {
                  step: "02", 
                  title: "Planning",
                  description: "Architecture design, timeline planning, and resource allocation."
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Agile development with regular sprints and continuous integration."
                },
                {
                  step: "04",
                  title: "Testing",
                  description: "Comprehensive testing including unit, integration, and user testing."
                },
                {
                  step: "05",
                  title: "Deployment",
                  description: "Production deployment with monitoring and ongoing support."
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
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
                      <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Why Choose Our Software
              </h2>
              <p className="text-xl text-gray-600">
                Built with modern standards and best practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🚀",
                  title: "High Performance",
                  description: "Optimized for speed and efficiency"
                },
                {
                  icon: "🔒",
                  title: "Secure & Reliable",
                  description: "Built with security best practices"
                },
                {
                  icon: "📈",
                  title: "Scalable Architecture",
                  description: "Grows with your business needs"
                },
                {
                  icon: "🛠️",
                  title: "Easy Maintenance",
                  description: "Clean code and comprehensive documentation"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Build Your
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Custom Software?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s discuss your requirements and create a solution that fits your business perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 hover:scale-105 transform">
                Start Your Project
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