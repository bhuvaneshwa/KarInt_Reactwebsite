export default function Founder() {
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-8">Our Leadership</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* Founder Section */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row bg-white shadow-lg rounded-lg p-6 space-y-4">
              <img
                src="https://via.placeholder.com/150" // Replace with actual founder image URL
                alt="Founder"
                className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h3 className="text-2xl font-bold">John Doe</h3>
                <p className="text-gray-500 font-semibold">Founder</p>
                <p className="text-gray-700 italic mt-2">
                  "Our mission is to create value through innovation and dedication, always putting our customers first."
                </p>
              </div>
            </div>
  
            {/* Managing Director Section */}
            <div className="flex flex-col items-center text-center md:text-left md:flex-row bg-white shadow-lg rounded-lg p-6 space-y-4">
              <img
                src="https://via.placeholder.com/150" // Replace with actual managing director image URL
                alt="Managing Director"
                className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h3 className="text-2xl font-bold">Jane Smith</h3>
                <p className="text-gray-500 font-semibold">Managing Director</p>
                <p className="text-gray-700 italic mt-2">
                  {"Empowering our teams to push boundaries and drive excellence is at the heart of our strategy."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  