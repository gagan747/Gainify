import { FaShieldAlt, FaHandsHelping, FaWallet, FaChartLine, FaUserTie, FaLightbulb, FaCog } from 'react-icons/fa';

export default function Features() {
  return (
    <section className="bg-blue-100 py-16 relative">
      {/* Faded blue background color */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-128"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* "Extra Features" Button */}
        <div className="text-center mb-8">
          <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full">
            Extra Features
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Unveiling more powerful Finance features
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Dive deeper as we unveil enhanced features, designed to empower your financial journey further, beyond, and above.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1st Feature Card */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-white w-16 h-16 rounded-full shadow-lg mb-6 flex items-center justify-center mx-auto relative">
              <div className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]"></div>
              <img
                src="/images/icon-01.png"
                alt="Financial Goals"
                className="mx-auto"
                width={60}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Goals</h3>
            <p className="text-gray-600">
              Set achievable financial goals with us, and we will help you to your path towards achieving financial freedom.
            </p>
          </div>

          {/* 2nd Feature Card */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-white w-16 h-16 rounded-full shadow-lg mb-6 flex items-center justify-center mx-auto relative">
              <div className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]"></div>
              <img
                src="/images/icon-02.png"
                alt="Portfolio Tracker"
                className="mx-auto"
                width={60}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Portfolio Tracker</h3>
            <p className="text-gray-600">
              Monitor your Portfolio every day to see how much profit we have generated for you with our Portfolio Tracker.
            </p>
          </div>

          {/* 3rd Feature Card */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-white w-16 h-16 rounded-full shadow-lg mb-6 flex items-center justify-center mx-auto relative">
              <div className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]"></div>
              <img
                src="/images/icon-03.png"
                alt="Financial Education"
                className="mx-auto"
                width={60}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Education</h3>
            <p className="text-gray-600">
              Empower your journey with our Financial Education resources, fostering informed decisions and wise investments.
            </p>
          </div>
        </div>

        {/* Small Boxes with Icons and Text */}
        <div className="mt-8" style={{display:'flex', justifyContent:'center',flexWrap:'wrap',alignContent:'space-around'}}>
          <div className="bg-white rounded-xl p-4 flex items-center space-x-2 shadow-md text-left w-auto h-12 m-2">
            <FaShieldAlt className="text-blue-600 text-lg" />
            <p className="text-base text-gray-600">Secure</p>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center space-x-2 shadow-md text-left w-auto h-12 m-2">
            <FaHandsHelping className="text-blue-600 text-lg" />
            <p className="text-base text-gray-600">Investment Assistance</p>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center space-x-2 shadow-md text-left w-auto h-12 m-2">
            <FaWallet className="text-blue-600 text-lg" />
            <p className="text-base text-gray-600">Financial Security</p>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center space-x-2 shadow-md text-left w-auto h-12 m-2">
            <FaChartLine className="text-blue-600 text-lg" />
            <p className="text-base text-gray-600">Personalized Plans</p>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center space-x-2 shadow-md text-left w-auto h-12 m-2">
            <FaUserTie className="text-blue-600 text-lg" />
            <p className="text-base text-gray-600">Investment Advisors</p>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center space-x-2 shadow-md text-left w-auto h-12 m-2">
            <FaLightbulb className="text-blue-600 text-lg" />
            <p className="text-base text-gray-600">Expert Insight</p>
          </div>
          <div className="bg-white rounded-xl p-4 flex items-center space-x-2 shadow-md text-left w-auto h-12 m-2">
            <FaCog className="text-blue-600 text-lg" />
            <p className="text-base text-gray-600">Highest Returns</p>
          </div>
        </div>
      </div>
    </section>
  );
}
