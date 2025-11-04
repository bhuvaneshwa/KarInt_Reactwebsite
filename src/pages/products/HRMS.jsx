import React from "react";

export default function HRMS() {
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
              All-in-one HRMS for modern teams
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Human Resource Management System
              <span className="block bg-gradient-to-r from-[#f86a04] to-orange-400 bg-clip-text text-transparent">
                — hire, pay & engage people with ease
              </span>
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Automate payroll, streamline recruitment, manage performance, and build a people-first culture — all in one secure platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#f86a04] to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                Request Demo
              </button>
              <button className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition">
                Learn More
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-300">
              <div>✓ Payroll & Compliance</div>
              <div>✓ ATS & Onboarding</div>
              <div>✓ Performance & Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS HRMS */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">What is an HRMS?</h2>
          <p className="text-gray-700 mb-4">
            HRMS stands for <strong>Human Resource Management System</strong>. It's a platform that centralizes HR processes — recruitment, payroll, attendance, performance reviews, employee records, benefits administration, and reporting — into a single source of truth.
          </p>
          <p className="text-gray-700">
            Modern HRMS helps HR teams move from manual tasks to automated workflows so they can focus on people, not paperwork.
          </p>
        </div>
      </section>

      {/* WHY COMPANIES NEED HRMS */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Why your company needs an HRMS</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-3">
            <li><strong>Reduce manual errors:</strong> Payroll and compliance automation minimize costly mistakes.</li>
            <li><strong>Speed up hiring:</strong> Built-in ATS reduces time-to-hire with structured pipelines and automated outreach.</li>
            <li><strong>Improve retention:</strong> Performance and engagement tools help identify and retain top talent.</li>
            <li><strong>Gain insights:</strong> Reports and dashboards help leaders make data-driven people decisions.</li>
          </ul>
        </div>
      </section>

      {/* CORE MODULES & FEATURES */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Core Modules & Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Applicant Tracking (ATS)", desc: "Manage job postings, applications, interview scheduling, and candidate pipelines." },
              { title: "Onboarding", desc: "Automate paperwork, e-signatures, training checklists, and role assignment." },
              { title: "Payroll & Taxes", desc: "Automated payroll runs, tax calculations, statutory compliances, and payslips." },
              { title: "Time & Attendance", desc: "Clock-in/out, shift management, leave policies, and overtime tracking." },
              { title: "Performance Management", desc: "Goals, 1:1s, reviews, 360 feedback, and development plans." },
              { title: "Benefits & Compensation", desc: "Manage plans, approvals, reimbursements and variable pay." },
              { title: "Employee Database", desc: "Centralized profiles, documents, and HR workflows." },
              { title: "Analytics & Reports", desc: "Custom reports, headcount planning, and turnover dashboards." },
              { title: "Integrations", desc: "Connect with payroll providers, accounting, chat, calendar, and SSO." },
            ].map((m, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-[#f86a04]">{m.title}</h4>
                <p className="text-gray-600 text-sm">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS FOR HR & BUSINESS */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Benefits for HR & the Business</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Operational Efficiency</h4>
              <p className="text-gray-600">Automate repetitive tasks and reduce admin overhead.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Compliance & Audit</h4>
              <p className="text-gray-600">Audit-ready records, role-based access, and automated statutory reports.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">People Development</h4>
              <p className="text-gray-600">Track performance, identify skill gaps, and support career growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION / ONBOARDING */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4">Implementation & Onboarding</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Plan</h4>
              <p className="text-gray-600 text-sm">Scope mapping, stakeholder interviews, and timeline planning.</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Migrate</h4>
              <p className="text-gray-600 text-sm">CSV / API migration of employee records, payroll history, and documents.</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100">
              <h4 className="font-semibold mb-2">Train & Launch</h4>
              <p className="text-gray-600 text-sm">Role-based training sessions, admin handover and go-live support.</p>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            Typical timeline: <strong>2–6 weeks</strong> depending on company size and integrations.
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
          <p className="text-gray-700 mb-4">
            HR data is sensitive. Our HRMS provides enterprise-grade protections and compliance controls.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Encrypted data at rest and in transit (TLS & AES-256)</li>
            <li>Role-based access control and SSO (SAML / OAuth)</li>
            <li>Audit logs and exportable compliance reports</li>
            <li>Data retention controls and GDPR-ready features</li>
            <li>Regular penetration testing and security monitoring</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              { q: "Can we integrate with our payroll provider?", a: "Yes — we support API integrations with major payroll providers. We also provide custom connectors." },
              { q: "Is employee data exportable?", a: "Yes — admins can export data in CSV and generate compliance reports." },
              { q: "Do you provide onboarding support?", a: "Yes — we include migration assistance, training sessions, and documentation." }
            ].map((f, i) => (
              <details key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h3 className="text-2xl font-bold mb-6 text-center">What HR leaders say</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "S. Reddy", role: "HR Head", quote: "Payroll and attendance automation saved our HR team 3 days every month." },
              { name: "L. Fernandes", role: "People Ops", quote: "Recruiting pipeline visibility made hiring 40% faster." },
              { name: "K. Gupta", role: "Finance Lead", quote: "Reports helped us control headcount cost more effectively." },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="font-semibold mb-1">{t.name}</div>
                <div className="text-sm text-gray-500 mb-3">{t.role}</div>
                <p className="text-gray-700">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Ready to modernize HR?</h2>
          <p className="text-gray-700 mb-6">Schedule a demo or request a migration plan — we’ll tailor a rollout that fits your org.</p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-[#f86a04] text-white font-semibold hover:scale-105 transition-transform">Schedule Demo</button>
            <button className="px-6 py-3 rounded-full bg-white border border-gray-200">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer (kept minimal) */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="text-sm text-gray-400">Questions? hello@company.com • +91 98765 43210</div>
          <div className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} Company — Built with care.</div>
        </div>
      </footer>
    </div>
  );
}
