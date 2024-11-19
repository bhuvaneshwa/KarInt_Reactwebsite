export default function Services() {
  const services = [
    {
      title: "Website Design",
      description: "Create a stunning and responsive website design tailored to your business needs.",
      image: "/banner1.jpg",
    },
    {
      title: "Ecommerce Website",
      description: "Build a robust eCommerce platform to enhance your online sales and customer experience.",
      image: "/images/ecommerce-website.jpg",
    },
    {
      title: "Mobile Application",
      description: "Develop high-performance mobile applications for iOS and Android platforms.",
      image: "/images/mobile-application.jpg",
    },
    {
      title: "Branding & Advertising",
      description: "Strengthen your brand identity with effective advertising strategies and visuals.",
      image: "/brand-branding-advertising.jpg",
    },
    {
      title: "Graphic Designs",
      description: "Engage your audience with creative and eye-catching graphic designs.",
      image: "/images/graphic-designs.jpg",
    },
    {
      title: "Video Production-Animation",
      description: "Create impactful videos and animations to tell your story and attract customers.",
      image: "/banner1.jpg",
    },
    {
      title: "Content Writing Services",
      description: "Get compelling content that resonates with your audience and boosts engagement.",
      image: "/images/content-writing.jpg",
    },
    {
      title: "Website Design & Development",
      description: "Complete website solutions from design to development and deployment.",
      image: "/images/website-development.jpg",
    },
    {
      title: "Digital & Social Media Marketing",
      description: "Enhance your online presence with our digital and social media marketing services.",
      image: "/social-media-marketing.jpg",
    },
    {
      title: "Packaging Design",
      description: "Stand out with unique and attractive packaging designs for your products.",
      image: "/images/packaging-design.jpg",
    },
    {
      title: "SEO & Marketing",
      description: "Boost your search engine rankings and attract more organic traffic with our SEO services.",
      image: "/images/seo-marketing.jpg",
    },
    {
      title: "Event Ideation",
      description: "Plan memorable events with our ideation, design, and execution services.",
      image: "/images/event-ideation.jpg",
    },
    {
      title: "Design Execution & Management",
      description: "Ensure your designs are executed flawlessly with our management expertise.",
      image: "/images/design-execution.jpg",
    },
  ];

  return (
    <div className="container mx-auto my-10 px-4 sm:px-8">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-extralight text-center sm:text-start mb-12">
        Our <br /> <span className="text-[#f86a04]">Services</span>
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-6 border rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            {/* Image Section */}
            <div className="w-full h-40 sm:h-52 md:h-64 overflow-hidden rounded-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#f86a04] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <button className="mt-4 px-6 py-2 bg-primary text-white font-semibold  hover:bg-blue-600 transition-colors duration-300">
                Know more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
