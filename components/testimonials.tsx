import Image from "next/image";

export default function Testimonials() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 bg-green-700'>
        <div className='py-12 md:py-20 border-t border-gray-800 flex flex-col lg:flex-row items-center'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center lg:text-left lg:w-2/3 pb-12 md:pb-20'>
            <h2 className='h2 mb-4 text-white'>About Gainify</h2>
            <p className='text-xl text-white'>
            Gainify is a fund management company that excels in navigating financial markets to achieve outstanding returns. We combine expert strategies with financial education to help clients reach their financial goals and attain long-term success.
            </p>
          </div>

          {/* Image on the right side */}
          <div className='w-full lg:w-1/3 flex justify-center'>
            <Image
              src="/images/about-us.jpg"
              alt="About Us"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className='max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none'>
          {/* No testimonials included */}
        </div>
      </div>
    </section>
  );
}
