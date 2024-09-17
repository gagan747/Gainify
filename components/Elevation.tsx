import Image from "next/image";

export default function () {
  return (
    <section id="" className="bg-[#080c14] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-4 py-1 rounded-full uppercase mb-5">
            Finance 
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Elevate your financial journey with Gainify
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            Unlock your financial potential with Gainify. Our tailored plans and expert insights empower you to elevate every step of your financial journey.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
            Let's get started
          </button>
        </div>
      </div>
    </section>
  );
}
