export default function Banner() {
	return (
	  <div>
		<div className="px-8 py-2 dark:bg-gray-50 dark:text-gray-800">
		  <div className="flex flex-col md:flex-row items-center mx-auto container justify-center md:justify-between py-2">
			
			{/* Contact Information */}
			<div className="flex flex-col md:flex-row items-center gap-4 text-sm mt-2 md:mt-0 ml-auto">
			  <div className="flex items-center gap-1">
				<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
				  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"></path>
				</svg>
				<span>1234 Main St, City, State</span>
			  </div>
			  <div className="flex items-center gap-1">
				<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
				  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"></path>
				</svg>
				<span>(123) 456-7890</span>
			  </div>
			  <div className="flex items-center gap-1">
				<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
				  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"></path>
				</svg>
				<span>email@example.com</span>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
  }
  