export default function Features() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
          <div className="bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
              <img
                src="/path/to/icon1.png"
                alt="Financial Goals"
                className="mx-auto"
                width={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Goals</h3>
            <p className="text-gray-600">
              Set achievable financial goals with our intuitive tool, paving your path towards financial freedom.
            </p>
          </div>

          {/* 2nd Feature Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
              <img
                src="/path/to/icon2.png"
                alt="Expense Tracker"
                className="mx-auto"
                width={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Expense Tracker</h3>
            <p className="text-gray-600">
              Monitor your spending efficiently and accurately with our comprehensive Expense Tracker.
            </p>
          </div>

          {/* 3rd Feature Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
              <img
                src="/path/to/icon3.png"
                alt="Financial Education"
                className="mx-auto"
                width={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Education</h3>
            <p className="text-gray-600">
              Empower your journey with our Financial Education resources, fostering informed decisions.
            </p>
          </div>
        </div>

        {/* 2 More Feature Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* 4th Feature Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
              <img
                src="/path/to/icon4.png"
                alt="Investment Strategies"
                className="mx-auto"
                width={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Investment Strategies</h3>
            <p className="text-gray-600">
              Discover effective investment strategies to optimize your portfolio and maximize returns.
            </p>
          </div>

          {/* 5th Feature Card */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-6">
              <img
                src="/path/to/icon5.png"
                alt="Financial Tools"
                className="mx-auto"
                width={40}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Financial Tools</h3>
            <p className="text-gray-600">
              Equip yourself with our advanced financial tools to manage your wealth effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
