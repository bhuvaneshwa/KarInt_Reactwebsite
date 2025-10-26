import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Banner() {
  return (
    <div>
      <div className="px-4 sm:px-8 py-2  border-b border-theme-border transition-colors duration-300 bg-[f86a04]">
        <div className="flex flex-col md:flex-row items-center mx-auto container justify-center py-2">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items- gap-4 text-xs sm:text-sm mt-2 md:mt-0">
            <div className="flex  items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-theme-primary" />
              <span className="whitespace-nowrap text-theme-secondary">Coimbatore, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-theme-primary" />
              <span className="whitespace-nowrap text-theme-secondary">(+91) 7010580406</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-theme-primary" />
              <span className="whitespace-nowrap text-theme-secondary">
                karinternationalinfotech@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
