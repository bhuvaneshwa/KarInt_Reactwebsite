import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    option: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEmptyField = Object.values(formData).some(
      (field) => field.trim() === ""
    );
    if (isEmptyField) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          companyName: "",
          option: "",
          message: "",
        });
      } else {
        setErrorMessage("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-black text-white px-4 py-12 sm:px-8 lg:px-20 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight">
            Let&apos;s take your <span className="text-primary">business</span> <br />
            to places, <span className="text-primary">together!</span>
          </h1>
          <h4 className="mt-4 sm:mt-6 text-base sm:text-lg">
            We work with you to nurture your business toward success faster.
          </h4>

          <div className="pt-10">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {["firstName", "lastName", "phone", "email", "companyName"].map(
                (field) => (
                  <div key={field}>
                    <input
                      type="text"
                      id={field}
                      className="w-full p-3 bg-gray-200 rounded text-black placeholder:text-gray-500"
                      placeholder={field
                        .replace(/([A-Z])/g, " $1")
                        .trim()}
                      value={formData[field]}
                      onChange={handleChange}
                    />
                  </div>
                )
              )}
              <div>
              <select
  id="option"
  name="option"
  required
  className="w-full p-3 bg-gray-200 rounded text-black"
  value={formData.option}
  onChange={handleChange}
>
  <option value="">Choose an option</option>
  <option value="Consulting">Consulting</option>
  <option value="Partnership">Partnership</option>
  <option value="Web Development">Web Development</option>
  <option value="Graphic Designing">Graphic Designing</option>
  <option value="Digital Marketing">Digital Marketing</option>
  <option value="Software Development">Software Development</option>
  <option value="SEO">SEO (Search Engine Optimization)</option>
  <option value="Social Media Management">Social Media Management</option>
  <option value="E-commerce Solutions">E-commerce Solutions</option>
  <option value="Mobile App Development">Mobile App Development</option>
  <option value="Other">Other</option>
</select>

              </div>
              <div className="md:col-span-2">
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 bg-gray-200 rounded text-black placeholder:text-gray-500"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full p-4 bg-[#f86a04] hover:bg-[#e65c00] transition-all duration-300 text-white text-lg uppercase font-semibold rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
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
