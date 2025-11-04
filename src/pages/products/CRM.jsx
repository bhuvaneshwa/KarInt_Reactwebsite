import React from "react";

export default function CRM() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative py-20 bg-black">
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:50px_50px]"
          aria-hidden
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f86a04] animate-pulse" />
              All-in-one CMS & CRM for growing businesses
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Manage content, customers, and conversions —
              <span className="block bg-gradient-to-r from-[#f86a04] to-orange-400 bg-clip-text text-transparent">
                all from a single dashboard
              </span>
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              A simple, fast, and secure platform to build content-driven sites and manage customer relationships without the complexity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#f86a04] to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                Get a Demo
              </button>
              <button className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition">
                See Pricing
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-300">
              <div>✓ Hosted / Self-hosted</div>
              <div>✓ GDPR-ready</div>
              <div>✓ Integrations: Stripe, Slack, Zapier</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CRM */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">What is a CRM?</h2>
          <p className="text-gray-700 mb-4">
            CRM stands for <strong>Customer Relationship Management</strong>. It's a system that helps teams collect,
            organize, and act on customer information — contact details, interactions, purchase history, support tickets,
            marketing engagement and more — in one place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-2">Core purpose</h3>
              <p className="text-gray-600">
                Centralize customer data, automate repetitive tasks, and create a single source of truth for sales,
                marketing, and support.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-2">Who uses it?</h3>
              <p className="text-gray-600">
                Sales teams (manage pipelines), marketing teams (segment & campaign), support (tickets & SLAs), and product
                teams (user activity & feedback).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY YOU NEED A CRM */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Why you need a CRM</h2>

          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Stop losing leads:</strong> Track every lead and conversation so opportunities don’t slip through the cracks.
            </li>
            <li>
              <strong>Personalize outreach:</strong> Use customer data to send targeted messages that convert better.
            </li>
            <li>
              <strong>Improve team productivity:</strong> Automate repetitive tasks (follow-ups, reminders, workflows).
            </li>
            <li>
              <strong>Measure impact:</strong> Reports and dashboards show which campaigns and reps move the needle.
            </li>
            <li>
              <strong>Retention & growth:</strong> Use lifecycle automation to onboard customers and reduce churn.
            </li>
          </ul>
        </div>
      </section>

      {/* BENEFITS & ROI (Explain to clients) */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Business Benefits & ROI</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Faster Sales Cycles</h4>
              <p className="text-gray-600">By tracking deals and automating follow-ups, deals close faster — increasing revenue velocity.</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Higher Lead Conversion</h4>
              <p className="text-gray-600">Better lead scoring and segmentation increases conversion rates from campaigns and demos.</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Lower Operational Cost</h4>
              <p className="text-gray-600">Automation reduces manual work, letting small teams handle more customers without hiring immediately.</p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 p-6 rounded-2xl">
            <strong>Example ROI:</strong> If CRM shortens your sales cycle by 20% and increases conversion by 10%, the combined effect can increase revenue substantially while reducing cost-per-lead.
          </div>
        </div>
      </section>

      {/* USE CASES BY TEAM */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">How different teams use CRM</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Sales</h4>
              <ul className="text-gray-600 list-disc ml-5">
                <li>Pipeline management</li>
                <li>Meeting & call logging</li>
                <li>Automated reminders & sequences</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Marketing</h4>
              <ul className="text-gray-600 list-disc ml-5">
                <li>Segmentation & targeted campaigns</li>
                <li>Landing page & website behavior tracking</li>
                <li>Automated lead nurturing</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Support</h4>
              <ul className="text-gray-600 list-disc ml-5">
                <li>Ticket routing & SLA tracking</li>
                <li>Customer history for faster resolution</li>
                <li>Feedback loops to product & marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
          <p className="text-gray-700 mb-4">
            Security is critical for any system that stores customer data. Our CRM offers:
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Role-based access and permissions</li>
            <li>Encrypted data at rest and in transit (TLS)</li>
            <li>Audit logs and exportable access reports</li>
            <li>GDPR-ready workflows and consent tracking</li>
            <li>Optional on-premise / self-hosted deployment for stricter control</li>
          </ul>
        </div>
      </section>

      {/* MIGRATION & ONBOARDING PLAN */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4">Migration & Onboarding — how we help</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Discovery Call</h4>
              <p className="text-gray-600">We map existing tools, data sources, and must-have automations.</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Data Migration</h4>
              <p className="text-gray-600">CSV imports, API syncs, and validation to move contacts and history safely.</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Training & Handover</h4>
              <p className="text-gray-600">Role-based training sessions and handover documents for admins and users.</p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            Typical onboarding timeline: <strong>1–4 weeks</strong> depending on scope and integrations.
          </div>
        </div>
      </section>

  

      {/* FAQ (expanded) */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "Can I import my existing contacts and history?",
                a: "Yes — we support CSV import and many API-based migrations. We validate data to preserve duplicates and history whenever possible."
              },
              {
                q: "Do you offer on-premise installation?",
                a: "Yes — self-hosted/on-premise installations are available for enterprise customers who require full infrastructure control."
              },
              {
                q: "How secure is customer data?",
                a: "We encrypt data at rest and in transit, provide audit logs, role-based access control, and follow industry best practices for security."
              }
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-2xl font-bold mb-6 text-center">What customers say</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Asha R.", title: "Head of Growth", quote: "We consolidated content and customer data — conversions improved 34%." },
              { name: "Vikas P.", title: "Product Manager", quote: "Fast to set up and the automations saved us hours every week." },
              { name: "Maya S.", title: "Marketing Lead", quote: "Great integrations and the support team helped migrate our data smoothly." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="font-semibold mb-1">{t.name}</div>
                <div className="text-sm text-gray-500 mb-3">{t.title}</div>
                <p className="text-gray-700">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / DEMO form */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Request a demo</h3>
            <p className="text-gray-700">Tell us a bit about your project and we'll reach out within one business day.</p>
          </div>

          <form className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
            <input placeholder="Company name" className="p-3 rounded-lg border border-gray-200" />
            <input placeholder="Your name" className="p-3 rounded-lg border border-gray-200" />
            <input placeholder="Email" className="p-3 rounded-lg border border-gray-200" />
            <textarea placeholder="Brief about your use-case" rows={4} className="p-3 rounded-lg border border-gray-200" />
            <div className="flex justify-center">
              <button type="submit" className="px-6 py-3 rounded-full bg-[#f86a04] text-white font-semibold">Request Demo</button>
            </div>
          </form>
        </div>
      </section>

     
    </div>
  );
}
