export default function Career() {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      location: "Chennai, India",
      type: "Full-Time",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Part-Time",
    },
    {
      title: "UI/UX Designer",
      location: "Chennai, India",
      type: "Full-Time",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Build Your Career With Us
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Join KAR International Infotech and be a part of a team that’s redefining the future with innovation, passion, and purpose.
        </p>
      </section>

      {/* Why Join Us */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Why Join KAR International Infotech?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 shadow rounded">
              <h3 className="font-bold text-xl mb-2 text-[#f86a04]">Innovation Culture</h3>
              <p>We foster creativity and provide space for new ideas to thrive and make a real impact.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="font-bold text-xl mb-2 text-[#f86a04]">Flexible Work</h3>
              <p>Enjoy work-life balance with flexible hours and remote opportunities.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h3 className="font-bold text-xl mb-2 text-[#f86a04]">Growth Opportunities</h3>
              <p>Learn, grow, and level up your skills with mentorship and challenging projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
            Current Openings
          </h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-300 p-6 rounded shadow-sm"
              >
                <div>
                  <h3 className="text-xl font-bold text-[#f86a04]">{job.title}</h3>
                  <p className="text-sm text-gray-600">
                    {job.location} | {job.type}
                  </p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 bg-[#f86a04] hover:bg-[#e65c00] text-white rounded font-medium transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#f86a04] text-white py-16 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Don’t see a role that fits?</h2>
        <p className="text-lg mb-6">We’re always looking for talented people. Send us your resume and we’ll get in touch when something opens up.</p>
        <button className="bg-white text-[#f86a04] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">
          Send Resume
        </button>
      </section>
    </div>
  );
}
