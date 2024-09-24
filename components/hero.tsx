"use client";

import Image from 'next/image';

export default function HeroHome() {
  return (
    <section className="relative bg-[#060d15] text-white h-screen overflow-visible pt-64"> {/* Increased padding-top to move downwards */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full mt-32">
          <div className="flex flex-col md:flex-row items-center justify-center h-full">
            {/* Content Section */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              {/* Join the Future Button */}
              <div className="mb-6">
                <a
                  className="px-6 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 transition duration-150 ease-in-out"
                  href="#"
                >
                  Join the Future
                </a>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter mb-6">
                Invest Today,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-400">
                  Secure Tomorrow
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400 mb-8">
                Let’s put your money to work. Got goals? We’ve got the solutions.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
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
            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative ml-16"> {/* Shifted image section to the right with ml-16 */}
              {/* Phone Image */}
              <div className="relative w-[250px]">
                <Image
                  src="/images/hero-custom-04.png"
                  width={300}
                  height={500}
                  alt="Phone with Balance"
                  className="rounded-lg w-full h-auto"
                />
              </div>

              {/* Card Image Positioned on the right */}
              <div className="absolute top-[35px] right-[-80px] w-[130px] sm:w-[170px]">
                <Image
                  src="/images/card-post.png"
                  width={500}
                  height={800}
                  alt="Card"
                  className="rounded-2xl"
                />
              </div>

              {/* "Hero-05" Image (152k+ Trusted Users) Positioned Below */}
              <div className="absolute bottom-[35px] right-[70px] w-[1050px] sm:w-[250px]">
                <Image
                  src="/images/hero-card.png"
                  width={700}
                  height={350}
                  alt="152k Trusted Users"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
