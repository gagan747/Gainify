import Image from "next/image";

export default function FinanceSolutions() {
  return (
    <section id="finance-solutions" className="bg-dark py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 1st Box - Updated */}
          <div className="bg-gray-900 p-10 rounded-lg transform transition duration-500 hover:scale-105 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-4">Automated Savings</h3>
              <p className="text-gray-400 mb-4">
                Automatically move money to savings based on personalized financial recommendations.
              </p>
              <div className="text-green-500 text-lg font-semibold">-19% Saved this month</div>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 flex justify-center">
              <div className="relative w-32 h-32">
                <Image
                  src="/images/zigzag-06.png" // Replace with actual path
                  alt="Automated Savings"
                  layout="fill"
                  className="rounded-lg"
                />
                <div className="absolute bottom-2 left-2 bg-white text-gray-900 p-2 rounded-md">
                  <p className="text-green-600 text-lg font-bold">-19%</p>
                  <p className="text-xs text-gray-600">Saved this month</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Box */}
          <div className="bg-gray-900 p-10 rounded-lg transform transition duration-500 hover:scale-105 lg:row-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">Long-Term Planning</h3>
              <Image
                src="/images/zigzag-08/2.png" // Replace with actual path
                alt="Retirement Planning"
                width={60}
                height={60} 
                className="rounded-full"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Guide your journey with comfortable retirement tools and planning.
            </p>
            <div className="text-gray-300 text-lg font-semibold">
              Monthly: $1,400/mo <br />
              Goal: $2,900,000
            </div>
          </div>

          {/* 2nd Box */}
          <div className="bg-gray-900 p-10 rounded-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">Investment Opportunities</h3>
              <Image
                src="/images/zigzag-02.png" // Replace with actual path
                alt="Investment Opportunities"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Explore a wide range of investment options tailored to your unique financial goals.
            </p>
            <div className="text-blue-500 text-lg font-semibold">+187% Market Insights</div>
          </div>
        </div>
      </div>
    </section>
  );
}
