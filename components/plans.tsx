export default function Plans() {
  return (
    <section className="bg-white py-16"> {/* Added bg-white here */}
      <div className="max-w-full px-4 sm:px-6">
        {/* "Better Returns" Button */}
        <div className="text-center mb-8">
          <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full">
            Better Returns
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black">
            Choose a plan that works for you
          </h1>
          <p className="text-lg mt-4 text-black">
            Select the best plan that suits your financial goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Card */}
          <div className="bg-white text-black rounded-3xl p-4 shadow-lg hover:shadow-xl transition-transform duration-300" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}>
            <div className="flex justify-center mb-0">
              <img src="/images/plan-01.png" alt="Icon 1" className="w-150 h-150" />
            </div>
            <p className="text-center text-xl font-semibold text-teal-600 mb-0">Grow at up to</p>
            <p className="text-center text-3xl font-bold text-teal-500 mb-0">10% returns*</p>
            <p className="text-center text-sm text-gray-600 mb-0">
              <span className="block">📅 Monthly lock-in period</span>
              <span className="block">💰 $500 min. amount</span>
            </p>
            <p className="text-center text-xs text-gray-400 mb-0">*T&C Apply</p>
          </div>

          {/* Second Card */}
          <div className="bg-white text-black rounded-3xl p-4 shadow-lg hover:shadow-xl transition-transform duration-300" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}>
            <div className="flex justify-center mb-0">
              <img src="/images/plan-02.png" alt="Icon 2" className="w-170 h-170" />
            </div>
            <p className="text-center text-xl font-semibold text-teal-600 mb-0">Grow at up to</p>
            <p className="text-center text-3xl font-bold text-teal-500 mb-0">33.1% returns*</p>
            <p className="text-center text-sm text-gray-600 mb-0">
              <span className="block">📅 3 months lock-in period</span>
              <span className="block">💰 $500 min. amount</span>
            </p>
            <p className="text-center text-xs text-gray-400 mb-0">*T&C Apply</p>
          </div>

          {/* Third Card */}
          <div className="bg-white text-black rounded-3xl p-4 shadow-lg hover:shadow-xl transition-transform duration-300" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}>
            <div className="flex justify-center mb-0">
              <img src="/images/plan-03.png" alt="Icon 3" className="w-150 h-150" />
            </div>
            <p className="text-center text-xl font-semibold text-teal-600 mb-0">Grow at up to</p>
            <p className="text-center text-3xl font-bold text-teal-500 mb-0">70.5% returns*</p>
            <p className="text-center text-sm text-gray-600 mb-0">
              <span className="block">📅 6 months lock-in period</span>
              <span className="block">💰 $500 min. amount</span>
            </p>
            <p className="text-center text-xs text-gray-400 mb-0">*T&C Apply</p>
          </div>

          {/* Fourth Card */}
          <div className="bg-white text-black rounded-3xl p-4 shadow-lg hover:shadow-xl transition-transform duration-300" style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}>
            <div className="flex justify-center mb-0">
              <img src="/images/plan-04.png" alt="Icon 4" className="w-150 h-150" />
            </div>
            <p className="text-center text-xl font-semibold text-teal-600 mb-0">Grow at up to</p>
            <p className="text-center text-3xl font-bold text-teal-500 mb-0">143.5% returns*</p>
            <p className="text-center text-sm text-gray-600 mb-0">
              <span className="block">📅 12 months lock-in period</span>
              <span className="block">💰 $1000 min. amount</span>
            </p>
            <p className="text-center text-xs text-gray-400 mb-0">*T&C Apply</p>
          </div>
        </div>

        {/* Invest Now Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-teal-600 text-white text-lg font-bold py-3 px-16 rounded-lg hover:bg-teal-700 transition-colors duration-300">
            Invest Now
          </button>
        </div>
      </div>
    </section>
  );
}
