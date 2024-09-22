export default function Plans() {
  return (
    <section className="bg-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Plan that perfectly suits your financial needs
          </h1>
          <p className="text-lg mt-4 text-gray-400">
            Discover plans tailored to your financial needs. Choose features that align with your financial goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card (Standard) */}
          <div className="bg-white text-black rounded-3xl p-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">Monthly Withdrawls</h3>
            <p className="text-gray-500 mb-6">
            Get your withdrawals every Month and Grow up to
            </p>
            <p className="text-4xl font-bold mb-1">10% Returns</p>
            <p className="text-sm mb-6"></p>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-6" />

            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✓ Budget Tracking</li>
              <li>✓ Basic Bill Reminders</li>
              <li>✓ Expense Categorization</li>
              <li>✓ Email Support</li>
              <li>✓ Basic Analytics</li>
            </ul>
            <button className="border border-blue-500 text-blue-500 font-semibold py-3 w-full rounded-xl focus:outline-none hover:bg-blue-500 hover:text-white transition-colors duration-300 flex justify-center items-center">
              Get Started <span className="ml-2">→</span>
            </button>
          </div>

          {/* Second Card */}
          <div className="bg-gray-100 text-black rounded-3xl p-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Quartely Withdrawls</h3>
            <p className="text-gray-500 mb-6">
              Essential finance tools for budgeting and expense tracking.
            </p>
            <p className="text-4xl font-bold mb-1">$19</p>
            <p className="text-sm mb-6">/month</p>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-6" />

            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✓ Advanced Budgeting</li>
              <li>✓ Bill Pay Reminders</li>
              <li>✓ Detailed Expense Reports</li>
              <li>✓ Priority Email Support</li>
              <li>✓ Advanced Analytics</li>
            </ul>
            <button className="border border-blue-500 text-blue-500 font-semibold py-3 w-full rounded-xl focus:outline-none hover:bg-blue-500 hover:text-white transition-colors duration-300 flex justify-center items-center">
              Get Started <span className="ml-2">→</span>
            </button>
          </div>

          {/* Third Card */}
          <div className="bg-white text-black rounded-3xl p-8 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3">Half-yearly Withdrawls</h3>
            <p className="text-gray-500 mb-6">
              Essential finance tools for budgeting and expense tracking.
            </p>
            <p className="text-4xl font-bold mb-1">$29</p>
            <p className="text-sm mb-6">/month</p>

            {/* Horizontal Line */}
            <hr className="border-t border-gray-300 mb-6" />

            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✓ Personalized Budgeting</li>
              <li>✓ Automatic Bill Payments</li>
              <li>✓ Comprehensive Analysis</li>
              <li>✓ 24/7 Customer Support</li>
              <li>✓ Predictive Analytics</li>
            </ul>
            <button className="border border-blue-500 text-blue-500 font-semibold py-3 w-full rounded-xl focus:outline-none hover:bg-blue-500 hover:text-white transition-colors duration-300 flex justify-center items-center">
              Get Started <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
