export default function Home() {
  return (
    <div>
      {/* Inline Styles for Fade-In Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 1s ease forwards;
          }
        `}
      </style>

      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container bg-black flex flex-col lg:flex-row items-start justify-between p-6 mx-auto">
          {/* Text Section */}
          <div className="flex flex-col justify-start p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left w-full lg:w-1/2 fade-in" style={{ animationDelay: "0.5s" }}>
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Ac mattis <span className="dark:text-white">senectus</span> erat pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" /> turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
              >
                Malesuada
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-start justify-start sm:h-80 lg:h-auto w-full lg:w-1/2 fade-in" style={{ animationDelay: "1s" }}>
            <img
              src="/banner1.jpg"
              alt=""
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
