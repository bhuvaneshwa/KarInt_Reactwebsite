import { Link } from "react-router-dom";
import { useState } from "react";

export default function Product() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 4,
      name: "Billing Software",
      description:
        "Simplify invoicing, payments, and financial tracking with a user-friendly billing system tailored for businesses of all sizes.",
      image: "/src/images/billing.jpg",
      status: "Launching Soon",
      path: "/products/billing",
      category: "Finance",
      features: ["Automated Invoicing", "Payment Tracking", "Financial Reports", "Multi-Currency Support"],
      color: "from-green-400 to-emerald-600",
    },
    {
      id: 5,
      name: "Inventory Software",
      description:
        "Efficiently manage stock levels, track product movement, and automate supply chain processes to reduce losses and improve productivity.",
      image: "/src/images/inventory.jpg",
      status: "Launching Soon",
      path: "/products/inventory",
      category: "Operations",
      features: ["Stock Management", "Supply Chain", "Real-time Tracking", "Loss Prevention"],
      color: "from-purple-400 to-indigo-600",
    },
    {
      id: 1,
      name: "ERP (Enterprise Resource Planning)",
      description:
        "A comprehensive software solution that integrates core business processes, improving efficiency, automation, and real-time decision-making.",
      image: "/src/images/erp.jpg",
      status: "In Development",
      path: "/products/erp",
      category: "Enterprise",
      features: ["Process Integration", "Real-time Analytics", "Workflow Automation", "Multi-module Support"],
      color: "from-blue-400 to-cyan-600",
    },
    {
      id: 2,
      name: "HRMS (Human Resource Management System)",
      description:
        "Streamline HR operations with automated payroll, employee management, attendance tracking, and performance evaluation.",
      image: "/src/images/hrms.jpeg",
      status: "In Development",
      path: "/products/hrms",
      category: "HR",
      features: ["Payroll Management", "Attendance Tracking", "Performance Review", "Employee Portal"],
      color: "from-orange-400 to-red-600",
    },
    {
      id: 3,
      name: "CRM (Customer Relationship Management)",
      description:
        "Enhance customer relationships with lead tracking, automated follow-ups, and personalized engagement for better sales growth.",
      image: "/src/images/crm.jpg",
      status: "In Development",
      path: "/products/crm",
      category: "Sales",
      features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Email Automation"],
      color: "from-pink-400 to-rose-600",
    },
    {
      id: 6,
      name: "Banking Software",
      description:
        "A secure and scalable banking solution for managing transactions, loan processing, customer accounts, and compliance requirements.",
      image: "/src/images/banking.jpg",
      status: "In Development",
      path: "/products/banking",
      category: "Finance",
      features: ["Transaction Management", "Loan Processing", "Account Management", "Compliance Tools"],
      color: "from-teal-400 to-green-600",
    },
  ];

  const categories = ["All", "Finance", "Operations", "Enterprise", "HR", "Sales"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
      {/* HERO */}
      <section
        className="relative bg-gradient-to-r from-black/80 to-black/60 min-h-[60vh] flex items-center overflow-hidden"
        aria-label="Products hero"
      >
        {/* Background with parallax effect */}
        <div 
          className="absolute inset-0 bg-[url('/banner1.jpg')] bg-cover bg-center bg-fixed"
          style={{ transform: 'translateZ(0)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="max-w-5xl text-center mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold backdrop-blur-sm border border-primary/30">
                🚀 Enterprise Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Products Built for 
              <span className="block bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
                Growth & Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our comprehensive suite of business software solutions — from Billing and Inventory to Enterprise 
              Resource Planning, designed specifically for Indian SMBs and enterprises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact">
                <button className="group px-8 py-4 bg-gradient-to-r from-primary to-yellow-400 text-black rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <span className="flex items-center gap-2">
                    Request a Demo
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </Link>

              <a
                href="#products-list"
                className="group flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-300"
              >
                <span className="text-lg font-medium">Explore Products</span>
                <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products-list" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {/* Header with Search and Filters */}
            <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Software Solutions
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive products and upcoming launches from{" "}
                <span className="text-primary font-semibold">KAR International Infotech</span>
              </p>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-gray-50 p-6 rounded-2xl">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                />
                <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-black shadow-lg scale-105"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <article
                key={product.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/30 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        product.status === "Launching Soon"
                          ? "bg-green-100/90 text-green-800 border border-green-200"
                          : "bg-amber-100/90 text-amber-800 border border-amber-200"
                      }`}
                    >
                      {product.status === "Launching Soon" ? "🚀" : "🔧"} {product.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700 backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                          +{product.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <Link 
                      to={product.path} 
                      className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-yellow-400 text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      View Details
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <div className="flex items-center gap-3">
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors" title="Add to favorites">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-primary transition-colors" title="Share">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-yellow-400/10 rounded-3xl p-8 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get started with our comprehensive software solutions. Our team is ready to help you choose the right products for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-yellow-400 text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  Schedule Consultation
                </button>
              </Link>
              <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-black transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
