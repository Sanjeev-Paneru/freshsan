"use client";

export default function ContactMap() {
  return (
    <div className="overflow-hidden rounded-2xl shadow-xl">
      <div className="relative h-[300px] w-full bg-gray-200 sm:h-[400px] lg:h-[500px]">
        {/* Embedded Google Maps */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0947!2d85.1803611!3d27.8370357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eadfe62ff0ee63%3A0xa9cd293ae441da45!2sBelkotgadhi%20Nagarpalika%20Ward%20No.%2013!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
          title="Location map showing Belkotgadhi Nagarpalika Ward No. 13, Nepal"
          className="absolute inset-0 h-full w-full border-0 grayscale transition-all duration-300 hover:grayscale-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Map Overlay Button */}
        <a
          href="https://www.google.com/maps/place//@27.8370357,85.1803611,18.44z/data=!4m8!1m7!3m6!1s0x39eadfe62ff0ee63:0xa9cd293ae441da45!2sBelkotgadhi+Nagarpalika+Ward+No.+13!8m2!3d27.8456312!4d85.1928042!16s%2Fg%2F11ftwv405l?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:scale-105 hover:shadow-xl sm:px-4"
          aria-label="Open location in Google Maps"
        >
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <span className="hidden sm:inline">Open in Maps</span>
            <span className="sm:hidden">Maps</span>
          </div>
        </a>
      </div>
    </div>
  );
}
