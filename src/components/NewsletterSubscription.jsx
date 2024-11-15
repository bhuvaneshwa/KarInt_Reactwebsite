export default function NewsletterSubscription() {
    return (
      <div className="bg-gray-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="flex flex-col   md:flex-row items-center md:justify-around gap-10">
            {/* Left section */}
            <div className="mb-6 md:mb-0">
              <h1 className="text-4xl font-semibold text-gray-800">
                STAY IN THE LOOP<span className="text-gray-800">.</span>
              </h1>
              <p className="text-gray-500 mt-2">
                Help us keep you updated with At KAR International Infotech latest news.
              </p>
            </div>
  
            {/* Right section */}
            <div className="flex items-center w-full md:w-auto">
              <input
                type="email"
                placeholder="Subscribe to our newsletter enter email ID here"
                className="w-full md:w-96 px-4 py-3 border border-gray-300  focus:outline-none"
              />
              <button className="bg-black text-white px-6 py-3 font-semibold  hover:bg-gray-900 transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  