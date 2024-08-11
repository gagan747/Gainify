import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa'; // Import icons

export default function Footer() {
  return (
    <footer className='bg-black-400 py-4'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap justify-between items-center'>
        {/* Logo */}
        <div className='footer-logo flex'>
          <Link
            href='/'
            className='inline-block mb-4 sm:mb-0'
            aria-label='12% Club'>
            <img
              src='/images/gurmanLogo.png'
              alt='Gurman Logo'
              className='w-24 h-auto'
            />
          </Link>
        </div>
        {/* Navigation Links */}
        <div className='flex flex-wrap justify-center space-x-6 text-teal-100 mb-4 sm:mb-0 footer-contents'>
          <Link href='/contact' className='hover:underline'>
            Contact Us
          </Link>
          <Link href='/faqs' className='hover:underline'>
            FAQs
          </Link>
          <Link href='/privacy-policy' className='hover:underline'>
            Privacy Policy
          </Link>
          <Link href='/terms-of-services' className='hover:underline'>
            Terms of Services
          </Link>
        </div>

        {/* Social Links */}
        <div className='flex justify-center space-x-4 footer-icons'>
          <Link
            href='https://www.facebook.com/gainifyofficial'
            aria-label='Facebook'
            target='_blank'>
            <FaFacebook className='w-6 h-6 text-teal-100' />
          </Link>
          <Link
            href='https://www.instagram.com/gainifyofficial'
            aria-label='Instagram'
            target='_blank'>
            <FaInstagram className='w-6 h-6 text-teal-100' />
          </Link>
          <Link
            href='https://api.whatsapp.com/send?phone=917417123998'
            aria-label='WhatsApp'
            target='_blank'>
            <FaWhatsapp className='w-6 h-6 text-teal-100' />
          </Link>
          <Link
            href='https://telegram.me/gainifysupport'
            aria-label='Telegram'
            target='_blank'>
            <FaTelegramPlane className='w-6 h-6 text-teal-100' />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 650px) {
          .footer-icons,
          .footer-contents,
          .footer-logo {
            justify-content: center;
            width: 100%;
            margin-top: 10px;
          }
       

						}
					}
				`}</style>
			</footer>
		);
}
