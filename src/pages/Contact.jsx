import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    option: "",
    otherOption: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrorMessage("");
    setSuccessMessage("");
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["firstName", "phone", "email", "option", "message"];
    for (const field of requiredFields) {
      if (formData[field].trim() === "") {
        setErrorMessage("Please fill in all required fields.");
        return;
      }
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrorMessage(
        "Please enter a valid phone number (7 to 15 digits, may include + and spaces)."
      );
      return;
    }

    if (formData.option === "Other" && !formData.otherOption.trim()) {
      setErrorMessage("Please specify your requirement in the text field.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Send email via serverless function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      setSuccessMessage("Your message has been sent successfully! We'll get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        companyName: "",
        option: "",
        otherOption: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to send your message. Please try again or contact us directly at karinternationalinfotech@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-black text-white px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight">
            Let&apos;s take your{" "}
            <span className="text-[#f86a04] italic">business</span> <br />
            to <span className="text-[#f86a04] italic">places, together!</span>
          </h1>
          <h4 className="mt-4 sm:mt-6 text-base sm:text-lg">
            We work with you to nurture your business toward success faster.
          </h4>

          <div className="pt-10">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* First Name (required) */}
              <div>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-3 bg-gray-200 border rounded text-black placeholder:text-black focus:ring-2 focus:ring-[#f86a04] outline-none transition-all duration-200"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Last Name (optional) */}
              <div>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-3 bg-gray-200 border rounded text-black placeholder:text-black focus:ring-2 focus:ring-[#f86a04] outline-none transition-all duration-200"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Phone (required) */}
              <div>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-3 bg-gray-200 border rounded text-black placeholder:text-black focus:ring-2 focus:ring-[#f86a04] outline-none transition-all duration-200"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email (required) */}
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-200 border rounded text-black placeholder:text-black focus:ring-2 focus:ring-[#f86a04] outline-none transition-all duration-200"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Company (optional) */}
              <div>
                <input
                  type="text"
                  id="companyName"
                  className="w-full p-3 bg-gray-200 border rounded text-black placeholder:text-black focus:ring-2 focus:ring-[#f86a04] outline-none transition-all duration-200"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              {/* Services (required) */}
              <div className="relative z-10">
                <select
                  id="option"
                  name="option"
                  className="w-full p-3 bg-gray-200 border rounded text-black focus:ring-2 focus:ring-[#f86a04] outline-none transition-all duration-200 appearance-none cursor-pointer"
                  value={formData.option}
                  onChange={handleChange}
                  required
                  style={{
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  <option value="">Select a Service *</option>

                  <optgroup label="Consulting & Business">
                    <option value="Business Consulting">Business Consulting</option>
                    <option value="Strategy & Planning">Strategy & Planning</option>
                  </optgroup>

                  <optgroup label="Software & Web Development">
                    <option value="Custom Software Solutions">Custom Software Solutions</option>
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="E-commerce Solutions">E-commerce Solutions</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                  </optgroup>

                  <optgroup label="Branding & Design">
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Logo & Brand Identity">Logo & Brand Identity</option>
                  </optgroup>

                  <optgroup label="Digital Marketing">
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SEO (Search Engine Optimization)">SEO (Search Engine Optimization)</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Content Marketing">Content Marketing</option>
                  </optgroup>

                  <optgroup label="Training & Workshops">
                    <option value="Institutional Training">Institutional Training</option>
                    <option value="Online Career Development Programs">
                      Online Career Development Programs
                    </option>
                  </optgroup>

                  <optgroup label="Other">
                    <option value="Product Enquiry">Our Products</option>
                    <option value="Other">Other</option>
                  </optgroup>
                </select>
                {/* ▼ Custom dropdown arrow */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none">
                  ▼
                </span>
              </div>

              {/* Dynamic “Other” field */}
              {formData.option === "Other" && (
                <div className="md:col-span-2">
                  <input
                    type="text"
                    id="otherOption"
                    className="w-full p-3 bg-gray-200 border rounded text-black placeholder:text-black focus:ring-2 focus:ring-[#f86a04] outline-none transition-all duration-200"
                    placeholder="Please specify your requirement *"
                    value={formData.otherOption}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              {/* Message (required) */}
              <div className="md:col-span-2">
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 bg-gray-200 border rounded text-black placeholder:text-black focus:ring-2 focus:ring-[#f86a04] outline-none transition-all duration-200"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full p-4 bg-[#f86a04] hover:bg-[#e65c00] transition-all duration-300 text-white text-lg uppercase font-semibold rounded flex items-center justify-center gap-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>

            {/* Messages */}
            {successMessage && (
              <p className="mt-4 text-green-500 text-center">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
