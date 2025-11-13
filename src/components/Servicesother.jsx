import { Link } from 'react-router-dom';

export default function Servicesother() {
  return (
    <div className="bg-black py-8">
      {/* First Section */}
      <section className="flex flex-col pb-10 md:flex-row justify-around items-center mx-4 h-full space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center space-y-10 md:text-left">
          <h1 className="text-5xl font-bold text-[#f86a04]">
            Giving you the <br />
            <span className="text-white block mt-6">EDGE!</span>
          </h1>

         <h5 className="text-lg font-light mt-2 bg-[#f86a04] text-white inline-block px-3 rounded">
  We generate value for your business by offering:
</h5>

        </div>

        <div className="hidden md:block w-px bg-gray-400 h-24"></div> {/* Divider */}
<div className="text-center md:text-left bg-[#f86a04] text-white p-4 rounded-lg inline-block">
  <h1 className="text-2xl font-semibold leading-snug">
    Customized Tools <br />
    Expert Insights <br />
    High Quality
  </h1>
</div>

<div className="text-center md:text-left mt-2">
  <p className="text-xl font-light text-white">
    Accelerated delivery to cut down project timelines
  </p>
</div>

      </section>

      {/* Second Section */}
      <section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Image Div */}
          <div className="relative w-full h-60 md:h-80">
            <img
              src="/hm_fold_3.jpg"
              className="w-full h-full object-cover rounded-md"
              alt="Image"
            />
          </div>

          {/* Text and Button Div */}
          <div className="bg-black h-full text-white p-4 flex flex-col justify-center items-start space-y-4">
            <h1 className="text-3xl md:text-6xl font-semibold uppercase">
              Looking forward to <span className="text-[#f86a04]">business growth?</span>
            </h1>
            <h4 className="text-lg font-light">
              Let us know how we can enable you to achieve success faster.
            </h4>
            <Link to="/contact">
              <button className="mt-4 px-6 py-2 rounded-full bg-[#f86a04] text-white font-semibold hover:bg-[#e65c00] transition duration-300">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
