import Kskb from "../images/01.jpg";
import Pred from "../images/02.jpg";

export default function Testimonial() {
  return (
    <div>
      <section className="my-8 bg-gray-100 py-12 px-4 sm:px-6 lg:px-10">
        <div className="container mx-auto flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
            What our customers are saying about us
          </h1>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 md:p-8 relative">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 text-primary"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>

              <p className="px-6 py-4 text-base sm:text-lg italic text-gray-700">
                KAR International Infotech has transformed our online presence
                with a professional and seamless website. Their expertise and
                commitment to quality service are truly commendable.
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 text-primary"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </div>

            <span className="w-12 h-1 my-4 rounded-lg bg-primary"></span>
            <img
              src={Kskb}
              alt="Mr. K Seenivasen"
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <p className="text-gray-900 font-semibold text-center">
              Mr. K Seenivasen – Ex-Army
            </p>
            <p className="text-sm text-gray-500 text-center">
              Owner, KSKN Matrimony
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 md:p-8 relative">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 text-primary"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>

              <p className="px-6 py-4 text-base sm:text-lg italic text-gray-700">
                The team at KAR International Infotech understands client needs
                perfectly. Their innovative approach and technical skills helped
                us establish a strong digital presence!
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 text-primary"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </div>

            <span className="w-12 h-1 my-4 rounded-lg bg-primary"></span>
            <img
              src={Pred}
              alt="Mr. Saravana Kumar"
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <p className="text-gray-900 font-semibold text-center">
              Mr. Saravana Kumar Arunachalam
            </p>
            <p className="text-sm text-gray-500 text-center">
              Owner, SK Predictions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
