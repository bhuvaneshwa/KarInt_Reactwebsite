import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * AdminLog
 * - Login form
 * - Password reset modal (email)
 * - Replace fetch endpoints with your backend routes
 */
export default function AdminLog() {
  const [form, setForm] = useState({ identifier: "", password: "", remember: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Password show/hide
  const [showPassword, setShowPassword] = useState(false);

  // Password reset modal
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [isResetting, setIsResetting] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [resetError, setResetError] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((s) => ({ ...s, [id]: checked }));
    } else {
      setForm((s) => ({ ...s, [id]: value }));
    }
    setError("");
    setSuccess("");
  };

  const validateLogin = () => {
    if (!form.identifier.trim()) return "Please enter email or username.";
    if (!form.password) return "Please enter password.";
    return null;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateLogin();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await login({
        identifier: form.identifier,
        password: form.password,
        remember: form.remember,
      });

      if (result.success) {
        setSuccess("Logged in successfully. Redirecting...");
        // Navigation will be handled by useEffect when isAuthenticated changes
        setTimeout(() => {
          navigate("/admin", { replace: true });
        }, 1000);
      } else {
        setError(result.error || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Password reset handlers
  const openReset = () => {
    setResetEmail("");
    setResetMessage("");
    setResetError("");
    setIsResetOpen(true);
  };

  const closeReset = () => {
    setIsResetOpen(false);
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setResetMessage("");
    setResetError("");

    if (!resetEmail || !/\S+@\S+\.\S+/.test(resetEmail)) {
      setResetError("Please enter a valid email address.");
      return;
    }

    setIsResetting(true);
    try {
      // Replace URL with your real reset endpoint
      const res = await fetch("/api/admin/request-password-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
      });

      if (res.ok) {
        setResetMessage("If the email exists, a reset link has been sent.");
      } else {
        const txt = await res.text().catch(() => "");
        setResetError(txt || "Unable to send reset email. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setResetError("Network error. Please try again.");
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="w-full max-w-md bg-[#0b0b0b] border border-primary rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-center">Admin Login</h2>
        <p className="text-sm text-gray-300 mb-4 text-center">
          Sign in to your admin account
        </p>
        <div className="mb-4 p-3 bg-blue-900/50 border border-blue-700 rounded-lg">
          <p className="text-xs text-blue-300 text-center">
            <strong>Demo Credentials:</strong><br />
            Email: admin@karint.com<br />
            Password: admin123
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="identifier" className="block text-sm font-medium mb-1">
              Email or Username
            </label>
            <input
              id="identifier"
              value={form.identifier}
              onChange={handleChange}
              placeholder="admin@example.com or username"
              className="w-full p-3 bg-gray-900 border border-primary rounded outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary transition"
              aria-required="true"
              aria-label="Email or username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Your password"
                className="w-full p-3 pr-12 bg-gray-900 border border-primary rounded outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary transition"
                aria-required="true"
                aria-label="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-300 px-2 py-1 rounded hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center text-sm">
              <input
                id="remember"
                type="checkbox"
                checked={form.remember}
                onChange={handleChange}
                className="mr-2 w-4 h-4 rounded border-primary text-primary focus:ring-primary"
              />
              Remember me
            </label>

            <button
              type="button"
              onClick={openReset}
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-primary text-black font-semibold rounded hover:opacity-95 transition disabled:opacity-60"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </div>

          {error && <p className="text-sm text-red-400 text-center">{error}</p>}
          {success && <p className="text-sm text-green-400 text-center">{success}</p>}
        </form>

        <hr className="my-4 border-gray-800" />

        <p className="text-xs text-gray-400 text-center">
          Built with ❤️ — update endpoints in this component to connect it to your API.
        </p>
      </div>

      {/* Password Reset Modal */}
      {isResetOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* backdrop */}
          <div
            onClick={closeReset}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <div className="relative z-10 w-full max-w-md bg-[#0b0b0b] border border-primary rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Reset Password</h3>
            <p className="text-sm text-gray-300 mb-4">
              Enter your account email and we'll send a password reset link.
            </p>

            <form onSubmit={handleResetSubmit} className="space-y-4">
              <div>
                <label htmlFor="resetEmail" className="block text-sm mb-1">
                  Email address
                </label>
                <input
                  id="resetEmail"
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full p-3 bg-gray-900 border border-primary rounded outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-primary transition"
                  aria-label="Email for password reset"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={isResetting}
                  className="flex-1 p-3 bg-primary text-black rounded font-semibold disabled:opacity-60"
                >
                  {isResetting ? "Sending..." : "Send Reset Link"}
                </button>
                <button
                  type="button"
                  onClick={closeReset}
                  className="flex-1 p-3 border border-gray-700 rounded text-gray-300"
                >
                  Cancel
                </button>
              </div>

              {resetError && <p className="text-sm text-red-400">{resetError}</p>}
              {resetMessage && <p className="text-sm text-green-400">{resetMessage}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
