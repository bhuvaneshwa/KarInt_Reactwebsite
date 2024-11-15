import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Banner() { 
  return (
    <div>
      <div className="px-8 py-2 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex flex-col md:flex-row items-center mx-auto container justify-center md:justify-between py-2">
          
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm mt-2 md:mt-0 ml-auto">
            <div className="flex items-center gap-1">
              <MapPinIcon className="h-4 w-4 text-primary" />
              <span>Coimbatore, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-1">
              <PhoneIcon className="h-4 w-4 text-primary" />
              <span>(+91) 9789 77 5806</span>
            </div>
            <div className="flex items-center gap-1">
              <EnvelopeIcon className="h-4 w-4 text-primary" />
              <span>karinternationalinfotech@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
