import Founders from "../images/founder.jpg";
import CEO from "../images/ceo.jpg";
export default function Founder() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-8">Our Leadership</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* Founder Section */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row bg-white shadow-lg rounded-lg p-6 space-y-4">
              <img
                src={Founders} // Replace with actual founder image URL
                alt="Founder"
                className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h3 className="text-2xl font-bold">Mrs. Revathi T</h3>
                <p className="text-black font-semibold">Founder & Chairman</p>
                <p className="text-black italic mt-2 text-justify">
                Mrs. Revathi T, the visionary Founder and Chairman of KAR International Infotech, is a symbol of resilience and leadership.
                 Married to ex-army officer Thirunauvkkarasu, she started her professional journey in the matchbox industry before dedicating herself to her family as a homemaker.
                </p>

                <p className="text-black italic mt-2 text-justify">
                As a bold and determined woman, she instilled strong values in her two sons—her elder son, Karthikeyan, now leads the company as CEO, 
                while her younger son, a cybersecurity expert, serves as the CTO. With her exceptional leadership skills and unwavering determination, Mrs.
                 Revathi T continues to be a source of motivation and empowerment for the team at KAR International Infotech.
                </p>
              </div>
            </div>
  
            {/* Managing Director Section */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row bg-white shadow-lg rounded-lg p-6 space-y-4">
              <img
                src={CEO} // Replace with actual managing director image URL
                alt="Managing Director"
                className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h3 className="text-2xl font-bold">Mr.Karthikeyan T</h3>
                <p className="text-black font-semibold">Chief Executive Officer</p>
                <p className="text-black italic mt-2 text-justify">
                As the CEO of KAR International Infotech, Karthikeyan leads the company with a vision for innovation and excellence in the digital world. With expertise in business development, web technologies, and digital marketing, he has played a key role in scaling the company’s success.
                </p>

                <p className="text-black italic mt-2 text-justify">
                Under his leadership, KAR International Infotech has delivered cutting-edge web solutions, custom software, and result-driven digital marketing strategies. His passion for technology and business growth drives the company to new heights.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  