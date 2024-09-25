'use client'
export default function Reviews() {
  return (
    <section className='bg-[#111111] text-white'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h1 className='text-2xl font-semibold pt-4'>
          More than <span className='text-yellow-500 text-3xl font-bold'>300+</span>{' '}
          clients trust us with their financial success
        </h1>
      </div>
      <div className='w-full overflow-hidden'>
        <div className='w-full flex space-x-8 animate-scroll'>
          {/* Repeat the reviews to ensure continuous scrolling */}
          {[...Array(2)].map((_, i) => (
            <div className='flex flex-row space-x-8 mb-[34px]' key={i}>
              {/* Review 1 */}
              <div
                className='bg-gray-800 rounded-3xl p-8 shadow-md text-center' // Changed to rounded-3xl
                style={{ width: '360px', height: 'auto' }}>
                <p className='text-gray-300 mb-4'>
                  “Their returns have consistently outperformed the market. I'm more than satisfied with their service and results!”
                </p>
                <div className='text-white font-semibold'>John Anders</div>
                <div className='text-gray-400 text-sm'>Investor</div>
              </div>

              {/* Review 2 */}
              <div
                className='bg-gray-800 rounded-3xl p-8 shadow-md text-center' // Changed to rounded-3xl
                style={{ width: '360px', height: 'auto' }}>
                <p className='text-gray-300 mb-4'>
                  “This company truly stands by its commitments. They have delivered on every promise, making me feel secure in my investments.”
                </p>
                <div className='text-white font-semibold'>Sarah Lee</div>
                <div className='text-gray-400 text-sm'>Business Owner</div>
              </div>

              {/* Review 3 */}
              <div
                className='bg-gray-800 rounded-3xl p-8 shadow-md text-center' // Changed to rounded-3xl
                style={{ width: '360px', height: 'auto' }}>
                <p className='text-gray-300 mb-4'>
                  “I value transparency, and they excel at it. I always know where my investments stand, which gives me total peace of mind.”
                </p>
                <div className='text-white font-semibold'>Jessica Carter</div>
                <div className='text-gray-400 text-sm'>Marketing Executive</div>
              </div>

              {/* Review 4 */}
              <div
                className='bg-gray-800 rounded-3xl p-8 shadow-md text-center' // Changed to rounded-3xl
                style={{ width: '360px', height: 'auto' }}>
                <p className='text-gray-300 mb-4'>
                  “The transaction process is seamless, fast, and reliable. Managing my portfolio has never been this easy.”
                </p>
                <div className='text-white font-semibold'>William Rogers</div>
                <div className='text-gray-400 text-sm'>Real Estate Investor</div>
              </div>

              {/* Review 5 */}
              <div
                className='bg-gray-800 rounded-3xl p-8 shadow-md text-center' // Changed to rounded-3xl
                style={{ width: '360px', height: 'auto' }}>
                <p className='text-gray-300 mb-4'>
                  “Their commitment to my financial growth is clear. I’ve seen incredible returns, and I couldn’t be happier.”
                </p>
                <div className='text-white font-semibold'>Emily Davis</div>
                <div className='text-gray-400 text-sm'>Entrepreneur</div>
              </div>

              {/* Review 6 */}
              <div
                className='bg-gray-800 rounded-3xl p-8 shadow-md text-center' // Changed to rounded-3xl
                style={{ width: '360px', height: 'auto' }}>
                <p className='text-gray-300 mb-4'>
                  “Their returns are unmatched. I’ve recommended their services to friends, and everyone has been impressed.”
                </p>
                <div className='text-white font-semibold'>Michael Turner</div>
                <div className='text-gray-400 text-sm'>Software Engineer</div>
              </div>

              {/* Review 7 */}
              <div
                className='bg-gray-800 rounded-3xl p-8 shadow-md text-center' // Changed to rounded-3xl
                style={{ width: '360px', height: 'auto' }}>
                <p className='text-gray-300 mb-4'>
                  “Excellent customer service and always keeping me informed. They truly care about their clients' success.”
                </p>
                <div className='text-white font-semibold'>Olivia Harrison</div>
                <div className='text-gray-400 text-sm'>Graphic Designer</div>
              </div>

              {/* Review 8 */}
              <div
                className='bg-gray-800 rounded-3xl p-8 shadow-md text-center' // Changed to rounded-3xl
                style={{ width: '360px', height: 'auto' }}>
                <p className='text-gray-300 mb-4'>
                  “From transparency to timely returns, this company has exceeded my expectations in every way.”
                </p>
                <div className='text-white font-semibold'>James Nolan</div>
                <div className='text-gray-400 text-sm'>Architect</div>
              </div>

              {/* Review 9 */}
              <div
                className='bg-gray-800 rounded-3xl p-8 shadow-md text-center' // Changed to rounded-3xl
                style={{ width: '360px', height: 'auto' }}>
                <p className='text-gray-300 mb-4'>
                  “Their platform is easy to use, and I can track everything. I trust them with my future.”
                </p>
                <div className='text-white font-semibold'>Sophia Vega</div>
                <div className='text-gray-400 text-sm'>Financial Analyst</div>
              </div>

              {/* Review 10 */}
              <div
                className='bg-gray-800 rounded-3xl p-8 shadow-md text-center' // Changed to rounded-3xl
                style={{ width: '360px', height: 'auto' }}>
                <p className='text-gray-300 mb-4'>
                  “I’ve achieved consistent gains thanks to their expert management. They truly stand out in the industry.”
                </p>
                <div className='text-white font-semibold'>Daniel Craig</div>
                <div className='text-gray-400 text-sm'>Consultant</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}
