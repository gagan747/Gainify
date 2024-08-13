export default function Features() {
  return (
    <div className="flex flex-col items-center bg-black-400 p-8 font-poppins max-w-6xl mx-auto px-4 sm:px-6">
      <h1
        className="text-4xl font-bold text-white mb-4"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Your Personalized Investment Plan
      </h1>
      <p
        className="text-lg text-gray-100 mb-8"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Plans starting with Monthly withdrawals
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-[0_0_20px_10px_rgba(34,197,94,0.5)] hover:-translate-y-1 transition-shadow transition-transform duration-300">
          <img
            src="/images/account_fund(4).png"
            alt="Plan 1"
            className="mx-auto mb-4"
            width={70}
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Gain at up to
          </h2>
          <p className="text-3xl font-bold text-teal-600 mb-4">
            15% Monthly returns*
          </p>
          <div className="flex justify-center items-center text-gray-600 mb-4">
            <i className="mr-2 fa fa-calendar"></i> Monthly lock-in period
          </div>
          <div className="flex justify-center items-center text-gray-600 mb-4">
            <i className="mr-2 fa fa-money-bill"></i> $100 min. amount
          </div>
          <p className="text-xs text-gray-400">*T&C Apply</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-[0_0_20px_10px_rgba(34,197,94,0.5)] hover:-translate-y-1 transition-shadow transition-transform duration-300">
          <img
            src="/images/account_fund(1).png"
            alt="Plan 2"
            className="mx-auto mb-4"
            width={80}
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Gain at up to
          </h2>
          <p className="text-3xl font-bold text-teal-600 mb-4">
            33.5% returns*
          </p>
          <div className="flex justify-center items-center text-gray-600 mb-4">
            <i className="mr-2 fa fa-calendar"></i> 3 months lock-in period
          </div>
          <div className="flex justify-center items-center text-gray-600 mb-4">
            <i className="mr-2 fa fa-money-bill"></i> $100 min. amount
          </div>
          <p className="text-xs text-gray-400">*T&C Apply</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-[0_0_20px_10px_rgba(34,197,94,0.5)] hover:-translate-y-1 transition-shadow transition-transform duration-300">
          <img
            src="/images/account_fund(2).png"
            alt="Plan 3"
            className="mx-auto mb-4"
            width={80}
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Grow at up to
          </h2>
          <p className="text-3xl font-bold text-teal-600 mb-4">
            77.5% returns*
          </p>
          <div className="flex justify-center items-center text-gray-600 mb-4">
            <i className="mr-2 fa fa-calendar"></i> 6 months lock-in period
          </div>
          <div className="flex justify-center items-center text-gray-600 mb-4">
            <i className="mr-2 fa fa-money-bill"></i> $100 min. amount
          </div>
          <p className="text-xs text-gray-400">*T&C Apply</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center relative hover:shadow-[0_0_20px_10px_rgba(34,197,94,0.5)] hover:-translate-y-1 transition-shadow transition-transform duration-300">
          <span className="absolute top-0 right-0 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">
            RECOMMENDED
          </span>
          <img
            src="/images/account_fund(3).png"
            alt="Plan 3"
            className="mx-auto mb-4"
            width={80}
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Gain at up to
          </h2>
          <p className="text-3xl font-bold text-teal-600 mb-4">
            215.84% returns*
          </p>
          <div className="flex justify-center items-center text-gray-600 mb-4">
            <i className="mr-2 fa fa-calendar"></i> 12 months lock-in period
          </div>
          <div className="flex justify-center items-center text-gray-600 mb-4">
            <i className="mr-2 fa fa-money-bill"></i> $100 min. amount
          </div>
          <p className="text-xs text-gray-400">*T&C Apply</p>
        </div>
      </div>
      <button className="bg-teal-600 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-teal-700 transition duration-300">
        Invest Now
      </button>
    </div>
  );
}
