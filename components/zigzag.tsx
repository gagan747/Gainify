import Image from "next/image";

import FeatImage01 from "@/public/images/features-03-image-01.png";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";

export default function Zigzag() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <h1 className='h2 mb-4'>Our Services</h1>
            <p className='text-xl text-gray-400'>
              Explore our comprehensive investment and account management services
              designed to maximize your returns and provide top-tier financial
              support.
            </p>
          </div>

          {/* Items */}
          <div className='grid gap-20'>
            {/* 1st item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'>
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt='Features 01'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'>
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                <h3 className='h3 mb-3'>Fund Management</h3>
                  <div className='font-architects-daughter text-xl text-green-600 mb-2'>
                    "Greater gains. Smarter investments."
                  </div>
                  
                  <p className='text-xl text-gray-400 mb-4'>
                    Discover our tailored investment solutions, designed to maximize
                    returns and provide exceptional financial support:
                  </p>
                  <ul className='text-lg text-gray-400 -mb-2'>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Fund management offering returns from 8% to 220%</span>
                    </li>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>100% profit retention with monthly withdrawals</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>
                        Premier financial support to enhance your investment experience
                      </span>
                    </li>
                  </ul>
                  <div className='text-center'>
                    <button className='mt-8 px-4 py-2 bg-teal-500 text-white rounded-full'>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-up'>
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt='Features 02'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-left'>
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                <h3 className='h3 mb-3'>Account Management</h3>
                  <div className='font-architects-daughter text-xl text-green-600 mb-2'>
                    "Greater gains. Smarter investments"
                  </div>
                   <p className='text-xl text-gray-400 mb-4'>
                    Experience our expert account management services, delivering
                    substantial returns and a profit-sharing model that aligns with your
                    success:
                  </p>
                  <ul className='text-lg text-gray-400 -mb-2'>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>Potential returns of up to 10% monthly</span>
                    </li>
                    <li className='flex items-center mb-2'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>No upfront fees required</span>
                    </li>
                    <li className='flex items-center'>
                      <svg
                        className='w-3 h-3 fill-current text-green-500 mr-2 shrink-0'
                        viewBox='0 0 12 12'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path d='M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z' />
                      </svg>
                      <span>
                        50-50 profit sharing: we only earn when we generate profits in your
                        account
                      </span>
                    </li>
                  </ul>
                  <div className='text-center'>
                    <button className='mt-8 px-4 py-2 bg-teal-500 text-white rounded-full'>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
