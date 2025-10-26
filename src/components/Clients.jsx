import React from "react";

export default function Clients() {
  // Replace these image paths/URLs with your real client logos
  const clients = [
    { id: 1, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { id: 2, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 3, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { id: 4, name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg" },
    { id: 5, name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Adobe_Corporate_logo.svg" },
    { id: 6, name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Clients</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          We’re proud to have partnered with leading brands and businesses across industries.
        </p>

        {/* Client logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 bg-[#0b0b0b] rounded-lg border border-transparent hover:border-primary transition-all duration-300 hover:shadow-md hover:scale-105"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 sm:h-12 md:h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        <p className="mt-12 text-gray-500 text-sm">
          Trusted by <span className="text-primary font-semibold">100+ global companies</span>.
        </p>
      </div>
    </section>
  );
}
