
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Training() {
  const [activeTab, setActiveTab] = useState("technical");

  const trainingDomains = {
    technical: {
      title: "Technical & Programming",
      subtitle: "Master the art of coding",
      icon: "💻",
      color: "from-blue-500 via-indigo-500 to-purple-600",
      bgColor: "from-blue-50 to-indigo-100",
      accentColor: "blue-500",
      programs: [
        "Core Programming Fundamentals - C, C++, Python, Java, JavaScript",
        "Master Web Development Part 1 and 2",
        "Introduction to Programming with Python DSA",
        "Object-Oriented Programming with Java DSA",
        "Database Fundamentals",
        "Data Structures & Algorithms (DSA) + Problem Solving in Leetcode and Hackerrank",
        "Full-stack Dev + AI tools",
        "Mobile App Development",
        "Data Science & Analytics Programming",
        "Artificial Intelligence & Machine Learning",
        "Cloud & DevOps Programming"
      ]
    },
    aptitude: {
      title: "Aptitude & Problem-Solving",
      subtitle: "Sharpen your analytical mind",
      icon: "🧠",
      color: "from-teal-500 via-emerald-500 to-green-600",
      bgColor: "from-teal-50 to-emerald-100",
      accentColor: "teal-500",
      programs: [
        "Quantitative Aptitude Mastery Program",
        "Logical Reasoning & Analytical Thinking",
        "Verbal Ability & Communication Logic",
        "Coding & Analytical Problem-Solving",
        "Campus Placement Aptitude Crash Course",
        "Critical Thinking & Decision-Making Workshop",
        "Data Interpretation & Analytical Reasoning",
        "Speed Mathematics & Accuracy Training",
        "Problem Solving & Lateral Thinking Lab",
        "Mock Aptitude Marathon (Assessment Program)"
      ]
    },
    softSkills: {
      title: "Soft Skills & Professional Readiness",
      subtitle: "Build your professional persona",
      icon: "🎯",
      color: "from-orange-500 via-amber-500 to-yellow-600",
      bgColor: "from-orange-50 to-amber-100",
      accentColor: "orange-500",
      programs: [
        "Communication Skills Enhancement Program",
        "Corporate Etiquette & Professional Behavior",
        "Presentation & Public Speaking Mastery",
        "Time Management & Productivity Workshop",
        "Teamwork, Leadership & Collaboration Skills",
        "Emotional Intelligence & Growth Mindset",
        "Resume Building & LinkedIn Optimization",
        "Interview Preparation & Mock Interview Sessions",
        "Personal Branding & Confidence Building",
        "Business Communication & Email Etiquette",
        "Critical Thinking & Problem-Solving for Professionals",
        "Goal Setting & Self-Motivation Workshop",
        "Stress Management & Workplace Adaptability",
        "Group Discussion & HR Interview Readiness",
        "Professional Writing & Report Communication Skills"
      ]
    }
  };

  const keyFeatures = [
    {
      icon: "🎓",
      title: "Industry-Expert Faculty",
      description: "Learn from professionals with real-world experience in top tech companies",
      gradient: "from-blue-500 to-indigo-600",
      delay: "delay-100"
    },
    {
      icon: "🏢",
      title: "Corporate-Grade Curriculum",
      description: "Curriculum designed in partnership with leading industry partners",
      gradient: "from-teal-500 to-emerald-600",
      delay: "delay-200"
    },
    {
      icon: "💼",
      title: "Placement Assistance",
      description: "Comprehensive placement support with 100+ hiring partner companies",
      gradient: "from-purple-500 to-violet-600",
      delay: "delay-300"
    },
    {
      icon: "🔬",
      title: "Hands-on Projects",
      description: "Real-world projects and case studies for practical learning experience",
      gradient: "from-orange-500 to-amber-600",
      delay: "delay-500"
    },
    {
      icon: "📊",
      title: "Performance Tracking",
      description: "Advanced analytics to track progress and identify improvement areas",
      gradient: "from-rose-500 to-pink-600",
      delay: "delay-700"
    },
    {
      icon: "🤝",
      title: "Industry Mentorship",
      description: "One-on-one mentorship from industry professionals and alumni",
      gradient: "from-indigo-500 to-purple-600",
      delay: "delay-1000"
    }
  ];

  const philosophyCards = [
    {
      title: "Our Vision",
      icon: "👁️",
      description: "To be the leading catalyst in transforming educational institutions into industry-ready talent hubs.",
      gradient: "from-blue-500 to-indigo-600",
      pattern: "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
    },
    {
      title: "Our Mission", 
      icon: "🎯",
      description: "Bridging the academia-industry gap through innovative training programs and practical skill development.",
      gradient: "from-teal-500 to-emerald-600",
      pattern: "bg-[radial-gradient(circle_at_30%_70%,rgba(20,184,166,0.1),transparent_50%)]"
    },
    {
      title: "Learning Philosophy",
      icon: "📚",
      description: "Learn by doing - emphasizing hands-on experience, real-world projects, and industry best practices.",
      gradient: "from-purple-500 to-violet-600",
      pattern: "bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.1),transparent_50%)]"
    },
    {
      title: "Our Promise",
      icon: "💝",
      description: "Guaranteed skill enhancement with measurable outcomes and continuous support for career growth.",
      gradient: "from-orange-500 to-amber-600",
      pattern: "bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.1),transparent_50%)]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
    {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900">
  {/* Animated Black & White Background */}
  <div className="absolute inset-0">
    {/* Soft floating colored blobs */}
    <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/40 to-indigo-500/30 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
    <div className="absolute top-0 right-4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-violet-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-emerald-600/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
  </div>

  {/* Subtle grid pattern overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 text-center">
    <div className="max-w-5xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white mb-8 animate-fade-in-up">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        <span className="text-sm font-medium">🎓 Educational Excellence Redefined</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
        <span className="text-white block mb-4 animate-fade-in-up animation-delay-200">
          Transforming Students
        </span>
        <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300 bg-clip-text text-transparent animate-fade-in-up animation-delay-400">
          Into Industry Leaders
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
        Bridge the gap between academic learning and industry excellence with our
        <span className="text-gray-100 font-semibold"> revolutionary training programs </span>
        designed for colleges and schools across India.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-800">
        <Link to="/contact">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-white shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 transform">
            <span className="relative z-10 flex items-center gap-3">
              <span className="text-lg">🚀</span>
              Partner With Us
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </Link>
        <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold text-white hover:bg-white/20 transition-all duration-300">
          <span className="flex items-center gap-3">
            <span className="text-lg">📋</span>
            Download Curriculum
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>


      {/* Philosophy Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-blue-700 font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Our Foundation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Training Philosophy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Empowering the next generation with industry-relevant skills, innovative methodologies, and transformative learning experiences
              </p>
            </div>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {philosophyCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2 ${card.pattern}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {card.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {card.description}
                  </p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Program Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                Campus to Corporate Program
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                360° Industry Readiness
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent">
                  Framework
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A comprehensive approach to skill development covering all aspects of professional growth - 
                from technical mastery to soft skills excellence
              </p>
            </div>

            {/* Interactive Domain Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {Object.entries(trainingDomains).map(([key, domain]) => (
                <div
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`group relative cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    activeTab === key ? 'scale-105' : ''
                  }`}
                >
                  <div className={`relative bg-gradient-to-br ${activeTab === key ? domain.bgColor : 'from-white/10 to-white/5'} backdrop-blur-sm rounded-3xl p-8 border ${activeTab === key ? 'border-white/30' : 'border-white/10'} hover:border-white/30 transition-all duration-300`}>
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${domain.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      {domain.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className={`text-2xl font-bold mb-3 ${activeTab === key ? 'text-gray-900' : 'text-white'} transition-colors`}>
                      {domain.title}
                    </h3>
                    <p className={`text-lg mb-6 ${activeTab === key ? 'text-gray-700' : 'text-gray-300'} transition-colors`}>
                      {domain.subtitle}
                    </p>
                    
                    {/* Program Count */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${domain.color} rounded-full text-white text-sm font-semibold`}>
                      <span>{domain.programs.length}</span>
                      <span>Programs</span>
                    </div>

                    {/* Selection Indicator */}
                    {activeTab === key && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Active Domain Programs */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${trainingDomains[activeTab].color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg`}>
                  {trainingDomains[activeTab].icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {trainingDomains[activeTab].title}
                  </h4>
                  <p className="text-gray-600">
                    {trainingDomains[activeTab].subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trainingDomains[activeTab].programs.map((program, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${trainingDomains[activeTab].color} rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors">
                      {program}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Key Features of Our Program
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover what makes our training programs stand out in the competitive landscape of educational excellence
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-3 animate-fade-in-up ${feature.delay}`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-3 h-3 bg-gradient-to-r ${feature.gradient} rounded-full animate-pulse`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Content */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent">
                  Institution?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Join hundreds of colleges and schools that have already partnered with us to 
                enhance their students&apos; career prospects and industry readiness.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Partner Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-300">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300">Placement Success</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 transform text-lg">
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-xl">📞</span>
                    Schedule a Consultation
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
              <button className="group px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-300 text-lg">
                <span className="flex items-center gap-3">
                  <span className="text-xl">📋</span>
                  Request Proposal
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
