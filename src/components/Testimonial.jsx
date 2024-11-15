export default function Testimonial() {
    return (
      <div>
        <section className="my-8 bg-gray-100 py-12">
          <div className="container mx-auto flex flex-col items-center pb-6 mb-10 md:p-10 md:px-12">
            <h1 className="text-4xl font-semibold leading-none text-center text-gray-800">
              What our customers are saying about us
            </h1>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center mx-12 lg:mx-0 shadow-lg bg-white rounded-lg p-6">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 text-violet-500"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-lg italic text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 text-violet-500"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-4 rounded-lg bg-violet-500"></span>
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Customer"
                className="w-16 h-16 rounded-full mb-2"
              />
              <p className="text-gray-900 font-semibold">Leroy Jenkins</p>
              <p className="text-sm text-gray-500">CEO, CompanyName</p>
            </div>
  
            {/* Testimonial 2 */}
            <div className="flex flex-col items-center mx-12 lg:mx-0 shadow-lg bg-white rounded-lg p-6">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute top-0 left-0 w-8 h-8 text-violet-500"
                  fill="currentColor"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-lg italic text-gray-700">
                  Accusantium illum cupiditate harum asperiores iusto quos quasi
                  quis quae! Fugit doloribus, voluptatum quidem magnam velit
                  excepturi nobis.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 w-8 h-8 text-violet-500"
                  fill="currentColor"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-4 rounded-lg bg-violet-500"></span>
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Customer"
                className="w-16 h-16 rounded-full mb-2"
              />
              <p className="text-gray-900 font-semibold">Jane Doe</p>
              <p className="text-sm text-gray-500">Marketing Head, CompanyName</p>
            </div>
  
            {/* Add more testimonials similarly... */}
          </div>
        </section>
      </div>
    );
  }
  