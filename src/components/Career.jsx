import { useState } from "react";
import { Link } from "react-router-dom";

export default function Career() {
  const API_URL = "/api/careers/apply"; // update if needed

  // Jobs now include description, responsibilities and skills
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Chennai, India",
      type: "Full-Time",
      tags: ["React", "Tailwind", "HTML/CSS"],
      short: "Build responsive, accessible UI using modern frontend stack.",
      description:
        "We are looking for a passionate Frontend Developer to build and maintain web applications with excellent UX. You will collaborate with designers and backend engineers to ship features quickly and reliably.",
      responsibilities: [
        "Develop responsive user interfaces using React.",
        "Implement designs from Figma and collaborate with designers.",
        "Optimize applications for performance and accessibility.",
        "Write unit and integration tests.",
      ],
      skills: ["React / Next.js", "Tailwind CSS", "JavaScript (ES6+)", "REST/GraphQL", "Testing (Jest/RTL)"],
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Remote",
      type: "Part-Time",
      tags: ["Node.js", "Express", "DB"],
      short: "Design and maintain backend APIs and services.",
      description:
        "Join our backend team to design scalable services and APIs. You will work on data models, integrations and optimize server-side performance.",
      responsibilities: [
        "Design and build RESTful APIs with Node.js/Express.",
        "Work with databases (Postgres / MongoDB) and caching.",
        "Ensure security, reliability and observability of services.",
        "Collaborate with frontend to define contracts and interfaces.",
      ],
      skills: ["Node.js", "Express/Koa", "PostgreSQL / MongoDB", "REST / GraphQL", "Docker / CI"],
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Chennai, India",
      type: "Full-Time",
      tags: ["Figma", "Prototyping", "Design Systems"],
      short: "Design delightful interfaces and product flows.",
      description:
        "We need a UI/UX Designer to shape the look and feel of our products — from concept to high-fidelity prototypes and design systems.",
      responsibilities: [
        "Create wireframes and high-fidelity prototypes in Figma.",
        "Iterate on designs based on user feedback and research.",
        "Build and maintain a component-driven design system.",
        "Work closely with frontend engineers on implementation.",
      ],
      skills: ["Figma", "Prototyping", "User Research", "Design Systems", "Accessibility"],
    },
  ];

  // Upload & apply state (same as your upload-enabled component)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState(null);

  const openApply = (job) => {
    setSelectedJob(job || null);
    setIsApplyModalOpen(true);
    setStatusMessage(null);
  };

  const openDetails = (job) => {
    setSelectedJob(job);
    setIsDetailsOpen(true);
  };

  const closeApplyModal = () => {
    setIsApplyModalOpen(false);
    setSelectedJob(null);
    setForm({ name: "", email: "", message: "" });
    setFile(null);
    setFileError("");
    setUploadProgress(0);
    setSubmitting(false);
    setStatusMessage(null);
  };

  const closeDetailsModal = () => {
    setIsDetailsOpen(false);
    setSelectedJob(null);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    setFileError("");
    const f = e.target.files?.[0];
    if (!f) {
      setFile(null);
      return;
    }
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 5 * 1024 * 1024; // 5 MB
    if (!allowed.includes(f.type)) {
      setFileError("Please upload PDF or DOC/DOCX files only.");
      setFile(null);
      return;
    }
    if (f.size > maxSize) {
      setFileError("File too large. Max size is 5 MB.");
      setFile(null);
      return;
    }
    setFile(f);
  };

  // submit with XHR to show progress
  const handleSubmit = (e) => {
    e.preventDefault();
    setFileError("");
    setStatusMessage(null);

    if (!form.name.trim() || !form.email.trim()) {
      setStatusMessage({ type: "error", text: "Please enter name and email." });
      return;
    }
    if (!file) {
      setFileError("Please attach your resume (PDF/DOC/DOCX).");
      return;
    }

    setSubmitting(true);
    setUploadProgress(0);

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("message", form.message);
    fd.append("jobId", selectedJob ? selectedJob.id : "");
    fd.append("resume", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", API_URL, true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percent);
      }
    };

    xhr.onload = () => {
      setSubmitting(false);
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const res = JSON.parse(xhr.responseText);
          setStatusMessage({ type: "success", text: res.message || "Application submitted successfully." });
        } catch {
          setStatusMessage({ type: "success", text: "Application submitted successfully." });
        }
        setForm({ name: "", email: "", message: "" });
        setFile(null);
        setUploadProgress(100);
        setTimeout(() => closeApplyModal(), 1400);
      } else {
        let errText = "Upload failed. Please try again later.";
        try {
          const res = JSON.parse(xhr.responseText);
          if (res?.message) errText = res.message;
        } catch {}
        setStatusMessage({ type: "error", text: errText });
      }
    };

    xhr.onerror = () => {
      setSubmitting(false);
      setStatusMessage({ type: "error", text: "Network error. Please try again." });
    };

    xhr.send(fd);
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* Hero */}
      <header className="relative bg-neutral-900/95 text-white">
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Build Your Career With <span className="text-[#f86a04]">KAR International InfoTech</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-200">
              Join a team that’s redefining the future with innovation, passion, and real impact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block">
                <button className="px-6 py-3 rounded-full bg-[#f86a04] text-black font-semibold hover:scale-[1.02] transition transform shadow">
                  Contact HR
                </button>
              </Link>
              <button
                onClick={() => { setSelectedJob(null); setIsApplyModalOpen(true); }}
                className="px-6 py-3 rounded-full bg-white/8 text-white border border-white/10 backdrop-blur-sm hover:bg-white/10 transition"
              >
                Send Resume
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Why Join Us */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Join KAR International InfoTech?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Innovation Culture", desc: "We foster creativity and allow ideas to thrive.", icon: "🧠" },
              { title: "Flexible Work", desc: "Work-life balance with flexible hours & remote options.", icon: "🌴" },
              { title: "Growth Opportunities", desc: "Mentorship, learning paths and real challenges.", icon: "📈" },
            ].map((c) => (
              <article key={c.title} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#f86a04]/30 to-[#f86a04]/10 flex items-center justify-center text-2xl">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{c.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{c.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Current Openings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#f86a04]">{job.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{job.location} • <span className="font-medium">{job.type}</span></p>
                  <p className="mt-3 text-sm text-gray-700">{job.short}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.tags && job.tags.map((t) => (
                      <span key={t} className="inline-block text-xs px-2 py-1 bg-[#f86a04]/10 text-[#f86a04] rounded-full border border-[#f86a04]/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => openApply(job)}
                    className="px-4 py-2 rounded-full bg-[#f86a04] text-black font-semibold hover:brightness-95 transition"
                  >
                    Apply Now
                  </button>

                  {/* See details opens details modal */}
                  <button
                    onClick={() => openDetails(job)}
                    className="text-sm text-gray-600 hover:underline"
                  >
                    See details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#f86a04]/6 to-[#f86a04]/3 border border-[#f86a04]/8 rounded-3xl p-10 shadow-md">
          <h3 className="text-2xl font-bold mb-2">Don’t see a role that fits?</h3>
          <p className="text-gray-700 mb-6">We’re always looking for talented people. Send your resume and we’ll reach out when something opens up.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => { setSelectedJob(null); setIsApplyModalOpen(true); }} className="px-6 py-3 rounded-full bg-[#f86a04] text-black font-semibold">Send Resume</button>
            <Link to="/contact" className="px-6 py-3 rounded-full border border-gray-200 text-gray-800 bg-white/50">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Details Modal */}
      {isDetailsOpen && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeDetailsModal} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 z-10 overflow-y-auto max-h-[85vh]">
            <header className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold">{selectedJob.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{selectedJob.location} • {selectedJob.type}</p>
              </div>
              <button onClick={closeDetailsModal} className="text-gray-500 hover:text-gray-700" aria-label="Close">✕</button>
            </header>

            <section className="mb-4">
              <h4 className="text-lg font-semibold mb-2">About the role</h4>
              <p className="text-gray-700">{selectedJob.description}</p>
            </section>

            <section className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Key responsibilities</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {selectedJob.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>

            <section className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Skills & Requirements</h4>
              <div className="flex flex-wrap gap-2">
                {selectedJob.skills.map((s, i) => (
                  <span key={i} className="inline-block text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full border">{s}</span>
                ))}
              </div>
            </section>

            <div className="flex justify-end gap-3">
              <button onClick={() => { openApply(selectedJob); }} className="px-4 py-2 rounded-md bg-[#f86a04] text-black font-semibold">Apply for this role</button>
              <button onClick={closeDetailsModal} className="px-4 py-2 rounded-md border">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Apply Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeApplyModal} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 z-10">
            <header className="flex items-start justify-between">
              <div>
                <h4 className="text-xl font-bold">{selectedJob ? `Apply — ${selectedJob.title}` : "Send Resume"}</h4>
                <p className="text-sm text-gray-500 mt-1">Attach your resume (PDF / DOC / DOCX) and a short message. We will follow up via email.</p>
              </div>
              <button onClick={closeApplyModal} className="text-gray-400 hover:text-gray-600" aria-label="Close">✕</button>
            </header>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">Full name</span>
                  <input required name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="px-4 py-2 border rounded-md w-full" />
                </label>
                <label className="flex flex-col">
                  <span className="text-sm text-gray-600 mb-1">Email address</span>
                  <input required name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email address" className="px-4 py-2 border rounded-md w-full" />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-sm text-gray-600 mb-1">Resume (PDF / DOC / DOCX) — max 5MB</span>
                <input
                  type="file"
                  accept=".pdf, .doc, .docx, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                  className="w-full text-sm"
                />
                {file && <div className="mt-2 text-sm text-gray-700">Selected: <span className="font-medium">{file.name}</span> ({Math.round(file.size / 1024)} KB)</div>}
                {fileError && <div className="mt-2 text-sm text-red-500">{fileError}</div>}
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-gray-600 mb-1">Short message (optional)</span>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Short message (optional)" className="px-4 py-2 border rounded-md w-full"></textarea>
              </label>

              {uploadProgress > 0 && (
                <div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="h-2 bg-[#f86a04] transition-all" style={{ width: `${uploadProgress}%` }} />
                  </div>
                  <div className="text-sm text-gray-500 mt-2">{uploadProgress}%</div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">We will keep your application private.</div>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={closeApplyModal} className="px-4 py-2 rounded-md border">Cancel</button>
                  <button type="submit" disabled={submitting} className="px-4 py-2 rounded-md bg-[#f86a04] text-black font-semibold">
                    {submitting ? "Sending..." : "Submit Application"}
                  </button>
                </div>
              </div>

              {statusMessage && (
                <div className={`mt-3 text-sm ${statusMessage.type === "error" ? "text-red-500" : "text-green-600"}`}>
                  {statusMessage.text}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
