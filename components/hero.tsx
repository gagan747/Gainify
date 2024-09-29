'use client';

import Image from 'next/image';

export default function HeroHome() {
	return (
		<section className='relative bg-[#060d15] text-white h-screen overflow-visible pt-64'>
			{' '}
			{/* Increased padding-top to move downwards */}
			<div className='absolute inset-0 flex items-center justify-center'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 w-full mt-32'>
					<div className='flex flex-col md:flex-row items-center justify-center h-full home-parent sm:mt-[20px]'>
						{/* Content Section */}
						<div className='w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
							{/* Join the Future Button */}
							<div className='mb-6 join-future'>
								<a
									className='px-6 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 transition duration-150 ease-in-out'
									href='#'>
									Join the Future
								</a>
							</div>

							<h1 className='text-4xl font-extrabold leading-tight tracking-tighter mb-6 invest-today home-heading'>
								Invest Today,{' '}
								<span className='bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-400'>
									Secure Tomorrow
								</span>
							</h1>
							<p className='text-base sm:text-lg text-gray-400 mb-8'>
								Let’s put your money to work. Got goals? We’ve got the solutions.
							</p>
							<div className='flex justify-center md:justify-start space-x-4'>
								<a
									className='px-6 sm:px-8 py-2 sm:py-3 rounded-md text-white bg-green-700 hover:bg-green-600 flex items-center transition duration-150 ease-in-out home-button'
									href='#'>
									Explore Funds
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										stroke='currentColor'
										className='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
										strokeWidth={2}>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M5 12h14M12 5l7 7-7 7'
										/>
									</svg>
								</a>
								<a
									className='px-6 sm:px-8 py-2 sm:py-3 rounded-md text-white bg-gray-700 hover:bg-gray-600 flex items-center transition duration-150 ease-in-out home-button'
									href='#'>
									Contact Us
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										stroke='currentColor'
										className='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
										strokeWidth={2}>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M5 12h14M12 5l7 7-7 7'
										/>
									</svg>
								</a>
							</div>
						</div>

						{/* Image Section */}
						<div className='w-full md:w-1/2 flex justify-center md:justify-end relative ml-16 home-image'>
							{' '}
							{/* Shifted image section to the right with ml-16 */}
							{/* Phone Image */}
							<div className='relative w-[250px]'>
								<Image
									src='/images/hero-custom-04.png'
									width={300}
									height={500}
									alt='Phone with Balance'
									className='rounded-lg w-full h-auto'
								/>
								{/* Card Image Positioned on the right */}
								<div className='absolute top-[35px] right-[-80px] w-[130px] sm:w-[170px] home-image-1'>
									<Image
										src='/images/card-post.png'
										width={500}
										height={800}
										alt='Card'
										className='rounded-2xl'
									/>
								</div>
								{/* "Hero-05" Image (152k+ Trusted Users) Positioned Below */}
								<div className='absolute bottom-[40px] right-[70px] w-[250px] sm:w-[250px] home-image-2'>
									{' '}
									{/* Increased height and adjusted position */}
									<Image
										src='/images/hero-card.png'
										width={512} // Intrinsic width
										height={166} // Intrinsic height
										alt='152k Trusted Users'
										className='rounded-md w-full h-auto' // Maintain aspect ratio
										style={{ maxWidth: '250px', maxHeight: '80px' }} // Slightly larger size
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				@media (max-width: 769px) {
					.join-future {
						margin-bottom: 0px !important;
						margin-top: 50px !important;
					}
					.invest-today {
						margin-top: 20px;
					}
				}
				@media (max-width: 765px) {
					.home-image-1 {
						right: -40px !important;
					}
					.home-image-2 {
						bottom: 140px !important;
						width: 90%;
					}
					.home-image {
						height: 610px;
					}
				}
				@media (max-width: 369px) {
					.join-future {
						margin-top: 30px !important;
						font-size: 12px !important;
					}
					.home-heading {
						font-size: 25px !important;
						margin-top: 25px;
					}
					.home-button {
						padding: 10px 7px !important;
						display: flex;
						box-sizing: border-box;
						align-items: center !important;
						justify-content: center !important;
						border-radius: 0px;
						height: 30px;
					}
					.home-image {
						position: relative;
						left: -25px;
						height: 590px;
					}
					.home-image-1 {
						right: -10% !important;
					}
					.home-image-2 {
						bottom: 150px !important;
						width: 90%;
					}
				}
			`}</style>
		</section>
	);
}
