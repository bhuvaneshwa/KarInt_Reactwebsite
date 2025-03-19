export default function Services() {
  const services = [
    { id: 1, name: "Web Development", description: "We build stunning, fast, and secure websites that help businesses stand out online.", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Graphic Designing", description: "Creative logos, banners, and designs that make your brand look professional and attractive.", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Digital Marketing", description: "We help businesses grow online with social media, SEO, and ads that bring real results.", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Software Development", description: "Custom software solutions tailored to make your business run smoother and smarter.", image: "https://via.placeholder.com/150" },
    { id: 5, name: "SEO (Search Engine Optimization)", description: "Want your website to show up on Google? We optimize your site to rank higher and get more visitors.", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Social Media Management", description: "We manage your social media pages, create engaging content, and help attract more customers.", image: "https://via.placeholder.com/150" },
    { id: 7, name: "E-commerce Solutions", description: "Start selling online with an easy-to-use and beautifully designed online store.", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Mobile App Development", description: "Get your own Android or iOS app that works smoothly and keeps your users engaged.", image: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-2xl shadow-lg p-4 text-center">
            <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-semibold">{service.name}</h2>
            <p className="text-gray-500 text-sm mb-2">{service.description}</p>
            <div className="mt-3 flex justify-center gap-3">
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
