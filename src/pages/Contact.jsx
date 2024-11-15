export default function Contact() {
  return (
    <div>
      <div className="bg-black text-white p-16">
        <h1 className="text-6xl uppercase">Let&apos;s take your business <br /> to places, together!</h1>
        <h4>We work with you to nurture your business towards success faster.</h4>

        <div className="pt-10">
          <h1 className="text-5xl uppercase">
            <span className="text-[#f86a04] italic">The Impact</span> <br />
            We Have Made
          </h1>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div>
              {/* <label htmlFor="firstName" className="block text-lg font-medium">First Name</label> */}
              <input type="text" id="firstName" className="w-full p-3 bg-gray-200 rounded text-black" placeholder="First Name" />
            </div>
            <div>
              {/* <label htmlFor="lastName" className="block text-lg font-medium">Last Name</label> */}
              <input type="text" id="lastName" className="w-full p-3 bg-gray-200 rounded text-black" placeholder="Last Name" />
            </div>
            <div>
              {/* <label htmlFor="phone" className="block text-lg font-medium">Phone</label> */}
              <input type="text" id="phone" className="w-full p-3 bg-gray-200 rounded text-black" placeholder="Phone Number" />
            </div>
            <div>
              {/* <label htmlFor="email" className="block text-lg font-medium">Email</label> */}
              <input type="email" id="email" className="w-full p-3 bg-gray-200 rounded text-black" placeholder="Email Address" />
            </div>
            <div>
              {/* <label htmlFor="companyName" className="block text-lg font-medium">Company Name</label> */}
              <input type="text" id="companyName" className="w-full p-3 bg-gray-200 rounded text-black" placeholder="Company Name" />
            </div>
            <div>
              {/* <label htmlFor="option" className="block text-lg font-medium">Select an Option</label> */}
              <select id="option" className="w-full p-3 bg-gray-200 rounded text-black">
                <option value="">Choose an option</option>
                <option value="Consulting">Consulting</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              {/* <label htmlFor="message" className="block text-lg font-medium">Message</label> */}
              <textarea id="message" rows="4" className="w-full p-3 bg-gray-200 rounded text-black" placeholder="Your message"></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full p-4 bg-[#f86a04] text-white text-lg uppercase">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
