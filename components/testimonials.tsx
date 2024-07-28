import Image from "next/image";

export default function Testimonials() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='h2 mb-4'>About Us</h2>
            <p className='text-xl text-gray-400'>
              At Gainify, we are committed to helping our clients achieve their
              financial goals by investing wisely in the financial markets. Our
              mission is to provide strong returns and ensure financial freedom for
              individuals, families, and companies alike. We understand the importance
              of financial knowledge and aim to spread awareness to empower our
              clients to make informed decisions. Many individuals face challenges in
              the markets due to a lack of knowledge, and we're here to bridge that
              gap. While we are at the beginning stage of our journey, we are
              determined to do much more. Join us on this incredible adventure towards
              financial success!
            </p>
          </div>

          {/* Testimonials */}
          <div className='max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none'>
            {/* No testimonials included */}
          </div>
        </div>
      </div>
    </section>
  );
}
