'use client';

export default function Elevation() {
  return (
    <section id="" className="bg-[#080c14] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center relative overflow-hidden">
          {/* Inline CSS for animations */}
          <style jsx>{`
            @keyframes boxMoveYellow {
              0% {
                transform: translate(0, 0);
              }
              25% {
                transform: translate(-100px, 0); /* Increased movement distance */
              }
              50% {
                transform: translate(-100px, -100px); /* Increased movement distance */
              }
              75% {
                transform: translate(0, -100px); /* Increased movement distance */
              }
              100% {
                transform: translate(0, 0);
              }
            }

            @keyframes boxMoveBlue {
              0% {
                transform: translate(0, 0);
              }
              25% {
                transform: translate(100px, 0); /* Increased movement distance */
              }
              50% {
                transform: translate(100px, 100px); /* Increased movement distance */
              }
              75% {
                transform: translate(0, 100px); /* Increased movement distance */
              }
              100% {
                transform: translate(0, 0);
              }
            }

            .moving-yellow {
              animation: boxMoveYellow 4s linear infinite; /* Slower duration */
            }

            .moving-blue {
              animation: boxMoveBlue 4s linear infinite; /* Slower duration */
            }

            .overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(255, 255, 255, 0.1); /* Increased faded effect */
              border-radius: 1.5rem; /* Match the rounded corners */
            }
          `}</style>

          {/* Background images with blur effect and animations */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] moving-yellow"> {/* Increased size */}
            <img
              src="/images/yellow-shade.png"
              alt="Yellow Shade"
              className="blur-lg w-full h-full"
              style={{ filter: "blur(150px)" }} // Increased blur effect
            />
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] moving-blue"> {/* Increased size */}
            <img
              src="/images/blue-shade.png"
              alt="Blue Shade"
              className="blur-lg w-full h-full"
              style={{ filter: "blur(150px)" }} // Increased blur effect
            />
          </div>

          {/* Overlay for faded effect */}
          <div className="overlay"></div>

          {/* Content */}
          <div className="relative z-10">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-4 py-1 rounded-full uppercase mb-5">
              Finance Elevation
            </span>
            <h1 className="text-5xl font-Gilroy font-bold text-gray-900 -mb-3">
              Elevate your financial
            </h1>
            <h1 className="text-5xl font-Gilroy font-bold text-gray-900 mb-6">
              journey with Gainify
            </h1>
            <p className="text-lg text-gray-500 mb-1">
              Unlock your financial potential with Gainify. Our tailored plans and expert insights
            </p>
            <p className="text-lg text-gray-500 mb-10">
              empower you to elevate every step of your financial journey.
            </p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Let's get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
