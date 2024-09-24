import Image from "next/image";

export default function FinanceSolutions() {
  return (
    <section
      id="finance-solutions"
      className="relative py-20"
      style={{
        backgroundColor: '#131016',
      }}
    >
      {/* Background wrapper for the two background images */}
      <div className="absolute inset-0 z-0">
        {/* Yellow Shade Image */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full"
          style={{
            backgroundImage: 'url("/images/yellow-shade.png")',
            backgroundSize: '250px',
            backgroundPosition: 'top 200px left',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(150px)', // Apply blur only to the background image
          }}
        ></div>

        {/* Blue Shade Image */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full"
          style={{
            backgroundImage: 'url("/images/blue-shade.png")',
            backgroundSize: '300px',
            backgroundPosition: 'bottom right',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(150px)', // Apply blur only to the background image
          }}
        ></div>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          {/* "Future of Finance" Button */}
          <div className="inline-block mb-4">
            <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full">
              Future of Finance
            </button>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Our diverse suite of finance solutions
          </h1>
          <p className="text-xl text-gray-400">
            Discover our wide-ranging financial tools. Experience seamless, user-friendly, and efficient financial management at your fingertips.
          </p>
        </div>

        {/* Three Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6">
          {/* 1st Box */}
          <div className="bg-white p-12 rounded-3xl transform transition duration-500 hover:scale-105 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-black mb-4">Automating Profit Generation</h3>
              <p className="text-gray-800 mb-4">
                Automating profit generation to consistently grow your wealth effortlessly.
              </p>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 flex justify-center">
              <div className="relative w-48 h-48">
                <Image
                  src="/images/zigzag-06.png"
                  alt="Automated Savings"
                  layout="fill"
                  className="rounded-3xl"
                />
                <div className="absolute bottom-2 left-2 bg-white text-gray-900 p-2 rounded-lg">
                  <p className="text-green-600 text-lg font-bold">+19%</p>
                  <p className="text-xs text-gray-600">Gained this month</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Box */}
          <div className="bg-white p-12 rounded-3xl transform transition duration-500 hover:scale-105 lg:row-span-2 flex flex-col items-center relative">
            {/* Peaceful Tomorrow Button */}
            <div className="absolute top-4 left-4">
              <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium">
                PEACEFUL TOMORROW
              </button>
            </div>

            <div className="relative w-full flex justify-center mb-4">
              <Image
                src="/images/zigzag-08/2.png"
                alt="Retirement Planning"
                width={400}
                height={400}
                className="rounded-3xl"
              />
            </div>

            <div className="flex justify-between w-full mt-4">
              <h3 className="text-2xl font-bold text-black">Long-Term Planning</h3>
              <p className="text-gray-800">
                Guide your journey with comfortable retirement tools and planning.
              </p>
            </div>
          </div>

          {/* 2nd Box */}
          <div className="bg-white p-12 rounded-3xl transform transition duration-500 hover:scale-105 flex lg:flex-row items-start">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-48 h-48 bg-blue-200 rounded-3xl flex justify-center items-center">
                <Image
                  src="/images/zigzag-02.png"
                  alt="Investment Opportunities"
                  layout="fill"
                  className="rounded-3xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between items-end">
              <h3 className="text-2xl font-bold text-black mb-5 mt-0">Investment Opportunities</h3>
              <p className="text-gray-800 mb-0 mt-auto">
                Secure your future with long-term planning and greater gains through compounding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
