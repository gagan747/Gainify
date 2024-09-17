"use client";

import Image from 'next/image';

export default function HeroHome() {
  return (
    <section className="relative bg-[#060d15] text-white h-screen overflow-visible">
      {/* Join the Future Button */}
      <div className="absolute top-4 left-4 z-50">
        <a
          className="px-6 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 transition duration-150 ease-in-out"
          href="#"
        >
          Join the Future
        </a>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center h-full">
            {/* Content Section */}
            <div className="w-full md:w-1/2 text-center md:text-right mb-8 md:mb-0 md:mr-16">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter mb-6">
                Invest Today,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-400">
                  Secure Tomorrow
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400 mb-8">
                Let’s put your money to work. Got goals? We’ve got the solutions.
              </p>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  className="px-6 sm:px-8 py-2 sm:py-3 rounded-md text-white bg-green-700 hover:bg-green-600 flex items-center transition duration-150 ease-in-out"
                  href="#"
                >
                  Explore Funds
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  className="px-6 sm:px-8 py-2 sm:py-3 rounded-md text-white bg-gray-700 hover:bg-gray-600 flex items-center transition duration-150 ease-in-out"
                  href="#"
                >
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
              {/* Circular Blue Shadow */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full opacity-50 blur-2xl"></div>

              {/* Phone Image */}
              <div className="relative w-2/5 max-w-xs md:max-w-sm z-10">
                <Image
                  src="/images/hero-image-02.png"
                  width={240}
                  height={400}
                  alt="Hero Phone Image"
                  className="rounded-md w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 rounded-md">
                  <p className="text-xs sm:text-sm text-gray-300">152,78k+ Trusted Users</p>
                </div>
              </div>

              {/* Card Image */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-1/4 sm:w-1/3 max-w-xs z-20">
                <Image
                  src="/images/hero-image-03.png"
                  width={120}
                  height={200}
                  alt="Hero Card Image"
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
