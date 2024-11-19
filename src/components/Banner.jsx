import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Banner() {
  return (
    <div>
      <div className="px-4 sm:px-8 py-2 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col md:flex-row items-center mx-auto container justify-center md:justify-between py-2">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm mt-2 md:mt-0">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-primary" />
              <span className="whitespace-nowrap">Coimbatore, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-primary" />
              <span className="whitespace-nowrap">(+91) 9789 77 5806</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-primary" />
              <span className="whitespace-nowrap">
                karinternationalinfotech@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
