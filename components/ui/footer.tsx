import React from "react";
import Link from "next/link";

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
							href='https://www.facebook.com'
							aria-label='Facebook'
							target='_blank'>
							<svg
								className='w-5 h-5 text-teal-100 fill-current mt-[3px]'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.336-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.667.012-4.947.072-1.281.061-2.61.335-3.719 1.444-1.109 1.109-1.383 2.438-1.444 3.719-.06 1.281-.072 1.689-.072 4.947s.012 3.667.072 4.947c.061 1.281.335 2.61 1.444 3.719 1.109 1.109 2.438 1.383 3.719 1.444 1.281.06 1.689.072 4.947.072s3.667-.012 4.947-.072c1.281-.061 2.61-.335 3.719-1.444 1.109-1.109 1.383-2.438 1.444-3.719.06-1.281.072-1.689.072-4.947s-.012-3.667-.072-4.947c-.061-1.281-.335-2.61-1.444-3.719-1.109-1.109-2.438-1.383-3.719-1.444-1.281-.06-1.689-.072-4.947-.072z' />
								<path d='M12 5.838c-3.407 0-6.162 2.755-6.162 6.162s2.755 6.162 6.162 6.162 6.162-2.755 6.162-6.162-2.755-6.162-6.162-6.162zm0 10.162c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z' />
								<circle cx='18.406' cy='5.594' r='1.44' />
							</svg>
						</Link>
						<Link
							href='https://www.facebook.com'
							aria-label='Facebook'
							target='_blank'>
							<svg
								className='w-6 h-6 text-teal-100 fill-current'
								viewBox='0 0 32 32'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M14.023 24V16H11v-3.533h3.023V9.417C14.023 6.526 15.888 5 18.432 5c1.237 0 2.3.092 2.61.133v3.026h-1.79c-1.402 0-1.674.668-1.674 1.646v2.662h3.354L20.5 16h-3.016v8h-3.461z' />
							</svg>
						</Link>
						<Link href='https://www.x.com' aria-label='X' target='_blank'>
							<svg
								className='w-6 h-6 text-teal-100 fill-current'
								viewBox='0 0 32 32'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M13.063 9l3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z' />
							</svg>
						</Link>
						<Link
							href='https://www.linkedin.com'
							aria-label='LinkedIn'
							target='_blank'>
							<svg
								className='w-6 h-6 text-teal-100 fill-current'
								viewBox='0 0 32 32'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M12 12h5v1.75h.07c.5-.95 1.77-1.94 3.68-1.94 3.94 0 4.68 2.35 4.68 5.4v6.8h-5v-6.75c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.6 1.75-2.6 3.58V24h-5V12zM2 12h5v12H2V12zm2.5-9.5c1.62 0 2.5 1.13 2.5 2.48C7 5.87 6.12 7 4.5 7S2 5.87 2 4.48C2 3.12 2.88 2 4.5 2z' />
							</svg>
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
				`}</style>
			</footer>
		);
}
