export default function EcommerceSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-8">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              E-commerce Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Start Selling
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Online Today
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Complete e-commerce solutions that help you build, launch, and scale your online store with features that drive sales and customer satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 transform">
                <span className="flex items-center gap-3">
                  Launch My Store
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300">
                View Demo Stores
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                E-commerce Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to run a successful online business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🛒",
                  title: "Shopping Cart",
                  description: "Advanced shopping cart with saved items, wishlists, and quick checkout.",
                  features: ["Guest Checkout", "Save for Later", "Multiple Payment Options"]
                },
                {
                  icon: "💳",
                  title: "Payment Gateway",
                  description: "Secure payment processing with multiple payment methods integration.",
                  features: ["PayPal", "Stripe", "Credit Cards", "Digital Wallets"]
                },
                {
                  icon: "📦",
                  title: "Inventory Management",
                  description: "Real-time inventory tracking with automated stock alerts and management.",
                  features: ["Stock Tracking", "Low Stock Alerts", "Bulk Updates"]
                },
                {
                  icon: "🚚",
                  title: "Shipping Integration",
                  description: "Automated shipping calculations with real-time tracking capabilities.",
                  features: ["Multiple Carriers", "Rate Calculation", "Tracking Numbers"]
                },
                {
                  icon: "👥",
                  title: "Customer Accounts",
                  description: "Customer portal with order history, tracking, and profile management.",
                  features: ["Order History", "Address Book", "Loyalty Programs"]
                },
                {
                  icon: "📊",
                  title: "Analytics Dashboard",
                  description: "Comprehensive reporting on sales, customers, and business performance.",
                  features: ["Sales Reports", "Customer Analytics", "Product Performance"]
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-3"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Platforms */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                E-commerce Platforms
              </h2>
              <p className="text-xl text-gray-600">
                We build on the best e-commerce platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "Shopify", color: "from-green-500 to-emerald-600" },
                { name: "WooCommerce", color: "from-purple-500 to-indigo-600" },
                { name: "Magento", color: "from-orange-500 to-red-500" },
                { name: "BigCommerce", color: "from-blue-500 to-blue-700" },
                { name: "PrestaShop", color: "from-pink-500 to-red-500" },
                { name: "OpenCart", color: "from-blue-600 to-indigo-700" },
                { name: "Squarespace", color: "from-gray-700 to-gray-900" },
                { name: "Wix", color: "from-blue-400 to-purple-500" },
                { name: "Custom PHP", color: "from-indigo-500 to-purple-600" },
                { name: "React/Node", color: "from-blue-400 to-cyan-500" },
                { name: "Laravel", color: "from-red-500 to-orange-500" },
                { name: "Django", color: "from-green-600 to-teal-600" }
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

      {/* Store Types */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Types of Stores We Build
              </h2>
              <p className="text-xl text-gray-600">
                Custom solutions for every business model
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🏪",
                  title: "Single Vendor",
                  description: "Traditional online stores for individual businesses"
                },
                {
                  icon: "🏬",
                  title: "Multi-Vendor",
                  description: "Marketplace platforms with multiple sellers"
                },
                {
                  icon: "🏢",
                  title: "B2B Portals",
                  description: "Business-to-business e-commerce solutions"
                },
                {
                  icon: "📱",
                  title: "Mobile Commerce",
                  description: "Mobile-optimized shopping experiences"
                },
                {
                  icon: "🔄",
                  title: "Subscription",
                  description: "Recurring billing and subscription management"
                },
                {
                  icon: "📦",
                  title: "Dropshipping",
                  description: "Automated order fulfillment systems"
                },
                {
                  icon: "🎨",
                  title: "Digital Products",
                  description: "Download and digital content delivery"
                },
                {
                  icon: "🌍",
                  title: "Multi-Currency",
                  description: "International stores with currency support"
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

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Store Development Process
              </h2>
              <p className="text-xl text-gray-600">
                From concept to successful online store
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Planning",
                  description: "Business analysis, requirements gathering, and platform selection."
                },
                {
                  step: "02", 
                  title: "Design",
                  description: "Custom UI/UX design optimized for conversions and user experience."
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building the store with all features and third-party integrations."
                },
                {
                  step: "04",
                  title: "Testing",
                  description: "Comprehensive testing of payments, checkout, and all functionalities."
                },
                {
                  step: "05",
                  title: "Launch",
                  description: "Store launch with training, support, and marketing setup."
                }
              ].map((process, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
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
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* E-commerce Results */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                E-commerce Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Results our clients achieve with their online stores
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "300%",
                  label: "Sales Increase",
                  icon: "💰"
                },
                {
                  metric: "150%",
                  label: "Conversion Rate Boost",
                  icon: "📈"
                },
                {
                  metric: "200%",
                  label: "Customer Growth",
                  icon: "👥"
                },
                {
                  metric: "90%",
                  label: "Mobile Sales",
                  icon: "📱"
                }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
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
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Launch Your
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Online Store?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let&apos;s build an e-commerce solution that drives sales and grows your business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105 transform">
                Start Selling Online
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