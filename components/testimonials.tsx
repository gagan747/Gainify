import { FaDownload, FaStar, FaUsers, FaWallet, FaPiggyBank, FaThumbsUp } from 'react-icons/fa';

export default function UserSatisfaction() {
  return (
    <section id="user-satisfaction" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
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

          {/* Right Side (Boxes) */}
          <div className="flex flex-col md:w-1/2 space-y-4 mt-8 md:mt-0">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <FaDownload className="text-blue-500 text-5xl" />
                <div>
                  <p className="text-5xl font-bold text-blue-500">$150k+</p>
                  <p className="mt-2 text-lg text-gray-200">Funds under Management</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <FaStar className="text-blue-500 text-5xl" />
                <div>
                  <p className="text-5xl font-bold text-blue-500">300+</p>
                  <p className="mt-2 text-lg text-gray-200">Investor Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row (Smaller Boxes) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="bg-gray-800 p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center space-x-4">
              <FaUsers className="text-2xl text-blue-500" />
              <div>
                <p className="text-2xl font-bold">$50k+</p>
                <p className="mt-2 text-sm text-gray-200">Profits Generated</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center space-x-4">
              <FaWallet className="text-2xl text-blue-500" />
              <div>
                <p className="text-2xl font-bold">95%+</p>
                <p className="mt-2 text-sm text-gray-200">Customer Retention rate</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center items-center space-x-4">
              <FaPiggyBank className="text-2xl text-blue-500" />
              <div>
                <p className="text-2xl font-bold">20%+</p>
                <p className="mt-2 text-sm text-gray-200">Increase savings</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300">
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
