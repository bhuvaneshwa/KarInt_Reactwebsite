import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewsletterSubscription() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubscribe = async (e) => {
    e?.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setError("Please agree to receive occasional updates.");
      return;
    }

    setSubmitting(true);

    try {
      // Replace this timeout with a real API call if needed.
      await new Promise((res) => setTimeout(res, 700));

      setSuccess(true);
      setEmail("");
      setConsent(true);

      // Navigate to contact after a short delay so toast is visible
      setTimeout(() => {
        navigate("/contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 700);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
      // hide toast after a while
      setTimeout(() => setSuccess(false), 2500);
    }
  };

  return (
    <section className="py-12 px-4 ">
      <div className="max-w-5xl mx-auto ">
        <form
          onSubmit={handleSubscribe}
          className="relative bg-[#0b0b0b] border border-white/6 rounded-2xl p-6 sm:p-8 shadow-md"
          noValidate
        >
          {/* Decorative accent (subtle) */}
          <div
            aria-hidden
            className="hidden md:block absolute -right-12 -top-12 w-40 h-40 rounded-full bg-[#f86a04]/10 blur-2xl pointer-events-none"
          />

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                STAY IN THE LOOP<span className="text-[#f86a04] text-5xl">.....</span>
              </h3>
              <p className="mt-1 text-md text-gray-400">
                Subscribe for updates, case studies and occasional insights from{" "}
                <span className="font-semibold text-white">KAR International Infotech</span>.
              </p>
            </div>

            {/* Input + CTA */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3 md:mt-0">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>

              <div className={`flex items-center gap-2 px-3 py-2 rounded-full border ${error ? "border-red-500" : "border-transparent"} bg-white/3`}>
                <svg className="w-5 h-5 text-[#f86a04]" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                  <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7 5 7-5 4 3v6H3V8z" />
                </svg>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent w-72 text-sm text-white placeholder:text-gray-400 focus:outline-none"
                  placeholder="you@company.com"
                  aria-invalid={error ? "true" : "false"}
                  aria-describedby={error ? "newsletter-error" : undefined}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f86a04] text-white font-semibold hover:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Subscribing…" : "Subscribe"}
              </button>
            </div>
          </div>

          {/* consent + error row */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <label className="inline-flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="w-4 h-4 rounded focus:ring-2 focus:ring-[#f86a04]/40"
              />
              <span className="text-xs">I agree to receive occasional emails.</span>
            </label>

            {error ? (
              <p id="newsletter-error" className="text-xs text-red-400">{error}</p>
            ) : (
              <p className="text-xs text-gray-500">We respect your privacy—you can unsubscribe anytime.</p>
            )}
          </div>

          {/* success toast */}
          {success && (
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-sm">
              Thanks! Redirecting to contact…
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
