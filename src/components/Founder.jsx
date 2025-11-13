import Founders from "../images/founder.jpg";
import CEO from "../images/ceo.jpg";

export default function Founder() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">
          Our Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          {/* Founder Section */}
          <div className="flex flex-col items-center text-center md:text-left md:flex-row bg-white shadow-lg rounded-lg p-6 space-y-4">
            <img
              src={Founders}
              alt="Founder"
              className="w-56 h-full object-cover mb-4 md:mb-0 rounded-md"
            />
            <div className="md:ml-6">
              <h3 className="text-2xl font-bold">Mrs. Revathi T</h3>
              <p className="text-black font-semibold">Founder & Chairman</p>
              <p className="text-black italic mt-2 text-justify">
                Mrs. Revathi T, the visionary Founder and Chairman of KAR International Infotech,
                is a symbol of resilience and leadership. Married to ex-army officer Thirunauvkkarasu,
                she began her professional journey in the matchbox industry before dedicating herself to family life.
              </p>
              <p className="text-black italic mt-2 text-justify">
                A bold and determined woman, she instilled strong values in her sons—Karthikeyan, the current CEO,
                and Ajay Krishnan, the company’s CTO. With her exceptional leadership and unwavering determination,
                she continues to inspire the KAR International Infotech team.
              </p>
            </div>
          </div>

          {/* CEO Section */}
          <div className="flex flex-col items-center text-center md:text-left md:flex-row bg-white shadow-lg rounded-lg p-6 space-y-4">
            <img
              src={CEO}
              alt="CEO"
              className="w-56 h-full object-cover mb-4 md:mb-0 rounded-md"
            />
            <div className="md:ml-6">
              <h3 className="text-2xl font-bold">Mr. Karthikeyan T</h3>
              <p className="text-black font-semibold">Chief Executive Officer</p>
              <p className="text-black italic mt-2 text-justify">
                As the CEO of KAR International Infotech, Karthikeyan leads the company with a
                vision for innovation, quality, and growth. With expertise in business development,
                web technologies, and digital marketing, he has been instrumental in scaling
                the company’s success.
              </p>
              <p className="text-black italic mt-2 text-justify">
                Under his leadership, the organization has delivered cutting-edge web solutions,
                robust software applications, and data-driven marketing strategies that empower
                clients to achieve measurable business results.
              </p>
            </div>
          </div>

          {/* CTO Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center md:text-left">
            <h3 className="text-2xl font-bold">Mr. Ajay Krishnan T</h3>
            <p className="text-black font-semibold">Chief Technology Officer</p>
            <p className="text-black italic mt-2 text-justify">
              Ajay Krishnan, CTO of KAR International Infotech, drives the company’s
              technological innovation and strategy. His expertise in emerging technologies
              fuels impactful digital transformation for clients.
            </p>
            <p className="text-black italic mt-2 text-justify">
              Ajay’s commitment to quality and visionary approach ensure excellence
              in every tech initiative, keeping KAR at the forefront of the industry.
            </p>
          </div>

           {/* Admin Director Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center md:text-left">
            <h3 className="text-2xl font-bold">Mrs. Jeyapriya N</h3>
            <p className="text-black font-semibold">Admin Director</p>
            <p className="text-black italic mt-2 text-justify">
              Jeya Priya Karthikeyan, Admin Director at KAR International Infotech, plays a key
              role in managing smooth operations and fostering a positive work culture.
              Her attention to detail and leadership strengthen the company’s
              administrative framework.
            </p>
            <p className="text-black italic mt-2 text-justify">
              Her commitment to discipline, organization, and people management
              ensures continuous success and growth for the company.
            </p>
          </div>

          {/* Director Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center md:text-left">
            <h3 className="text-2xl font-bold">Mr. Bhuvaneshwaran</h3>
            <p className="text-black font-semibold">
              Director – Technical & Training Operations
            </p>
            <p className="text-black italic mt-2 text-justify">
              As the Director of Technical and Training Operations, Bhuvaneshwaran oversees
              project development, technical execution, and training initiatives.
              His leadership bridges innovation and implementation, ensuring excellence
              in every delivery cycle.
            </p>
          </div>

         

          {/* General Manager Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center md:text-left">
            <h3 className="text-2xl font-bold">Mr. Gowtham</h3>
            <p className="text-black font-semibold">General Manager</p>
            <p className="text-black italic mt-2 text-justify">
              As the General Manager, Gowtham oversees daily business operations,
              ensuring smooth coordination across teams and departments.
              His proactive mindset and focus on operational excellence
              enhance productivity and service quality company-wide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
