import React, { useState } from "react";

export default function Billing() {
  const testimonials = [
    {
      name: "Anita M.",
      role: "Founder, BrightShop",
      quote:
        "Since switching to this billing system our invoice-to-payment time dropped from 14 days to 3 days."
    },
    {
      name: "Ravi K.",
      role: "CFO, LogiTech",
      quote:
        "Auto-reconciliation saved our accounts team hours every week — highly recommended."
    }
  ];

  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // static demo: replace with EmailJS / Netlify / API when ready
    console.log("Demo request:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", company: "", message: "" });
  }

  return (
    <div className="mx-auto min-h-screen bg-white text-black">
      {/* Hero Section (black) */}
      <section className="relative bg-black text-white overflow-visible shadow-2xl mb-40 lg:h-[650px] flex flex-col justify-start items-center pt-10 lg:pt-16">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,106,4,0.06),transparent)] pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between p-12 gap-10 w-full container mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">Billing Software</h1>
            <p className="text-lg lg:text-xl opacity-90 mb-8 max-w-xl leading-relaxed">
              Simplify invoicing, payments, and financial tracking for businesses of all sizes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-lg bg-[#f86a04] text-white font-semibold text-lg hover:bg-orange-500 transition-all shadow-md hover:shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            {/* placeholder image — swap with your asset when ready */}
            <img
              src="https://source.unsplash.com/720x720/?billing,finance,dashboard"
              alt="Billing"
              className="w-[420px] h-[420px] object-cover rounded-3xl shadow-2xl border-4 border-white/10"
            />
            <div className="absolute -bottom-5 -right-5 bg-[#f86a04] text-white px-4 py-2 rounded-lg font-medium shadow-lg">
              Launching Soon
            </div>
          </div>
        </div>

        {/* Overlapping Card */}
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 z-30 w-[90%] md:w-[80%] lg:w-[70%]">
          <div
            className="bg-white text-slate-900 rounded-3xl p-10 sm:p-14 flex flex-col sm:flex-row justify-between items-center gap-8 border border-slate-200 shadow-lg"
            style={{ boxShadow: "0 20px 50px rgba(248,106,4,0.08)" }}
          >
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-3 text-[#f86a04]">Ready to simplify your billing?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Automate invoices, track expenses, and get paid faster with our modern billing software. Boost efficiency,
                minimize manual work, and focus on growing your business with confidence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#f86a04] text-white rounded-xl font-semibold text-lg hover:bg-orange-500 transition-all shadow-md">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-[#f86a04] text-[#f86a04] rounded-xl font-semibold text-lg hover:bg-[#f86a04]/10 transition-all">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-56" />

      {/* What is Billing Software */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">What is Billing Software?</h2>
          <p className="text-gray-700 mb-4">
            Billing software automates the creation, sending, tracking, and reconciliation of invoices and payments.
            It centralizes customer billing histories, automates recurring invoices, supports multiple payment methods,
            and provides reporting to help businesses manage cash flow and accounting more effectively.
          </p>
          <p className="text-gray-700">
            In short: it replaces manual billing spreadsheets and scattered payment processes with a unified, auditable system.
          </p>
        </div>
      </section>

      {/* Why you need Billing Software */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Why your business needs billing software</h2>

          <ul className="space-y-4 text-gray-700">
            <li><strong>Get paid faster:</strong> automated invoices and payment links reduce time-to-pay.</li>
            <li><strong>Reduce errors:</strong> template-driven invoices and auto-calculation prevent billing mistakes.</li>
            <li><strong>Improve cash flow visibility:</strong> real-time dashboards show outstanding invoices and forecasted cash.</li>
            <li><strong>Save accounting time:</strong> auto-reconciliation and exportable reports reduce manual effort.</li>
            <li><strong>Scale easily:</strong> handle subscriptions, recurring bills, and multi-currency invoicing.</li>
          </ul>
        </div>
      </section>

      {/* Benefits & ROI */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Benefits & ROI</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Lower DSO (Days Sales Outstanding)</h4>
              <p className="text-gray-600 text-sm">Faster invoicing and payment reminders decrease the time it takes to collect revenue.</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Reduced Accounting Overhead</h4>
              <p className="text-gray-600 text-sm">Automation reduces manual reconciliation and frees finance teams for analysis.</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Better Cash Forecasting</h4>
              <p className="text-gray-600 text-sm">Accurate receivables data improves planning and working capital management.</p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 p-6 rounded-2xl">
            <strong>Quick example:</strong> Automating recurring invoices + payment reminders can reduce late payments by 40–60%, improving cash flow and lowering collection costs.
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Core Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Invoice Generation", desc: "Create professional invoices with templates, taxes, discounts & custom branding." },
              { title: "Recurring Billing", desc: "Automate subscriptions and periodic invoices with retry logic and dunning." },
              { title: "Payment Links & Gateways", desc: "Accept cards, UPI, netbanking, wallets and reconcile payments automatically." },
              { title: "Auto-Reconciliation", desc: "Match bank feeds and payment confirmations to invoices automatically." },
              { title: "Credit Notes & Refunds", desc: "Manage adjustments, partial refunds and reversals with audit trails." },
              { title: "Reporting & Exports", desc: "AR aging, revenue recognition, tax reports and CSV exports for accounting." }
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100">
                <h4 className="text-lg font-semibold mb-2 text-[#f86a04]">{f.title}</h4>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Workflows */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Common Workflows</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Quote → Invoice → Payment</h4>
              <p className="text-gray-600 text-sm">Convert accepted quotes into invoices and attach payment links for a single-click payment experience.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Subscription Billing & Dunning</h4>
              <p className="text-gray-600 text-sm">Automate subscription renewals, payment retries and customer notifications for failed payments.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Auto-Reconciliation with Bank Feeds</h4>
              <p className="text-gray-600 text-sm">Import bank statements and reconcile received payments to invoices automatically with suggested matches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
          <p className="text-gray-700 mb-4">
            Billing systems process sensitive financial data. We build security and compliance into every layer.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>PCI-DSS compatible payments and secure gateway integrations</li>
            <li>Encryption in transit (TLS) and encryption at rest</li>
            <li>Role-based access control, audit logs and activity trails</li>
            <li>Two-factor authentication for user accounts</li>
            <li>Data export controls and GDPR-ready consent tracking</li>
          </ul>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Integrations</h2>
          <p className="text-gray-700 mb-6">Connect billing with your existing stack for smooth finance ops.</p>

          <div className="flex flex-wrap gap-4">
            {["QuickBooks", "Xero", "Stripe", "Razorpay", "PayPal", "Zoho Books", "Shopify", "WooCommerce"].map((n, i) => (
              <div key={i} className="px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm text-sm">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              { q: "Can I accept multiple payment methods?", a: "Yes — cards, UPI, netbanking, wallets and direct debit are supported via gateway integrations." },
              { q: "Do you support GST/VAT and tax rules?", a: "Yes — tax fields, multi-rate support and tax reports are built in for compliant invoicing." },
              { q: "Can invoices be branded for clients?", a: "Absolutely — add your logo, colors, and custom notes to all documents." }
            ].map((f, i) => (
              <details key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Image Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-6">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <img
              src="https://source.unsplash.com/1200x600/?dashboard,analytics,finance"
              alt="Billing Dashboard Preview"
              className="w-full object-cover"
              style={{ maxHeight: 520 }}
            />
          </div>
          <div className="mt-6 text-slate-600">
            <h3 className="text-2xl font-semibold text-slate-800">Powerful Dashboard for Financial Insights</h3>
            <p className="mt-2 text-sm max-w-2xl mx-auto">
              View cash flow, payables, receivables, and expenses in one clean interface. Designed for clarity and quick decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white max-w-7xl mx-auto border rounded-xl p-10 shadow-sm mt-16">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">What our customers say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 border rounded-xl bg-slate-50 shadow-sm">
              <p className="text-slate-700 italic">“{t.quote}”</p>
              <div className="mt-4 font-semibold text-slate-800">{t.name}</div>
              <div className="text-sm text-slate-500">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 bg-white rounded-2xl p-10 lg:p-14 text-center container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-slate-900">Start your free trial today!</h3>
          <p className="text-lg text-slate-700 mb-6">
            Experience seamless billing, powerful insights, and fast payments — all in one place.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <button className="px-8 py-4 bg-[#f86a04] text-white rounded-lg font-semibold text-lg hover:bg-orange-500 transition">Start Free Trial</button>
            <button className="px-8 py-4 border-2 border-[#f86a04] rounded-lg font-semibold text-lg hover:bg-[#f86a04]/10 transition">Request Demo</button>
          </div>

          {/* Inline Demo Form (static) */}
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="p-3 rounded-lg border border-gray-200"
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="p-3 rounded-lg border border-gray-200"
                />
              </div>

              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company (optional)"
                className="p-3 rounded-lg border border-gray-200"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="A short message or goals"
                className="p-3 rounded-lg border border-gray-200"
              />

              <div className="flex justify-center">
                <button type="submit" className="px-6 py-3 rounded-full bg-[#f86a04] text-white font-semibold hover:bg-orange-500 transition">
                  Request Demo
                </button>
              </div>
            </form>

            {submitted && (
              <div className="mt-4 text-center text-green-600 font-medium">Thanks — demo request submitted (demo only).</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
