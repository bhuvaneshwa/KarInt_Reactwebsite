import React from "react";

export default function ERP() {
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
              Integrated Business Management Software
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise Resource Planning
              <span className="block bg-gradient-to-r from-[#f86a04] to-orange-400 bg-clip-text text-transparent">
                — unifying your business operations
              </span>
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Streamline processes, improve collaboration, and make data-driven decisions with our modern ERP solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#f86a04] to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                Schedule Demo
              </button>
              <button className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is ERP */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">What is ERP?</h2>
          <p className="text-gray-700 mb-4">
            ERP (Enterprise Resource Planning) is an integrated system that connects and manages all major business
            processes — finance, HR, supply chain, manufacturing, procurement, and more — in one platform.
          </p>
          <p className="text-gray-700">
            It gives your organization a single source of truth, improving visibility, efficiency, and decision-making
            across departments.
          </p>
        </div>
      </section>

      {/* Why Businesses Need ERP */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Why Businesses Need ERP</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-3">
            <li>
              <strong>Data Centralization:</strong> Eliminates silos by consolidating all business data into one platform.
            </li>
            <li>
              <strong>Increased Productivity:</strong> Automates workflows and reduces manual operations.
            </li>
            <li>
              <strong>Better Decision-Making:</strong> Access real-time analytics for accurate forecasting and planning.
            </li>
            <li>
              <strong>Improved Compliance:</strong> Built-in audit trails and reporting support regulatory requirements.
            </li>
            <li>
              <strong>Scalability:</strong> Adapts easily as your organization grows in size and complexity.
            </li>
          </ul>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Core ERP Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Finance & Accounting", desc: "Manage general ledger, budgeting, invoices, and compliance." },
              { title: "Human Resources (HR)", desc: "Payroll, employee management, attendance, and benefits tracking." },
              { title: "Inventory Management", desc: "Track stock levels, reorder points, and warehouse operations." },
              { title: "Procurement", desc: "Automate purchase orders, vendor management, and approval workflows." },
              { title: "Sales & CRM", desc: "Quote-to-cash automation, lead tracking, and customer relationship management." },
              { title: "Manufacturing", desc: "Production scheduling, materials planning, and shop floor monitoring." },
              { title: "Supply Chain", desc: "Plan, monitor, and optimize logistics and delivery operations." },
              { title: "Project Management", desc: "Monitor timelines, budgets, and team progress in one dashboard." },
              { title: "Analytics & BI", desc: "Interactive dashboards for KPIs, reports, and predictive insights." },
            ].map((mod, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold mb-2 text-[#f86a04]">{mod.title}</h4>
                <p className="text-gray-600 text-sm">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Key Benefits of ERP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Streamlined Operations</h4>
              <p className="text-gray-600">Connects teams and departments through automated workflows.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Reduced Costs</h4>
              <p className="text-gray-600">Eliminates duplication, reduces overhead, and improves efficiency.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Scalable & Modular</h4>
              <p className="text-gray-600">Choose modules that fit today — expand as your business evolves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">ERP Implementation Process</h2>
          <p className="text-gray-700 mb-10">
            A proven, step-by-step approach to ensure successful ERP rollout with minimal disruption.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Assessment", desc: "Analyze current systems and define ERP requirements." },
              { step: "02", title: "Configuration", desc: "Customize modules, workflows, and user roles." },
              { step: "03", title: "Data Migration", desc: "Import and verify legacy data for accuracy." },
              { step: "04", title: "Training & Launch", desc: "Provide hands-on training and post-launch support." },
            ].map((s, i) => (
              <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <div className="text-3xl font-bold text-[#f86a04] mb-2">{s.step}</div>
                <h4 className="font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">ERP Integrations</h2>
          <p className="text-gray-700 mb-8">
            Our ERP integrates seamlessly with the tools you already use — ensuring a unified experience across departments.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {["Salesforce", "QuickBooks", "Shopify", "SAP", "Stripe", "Google Workspace", "Microsoft 365"].map((name, i) => (
              <div key={i} className="px-5 py-3 bg-white border border-gray-200 rounded-full shadow-sm text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
          <p className="text-gray-700 mb-4">
            We take data security seriously. Our ERP follows strict global security and privacy frameworks to protect
            your business information.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Data encryption at rest and in transit (TLS & AES-256)</li>
            <li>Role-based permissions and access control</li>
            <li>Audit logging and compliance tracking (GDPR, ISO 27001)</li>
            <li>Regular vulnerability assessments and penetration testing</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Can ERP integrate with our existing systems?", a: "Yes — our ERP offers API and middleware connectors to integrate with CRM, HRMS, and accounting tools." },
              { q: "Is your ERP cloud-based or on-premise?", a: "Both options are available, depending on your organization’s needs and data policies." },
              { q: "How long does ERP implementation take?", a: "Typically 4–12 weeks, depending on business size, modules, and data migration scope." },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your operations?</h2>
          <p className="text-gray-700 mb-6">
            Let’s discuss your business challenges and design an ERP roadmap that delivers measurable results.
          </p>
          <button className="px-8 py-3 rounded-full bg-[#f86a04] text-white font-semibold hover:scale-105 transition-transform">
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
