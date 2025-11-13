/* eslint-disable no-irregular-whitespace */
export default function VisionMission() {
  return (
    <div className="relative bg-gray-100 py-16 px-4 flex flex-col items-center">
      {/* Who We Are Card */}
      <div className="bg-black text-white p-8 max-w-7xl mt-8 z-10 rounded-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Who We Are</h2>
        <hr className="border-t border-[#f86a04] mb-4" />
        <p className="text-gray-300 text-justify leading-relaxed">
          KAR International Infotech is a forward-thinking Software and Digital Marketing agency
          committed to helping businesses grow through innovation and technology. Established on
          February 23, 2023, by Revathi and led by Managing Director Karthikeyan, our company provides
          end-to-end digital solutions that enable clients to succeed in today’s fast-changing business world.
          We specialize in software development, digital marketing, and strategic consulting—combining
          creativity with technical excellence. Our team focuses on delivering customized solutions that align
          perfectly with each client’s goals, helping them enhance performance, visibility, and growth in
          their respective industries.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="bg-black text-white p-8 max-w-7xl mt-8 z-10 rounded-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Why Choose Us</h2>
        <hr className="border-t border-[#f86a04] mb-4" />
        <p className="text-gray-300 text-justify leading-relaxed">
          At KAR International Infotech, we believe in building strong, lasting partnerships with our clients.
          Our strength lies in our skilled professionals, customer-centric approach, and deep industry
          experience. We prioritize quality, reliability, and results—ensuring that every project we deliver
          drives measurable impact. Our continuous focus on innovation, excellence, and adaptability makes
          us a trusted partner for businesses seeking digital transformation and sustainable success.
        </p>
      </div>

      {/* Vision and Mission Cards */}
      <div className="relative flex flex-col sm:flex-row justify-center items-center gap-10 pt-8 z-10">
        {/* Vision Card */}
        <div className="bg-black text-white p-6 sm:p-8 w-full sm:max-w-sm mt-8 sm:mt-0 rounded-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Our Vision</h2>
          <hr className="border-t border-[#f86a04] mb-4" />
          <p className="text-gray-300 text-justify leading-relaxed">
            To become a global leader in providing innovative digital and software solutions that empower
            organizations to achieve long-term success and make a meaningful impact in their industries.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-black text-white p-6 sm:p-8 w-full sm:max-w-sm rounded-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Our Mission</h2>
          <hr className="border-t border-[#f86a04] mb-4" />
          <p className="text-gray-300 text-justify leading-relaxed">
            Our mission is to transform the digital landscape by delivering creative, reliable, and
            cost-effective solutions that exceed client expectations. We leverage emerging technologies
            to enhance efficiency, productivity, and growth for every business we serve. At KAR International
            Infotech, we are dedicated to fostering innovation, building trust, and turning every client’s
            vision into measurable success.
          </p>
        </div>
      </div>
    </div>
  );
}
