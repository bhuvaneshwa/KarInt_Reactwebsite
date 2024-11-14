export default function Services() {
  const services = [
    {
      title: "Website Design",
      description: "Create a stunning and responsive website design tailored to your business needs.",
      image: "/images/website-design.jpg", // Update this path as needed
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
      image: "/images/branding-advertising.jpg",
    },
    {
      title: "Graphic Designs",
      description: "Engage your audience with creative and eye-catching graphic designs.",
      image: "/images/graphic-designs.jpg",
    },
    {
      title: "Video Production-Animation",
      description: "Create impactful videos and animations to tell your story and attract customers.",
      image: "/images/video-production.jpg",
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
      image: "/images/social-media-marketing.jpg",
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
    <div className="container mx-auto my-10 px-8">
      <h2 className="text-5xl font-extralight text-start mb-8">Our <br/> <span className="text-[#f86a04]">Services</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-50 text-center"
          >
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
              Know Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
