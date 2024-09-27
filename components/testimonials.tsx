import { FaStar, FaUsers, FaWallet, FaPiggyBank, FaThumbsUp } from 'react-icons/fa';

export default function UserSatisfaction() {
  return (
    <section id="user-satisfaction" className="bg-[#080c14] text-white py-12 relative">
      {/* Yellow Shade Image */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{
          backgroundImage: 'url("/images/yellow-shade.png")',
          backgroundSize: '250px',
          backgroundPosition: 'top 200px left',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(130px)',
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
          filter: 'blur(150px)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side (Heading) */}
          <div className="md:w-1/2">
            <div className="text-left">
              <button className="px-4 py-2 bg-blue-600 text-gray-200 rounded-full inline-block mb-4 hover:bg-blue-700 transition-colors duration-300">
                USER SATISFACTION
              </button>
              <h3 className="text-4xl font-bold">
                Trusted by Customers, Proven in Markets – Your Reliable Partner for Secure Investments and Financial Growth.
              </h3>
            </div>
          </div>

          {/* Right Side (Upper Boxes with translucent grayish background) */}
          <div className="flex flex-col md:w-1/2 space-y-3 mt-8 md:mt-0">
            {/* First Box (Funds under Management) */}
            <div className="relative">
              {/* Translucent Gray Background Box */}
              <div className="absolute -top-1.5 left-9 w-[88%] h-[110%] bg-[rgba(255,255,255,0.2)] rounded-3xl backdrop-blur-md"></div>

              {/* White Box with Blue Gradient */}
              <div
                className="p-4 w-[85%] mx-auto rounded-3xl shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow duration-300 relative"
                style={{
                  background: 'linear-gradient(to right, #ffffff 60%, #e0f2ff)', // White to Blue Gradient
                }}
              >
                <div className="flex flex-col items-start"> {/* Left side for $150k+ */}
                  <p className="text-5xl font-bold text-blue-500 ml-20"> {/* Adjusted margin */}
                    $150k+
                  </p>
                </div>
                <div className="flex flex-col items-end"> {/* Right side for Funds under Management */}
                  <p className="mt-2 text-lg text-gray-700 mr-20"> {/* Adjusted margin */}
                    Funds under Management
                  </p>
                </div>
              </div>
            </div>

            {/* Second Box (Investor Community) */}
            <div className="relative">
              {/* Translucent Gray Background Box */}
              <div className="absolute top-1 left-9 w-[88%] h-[110%] bg-[rgba(255,255,255,0.2)] rounded-3xl backdrop-blur-md"></div>

              {/* White Box with Blue Gradient */}
              <div
                className="p-4 w-[85%] mx-auto top-2 rounded-3xl shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow duration-300 relative"
                style={{
                  background: 'linear-gradient(to right, #ffffff 60%, #e0f2ff)', // White to Blue Gradient
                }}
              >
                <div className="flex flex-col items-start"> {/* Left side for 300+ */}
                  <p className="text-5xl font-bold text-blue-500 ml-20"> {/* Adjusted margin */}
                    300+
                  </p>
                </div>
                <div className="flex flex-col items-end"> {/* Right side for Investor Community */}
                  <p className="mt-2 text-lg text-gray-700 mr-20"> {/* Adjusted margin */}
                    Investor Community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row (Smaller Boxes, unchanged) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="bg-gray-800 p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center space-x-4">
              <FaUsers className="text-2xl text-blue-500" />
              <div>
                <p className="text-2xl font-bold">$50k+</p>
                <p className="mt-2 text-sm text-gray-200">Profits Generated</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center space-x-4">
              <FaWallet className="text-2xl text-blue-500" />
              <div>
                <p className="text-2xl font-bold">95%+</p>
                <p className="mt-2 text-sm text-gray-200">Customer Retention rate</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center space-x-4">
              <FaPiggyBank className="text-2xl text-blue-500" />
              <div>
                <p className="text-2xl font-bold">20%+</p>
                <p className="mt-2 text-sm text-gray-200">Increase savings</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center space-x-4">
              <FaThumbsUp className="text-2xl text-blue-500" />
              <div>
                <p className="text-2xl font-bold">300+</p>
                <p className="mt-2 text-sm text-gray-200">Positive reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
