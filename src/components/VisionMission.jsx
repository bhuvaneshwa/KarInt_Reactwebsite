/* eslint-disable no-irregular-whitespace */
export default function VisionMission() {
  return (
    <div className="relative bg-gray-100 py-16 px-4 flex flex-col items-center">
      {/* Who We Are Card */}
      <div className="bg-black text-white p-8 max-w-7xl mt-8 z-10 rounded-md ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Who We Are?</h2>
        <hr className="border-t border-[#f86a04] mb-4" />
        <p className="text-gray-300 text-justify leading-relaxed">
          KAR International Infotech is a dynamic Software and Digital Marketing Agency dedicated to transforming businesses 
          through innovative technology solutions and comprehensive digital strategies. Founded on February 23, 2023, by Revathi, 
          and led by Managing Director Karthikeyan, we specialize in providing a wide array of services designed to empower our 
          clients in the ever-evolving digital landscape. Our expertise spans all facets of software development and digital marketing, 
          allowing us to craft tailored solutions that align precisely with our clients&apos; needs. From custom software applications 
          to targeted marketing campaigns, KAR International Infotech combines cutting-edge technology with deep industry insights to 
          deliver impactful results. Our commitment is to elevate businesses by equipping them with the right tools and strategies to 
          excel in their markets.
        </p>
      </div>

      {/* Vision and Mission Cards */}
      <div className="relative flex flex-col sm:flex-row justify-center items-center gap-10 pt-8 z-10">
        {/* Vision Card */}
        <div className="bg-black text-white p-6 sm:p-8 w-full sm:max-w-sm mt-8 sm:mt-0 rounded-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Our Vision</h2>
          <hr className="border-t border-[#f86a04] mb-4" />
          <p className="text-gray-300 text-justify leading-relaxed">
            To deliver long-term solutions to clients, empower organizations, and be part of the success.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-black text-white p-6 sm:p-8 w-full sm:max-w-sm rounded-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Our Mission</h2>
          <hr className="border-t border-[#f86a04] mb-4" />
          <p className="text-gray-300 text-justify leading-relaxed">
            Our mission is to transform the tech landscape by delivering innovative, 
            affordable solutions that exceed client expectations. Through emerging technologies, 
            we empower businesses to optimize operations, drive productivity, and achieve lasting impact. 
            At KAR International Infotech, we build partnerships founded on trust, adaptability, and a 
            commitment to turning visions into remarkable achievements.
          </p>
        </div>
      </div>
    </div>
  );
}
