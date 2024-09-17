export default function Plans() {
  return (
    <section className="bg-white py-16 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* "Customized Plans" Button */}
        <div className="text-center mb-8">
          <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full">
            Customized Plans
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Plan that perfectly suits your financial needs
          </h1>
          <p className="text-lg mt-4">
            Discover plans tailored to your financial needs. Choose features that align with your financial goals.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-2 rounded-full inline-flex">
            <button className="px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800 rounded-full focus:outline-none">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-gray-300 bg-gray-800 rounded-full focus:outline-none">
              Yearly <span className="ml-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Save 30%</span>
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Standard Plan with Monthly Lock-in Period */}
          <div className="bg-gray-800 rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <div className="mb-6">
              <img src="/images/plant-icon.png" alt="Growth Icon" className="mx-auto h-20" />
            </div>
            <h3 className="text-lg font-semibold text-gray-300 mb-1">Grow at up to</h3>
            <p className="text-4xl font-bold text-white mb-1">10% returns*</p>
            <p className="text-gray-400 mb-6">*T&C Apply</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✓  Monthly lock-in period</li>
              <li>✓ ₹10,000 min. amount</li>
            </ul>
            <button className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-full focus:outline-none">
              Get Started →
            </button>
          </div>

          {/* Plus+ Plan */}
          <div className="bg-gray-800 rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-white mb-3">Monthly Withdrawls</h3>
            <p className="text-gray-400 mb-6">
              Get your withdrawals every Month and Grow up to
            </p>
            <p className="text-3xl font-bold text-white mb-6">10% Returns</p>
            <p className="text-gray-400 mb-6">*T&C Apply</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✓ Monthly Lock-in Period</li>
              <li>✓ ₹10,000 min. amount</li>
              <li>✓ Daily Updates</li>
              
            </ul>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
              Get Started →
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-800 rounded-lg shadow-md p-8 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-white mb-3">Pro</h3>
            <p className="text-gray-400 mb-6">
              Essential finance tools for budgeting and expense tracking.
            </p>
            <p className="text-3xl font-bold text-white mb-6">$29</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✓ Personalized Budgeting</li>
              <li>✓ Automatic Bill Payments</li>
              <li>✓ Comprehensive Analysis</li>
              <li>✓ 24/7 Customer Support</li>
              <li>✓ Predictive Analytics</li>
            </ul>
            <button className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-full focus:outline-none">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
