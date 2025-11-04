import React from "react";

export default function Inventory() {
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
              Inventory Management Solutions
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Control stock, reduce waste, and deliver on time —
              <span className="block bg-gradient-to-r from-[#f86a04] to-orange-400 bg-clip-text text-transparent">
                all with real-time accuracy
              </span>
            </h1>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Centralize inventory across locations, automate reorders, and get forecasting insights so you always have the right stock at the right time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#f86a04] to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                Request Demo
              </button>
              <button className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition">
                Learn How It Works
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-gray-300">
              <div>✓ Multi-location sync</div>
              <div>✓ Barcode & RFID support</div>
              <div>✓ Demand forecasting</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Inventory Management */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">What is Inventory Management?</h2>
          <p className="text-gray-700 mb-4">
            Inventory management is the process of tracking and controlling stock — from procurement and storage to order fulfillment and returns. Modern systems keep real-time counts, reduce stockouts, and optimize holding costs.
          </p>
          <p className="text-gray-700">
            Effective inventory management saves money, improves customer satisfaction, and enables accurate planning across the business.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Why Inventory Management Matters</h2>

          <ul className="space-y-4 text-gray-700">
            <li><strong>Reduce Stockouts:</strong> Prevent lost sales by maintaining optimal reorder points.</li>
            <li><strong>Lower Carrying Costs:</strong> Avoid excess inventory and storage overhead.</li>
            <li><strong>Improve Fulfillment Speed:</strong> Faster picking and accurate availability reduce delivery times.</li>
            <li><strong>Better Forecasting:</strong> Use historical data and demand signals to plan purchases.</li>
            <li><strong>Traceability:</strong> Track batches, expirations, and returns for compliance and quality.</li>
          </ul>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Core Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Real-time Stock Levels", desc: "Instant visibility of stock across warehouses, stores, and marketplaces." },
              { title: "Multi-location Sync", desc: "Sync inventory between multiple locations with automated transfers." },
              { title: "Barcode & RFID", desc: "Fast scanning for receiving, picking, and cycle counts." },
              { title: "Automated Reorders", desc: "Set reorder points and automatic purchase suggestions." },
              { title: "Batch & Lot Tracking", desc: "Track lot numbers, expirations and recalls with traceability logs." },
              { title: "Returns & RMA", desc: "Manage returns, restocking rules, and quality inspections." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-[#f86a04]">{f.title}</h4>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Workflows */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-6">Common Workflows</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Receiving & Putaway</h4>
              <p className="text-gray-600 text-sm">Receive goods, scan barcodes, validate supplier shipments, and automatically assign storage locations.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Picking & Packing</h4>
              <p className="text-gray-600 text-sm">Optimize pick paths, batch orders for efficiency, and integrate with packing slips and shipping labels.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-2">Cycle Counts & Audits</h4>
              <p className="text-gray-600 text-sm">Schedule cycle counts, reconcile discrepancies, and maintain an audit trail for compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demand Forecasting & Analytics */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4">Demand Forecasting & Analytics</h2>
          <p className="text-gray-700 mb-4">
            Use historical sales, seasonality, and lead time to generate accurate forecasts. Our analytics help you identify slow-moving SKUs, optimize reorder points, and improve cash flow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm">
              <h4 className="font-semibold mb-2">SKU Performance</h4>
              <p className="text-gray-600 text-sm">Rank SKUs by velocity, margin, and stock turnover to prioritize replenishment.</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm">
              <h4 className="font-semibold mb-2">Inventory Health</h4>
              <p className="text-gray-600 text-sm">View dead stock, ageing inventory, and holding costs to take corrective action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Integrations</h2>
          <p className="text-gray-700 mb-6">Connect inventory with ERP, POS, ecommerce, accounting, and shipping providers for a unified flow.</p>

          <div className="flex flex-wrap gap-4">
            {["Shopify","WooCommerce","Magento","QuickBooks","SAP","Oracle","ShipRocket","ShipStation"].map((x, i) => (
              <div key={i} className="px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm">{x}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Security & Traceability</h2>
          <p className="text-gray-700 mb-4">Inventory systems often handle sensitive supply and costing data — we secure it with enterprise-grade controls.</p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Role-based access and permissioning</li>
            <li>Encrypted connections and secure cloud hosting</li>
            <li>Detailed audit logs for inventory movements</li>
            <li>Batch & lot traceability for recalls and quality control</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              { q: "Can we barcode our entire warehouse quickly?", a: "Yes — our onboarding includes barcode mapping and optimized putaway plans for fast rollout." },
              { q: "Do you support batch/expiry tracking for perishable goods?", a: "Yes — batch, lot and expiry tracking is supported with alerts for near-expiry items." },
              { q: "Can inventory sync with marketplaces in real-time?", a: "Yes — integrations provide near real-time sync to avoid overselling across channels." }
            ].map((f, i) => (
              <details key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <summary className="font-semibold cursor-pointer">{f.q}</summary>
                <p className="mt-3 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">Ready to optimize inventory?</h2>
          <p className="text-gray-700 mb-8">Book a demo to see how we can tailor inventory workflows for your business and reduce carrying costs.</p>
          <button className="px-8 py-3 rounded-full bg-[#f86a04] text-white font-semibold hover:scale-105 transition-transform">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
}
