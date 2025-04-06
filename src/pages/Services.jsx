export default function Services() {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description:
        "We build stunning, fast, and secure websites that help businesses stand out online.",
      image: "https://source.unsplash.com/600x400/?web-development,code",
    },
    {
      id: 2,
      name: "Graphic Designing",
      description:
        "Creative logos, banners, and designs that make your brand look professional and attractive.",
      image: "https://source.unsplash.com/600x400/?graphic-design,creative",
    },
    {
      id: 3,
      name: "Digital Marketing",
      description:
        "We help businesses grow online with social media, SEO, and ads that bring real results.",
      image: "https://source.unsplash.com/600x400/?digital-marketing,ads,socialmedia",
    },
    {
      id: 4,
      name: "Software Development",
      description:
        "Custom software solutions tailored to make your business run smoother and smarter.",
      image: "https://source.unsplash.com/600x400/?software,development,technology",
    },
    {
      id: 5,
      name: "SEO (Search Engine Optimization)",
      description:
        "Want your website to show up on Google? We optimize your site to rank higher and get more visitors.",
      image: "https://source.unsplash.com/600x400/?seo,search-engine,ranking",
    },
    {
      id: 6,
      name: "Social Media Management",
      description:
        "We manage your social media pages, create engaging content, and help attract more customers.",
      image: "https://source.unsplash.com/600x400/?social-media,instagram,facebook",
    },
    {
      id: 7,
      name: "E-commerce Solutions",
      description:
        "Start selling online with an easy-to-use and beautifully designed online store.",
      image: "https://source.unsplash.com/600x400/?ecommerce,shopping,online-store",
    },
    {
      id: 8,
      name: "Mobile App Development",
      description:
        "Get your own Android or iOS app that works smoothly and keeps your users engaged.",
      image: "https://source.unsplash.com/600x400/?mobile-app,android,ios",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center hover:shadow-xl transition"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{service.name}</h2>
            <p className="text-gray-500 text-sm mb-3">{service.description}</p>
            <button className="bg-[#f86a04] text-white px-4 py-2 rounded-lg hover:bg-[#e65c00] transition">
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
