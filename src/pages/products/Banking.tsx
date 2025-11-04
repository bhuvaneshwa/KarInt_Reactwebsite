import React from "react";

export default function Banking() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:50px_50px]"
          aria-hidden
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f86a04] animate-pulse" />
              Secure Digital Banking Solutions
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powering Modern Banking with
              <span className="block bg-gradient-to-r from-[#f86a04] to-orange-400 bg-clip-text text-transparent">
                Security & Innovation
              </span>
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Empower your customers with digital-first experiences — from online payments and AI-driven insights to
              personalized banking journeys that inspire trust.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#f86a04] to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                Explore Solutions
              </button>
              <button className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Digital Banking */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">What is Digital Banking?</h2>
          <p className="text-gray-700 mb-4">
            Digital Banking refers to the digitization of all traditional banking activities — from account management
            and payments to loans and customer service — enabling customers to access services 24/7 through secure
            digital channels.
          </p>

          <p className="text-gray-700">
            It merges technology, analytics, and customer experience to build a smarter, faster, and more personalized
            banking environment.
          </p>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Why Modern Banks Need Digital Transformation</h2>

          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Customer Expectations:</strong> People expect convenience, mobile access, and personalization in
              every interaction.
            </li>
            <li>
              <strong>Operational Efficiency:</strong> Automation and cloud infrastructure reduce cost and time for
              banking operations.
            </li>
            <li>
              <strong>Regulatory Readiness:</strong> Digital systems simplify compliance reporting and audit trails.
            </li>
            <li>
              <strong>Data-Driven Insights:</strong> Use analytics to detect fraud, predict needs, and tailor offerings.
            </li>
            <li>
              <strong>Competitive Advantage:</strong> Stay ahead with innovative products like AI chatbots, BNPL, and
              instant payments.
            </li>
          </ul>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Core Banking Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Onboarding",
                desc: "Seamless KYC, e-signatures, and identity verification within minutes."
              },
              {
                title: "AI-Powered Insights",
                desc: "Predict customer behavior and recommend smart financial actions."
              },
              {
                title: "Secure Payments",
                desc: "PCI-DSS compliant payment gateways with fraud detection."
              },
              {
                title: "Loan Automation",
                desc: "Instant eligibility checks, digital approvals, and repayment tracking."
              },
              {
                title: "Omni-channel Experience",
                desc: "Provide consistent service across mobile, web, and chat."
              },
              {
                title: "Analytics Dashboard",
                desc: "Track KPIs, revenue growth, and customer engagement in real-time."
              }
            ].map((f, i) => (
              <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-lg mb-2 text-[#f86a04]">{f.title}</h4>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow / Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">How Our Banking Platform Works</h2>
          <p className="text-gray-700 mb-10">
            We provide banks and fintechs with a secure modular system that adapts to your growth and compliance needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "We understand your infrastructure, compliance requirements, and goals."
              },
              {
                step: "02",
                title: "Integration",
                desc: "Connect with APIs, existing banking cores, and payment gateways."
              },
              {
                step: "03",
                title: "Customization",
                desc: "Tailor modules for retail, corporate, or neo-banking environments."
              },
              {
                step: "04",
                title: "Launch",
                desc: "Go live with full monitoring, reporting, and performance analytics."
              }
            ].map((step, i) => (
              <div key={i} className="relative bg-white p-6 border border-gray-100 rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[#f86a04] mb-2">{step.step}</div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages for Clients */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Why Clients Choose Our Banking Solutions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Scalable Cloud Infrastructure</h4>
              <p className="text-gray-600">
                Designed to scale with customer volume and transaction growth without downtime.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
              <p className="text-gray-600">
                Pre-built templates for KYC/AML, RBI, and ISO standards to speed up compliance.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">24/7 Monitoring & Alerts</h4>
              <p className="text-gray-600">
                Real-time fraud detection and transaction anomaly alerts for safer banking.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">User Experience First</h4>
              <p className="text-gray-600">
                Minimal clicks, intuitive dashboards, and accessible interfaces designed for trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Security & Compliance</h2>
          <p className="text-gray-700 mb-4">
            Security is at the heart of every feature we build. Our digital banking system ensures your data and
            customers are protected with enterprise-grade security protocols.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>End-to-end encryption with TLS 1.3 and AES-256</li>
            <li>Multi-factor authentication for all users</li>
            <li>Role-based access control and detailed audit trails</li>
            <li>Compliant with PCI-DSS, ISO 27001, and RBI guidelines</li>
            <li>Continuous penetration testing and vulnerability scanning</li>
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Transform Your Banking Experience</h2>
          <p className="text-gray-700 mb-8">
            Let’s discuss your goals and see how our digital banking solutions can elevate your institution’s customer
            experience.
          </p>
          <button className="px-8 py-3 rounded-full bg-[#f86a04] text-white font-semibold hover:scale-105 transition-transform">
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
