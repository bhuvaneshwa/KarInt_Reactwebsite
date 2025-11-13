import React from "react";

// Import client logos
import client01 from "../images/clients/01.jpg";
// import client02 from "../images/clients/02.png";
import client03 from "../images/clients/03.png";
// import client04 from "../images/clients/04.png";
import client05 from "../images/clients/05.jpg";
import client06 from "../images/clients/06.png";
import client07 from "../images/clients/07.jpg";
import client08 from "../images/clients/08.webp";
import client09 from "../images/clients/09.jpg";
import client10 from "../images/clients/10.png";
import client11 from "../images/clients/11.jpg";
import client12 from "../images/clients/12.jpg";

export default function Clients() {
  const clients = [
    { id: 1, name: "Client 1", logo: client01 },
    // { id: 2, name: "Client 2", logo: client02 },
    { id: 3, name: "Client 3", logo: client03 },
    // { id: 4, name: "Client 4", logo: client04 },
    { id: 5, name: "Client 5", logo: client05 },
    { id: 6, name: "Client 6", logo: client06 },
    { id: 7, name: "Client 7", logo: client07 },
    { id: 8, name: "Client 8", logo: client08 },
    { id: 9, name: "Client 9", logo: client09 },
    { id: 10, name: "Client 10", logo: client10 },
    { id: 11, name: "Client 11", logo: client11 },
    { id: 12, name: "Client 12", logo: client12 },
  ];

  // Duplicate clients array for seamless infinite loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-black text-white overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .scroll-container {
            animation: scroll 30s linear infinite;
          }

          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#f86a04]">Our Clients</h2>
        <p className="text-white mb-12 max-w-2xl mx-auto">
          We're proud to have partnered with leading brands and businesses across industries.
        </p>

        {/* Infinite Scrolling Client Logos */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="scroll-container flex gap-8 items-center">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#f86a04]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#f86a04]/20 hover:scale-105 w-[200px] h-[180px]"
                  title={client.name}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-sm text-[#f86a04]">
          Trusted by <span className="font-semibold">10+ companies</span>.
        </p>
      </div>
    </section>
  );
}
