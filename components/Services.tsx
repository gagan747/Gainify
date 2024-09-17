import Image from "next/image";

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* "Our Services" Button */}
          <div className="text-center mb-8">
            <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full">
              Our Services
            </button>
          </div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-black">Make a Lasting Financial Journey With Gainify</h1>
            <p className="text-xl text-gray-600">
              Explore what makes us exceptional in the finance industry. Experience innovative solutions, personalized services, and seamless transactions.
            </p>
          </div>

          {/* Items */}
          <div className="space-y-20">
            {/* 1st item (Adjusted overlapping images) */}
            <div className="md:flex md:flex-row-reverse md:items-center">
              {/* Image */}
              <div className="flex-shrink-0 max-w-sm md:max-w-none mb-8 md:mb-0 md:ml-8 relative">
                {/* First image */}
                <Image
                  className="max-w-full mx-auto rounded-lg shadow-lg"
                  src="/images/zigzag-14.png" // Replace with actual image path
                  width={470}
                  height={350}
                  alt="Personalized Budget Planner Tool"
                />
                {/* Second image (overlapped and positioned to the right and lower) */}
                <Image
                  className="absolute bottom-4 right-4 w-60 h-40 rounded-lg shadow-md"
                  src="/images/zigzag-13.png" // Replace with actual image path
                  width={235}
                  height={175}
                  alt="Comprehensive Debt Management"
                />
              </div>
              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="h3 mb-3 text-black">Personalized Fund Management Plan</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Navigate your financial journey with our Comprehensive Debt Management system, effective debt reduction strategies.
                </p>
                <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-full">
                  Learn More
                </button>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:flex md:flex-row md:items-center">
              {/* Image */}
              <div className="flex-shrink-0 max-w-sm md:max-w-none mb-8 md:mb-0 md:mr-8">
                <Image
                  className="max-w-full mx-auto"
                  src="/images/features-03-image-02.png"
                  width={470}
                  height={350}
                  alt="Comprehensive Debt Management"
                />
              </div>
              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="h3 mb-3 text-black">Account Management Plan</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Navigate your financial journey with our Comprehensive Debt Management system, effective debt reduction strategies.
                </p>
                <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
