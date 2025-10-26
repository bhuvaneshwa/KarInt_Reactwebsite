export default function Stats() {
  return (
    <div>
      <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              15<sup className="text-[#f86a04] text-3xl align-super">+</sup>
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#f86a04]">Clients</p>
          </div>

          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">2</p>
            <p className="text-sm sm:text-base font-semibold text-[#f86a04]">Years of Experience</p>
          </div>

          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              25<sup className="text-[#f86a04] text-3xl align-super">+</sup>
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#f86a04]">Resources</p>
          </div>

          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              25<sup className="text-[#f86a04] text-3xl align-super">+</sup>
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#f86a04]">Projects</p>
          </div>

          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              5<sup className="text-[#f86a04] text-3xl align-super">+</sup>
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#f86a04]">Developer Teams</p>
          </div>

          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              1<sup className="text-[#f86a04] text-3xl align-super">+</sup>
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#f86a04]">Products</p>
          </div>

        </div>
      </section>
    </div>
  );
}
