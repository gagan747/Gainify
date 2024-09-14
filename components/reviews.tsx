'use client'
export default function Reviews() {
	return (
		<section className='bg-gray-900 text-white'>
			{/* Header */}
			<div className='text-center mb-12'>
				<h1 className='text-2xl font-semibold pt-4'>
					More than <span className='text-yellow-500 text-3xl font-bold'>300+</span>{' '}
					users love their financial journey
				</h1>
			</div>
			<div className='w-full overflow-hidden'>
				<div className='w-full flex space-x-8 animate-scroll'>
					{/* Repeat the reviews to ensure continuous scrolling */}
					{[...Array(2)].map((_, i) => (
						<div className='flex flex-row space-x-8 mb-[34px]' key={i}>
							{/* Review 1 */}
							<div
								className='bg-gray-800 rounded-lg p-8 shadow-md text-center'
								style={{ width: '360px', height: 'auto' }}>
								<p className='text-gray-300 mb-4'>
									“The goal setting feature has helped me stay focused on my long-term
									financial goals. Highly recommended!”
								</p>
								<div className='text-white font-semibold'>John Anglik</div>
								<div className='text-gray-400 text-sm'>Fitness Trainer</div>
							</div>

							{/* Review 2 */}
							<div
								className='bg-gray-800 rounded-lg p-8 shadow-md text-center'
								style={{ width: '360px', height: 'auto' }}>
								<p className='text-gray-300 mb-4'>
									“The digital innovation in this app has truly transformed my financial
									experience. It's a must-have!”
								</p>
								<div className='text-white font-semibold'>Sarah Kasin</div>
								<div className='text-gray-400 text-sm'>Financial Adviser</div>
							</div>

							{/* Review 3 */}
							<div
								className='bg-gray-800 rounded-lg p-8 shadow-md text-center'
								style={{ width: '360px', height: 'auto' }}>
								<p className='text-gray-300 mb-4'>
									“The user-friendly interface makes managing finances a breeze. Best
									financial app out there!”
								</p>
								<div className='text-white font-semibold'>Jessica Pandaan</div>
								<div className='text-gray-400 text-sm'>Fund Manager</div>
							</div>

							{/* Review 4 */}
							<div
								className='bg-gray-800 rounded-lg p-8 shadow-md text-center'
								style={{ width: '360px', height: 'auto' }}>
								<p className='text-gray-300 mb-4'>
									“The debt management system is excellent. It’s helped me pay off my
									debts faster and regain control of my finances.”
								</p>
								<div className='text-white font-semibold'>William Kacuk</div>
								<div className='text-gray-400 text-sm'>Luxury Car Sales</div>
							</div>

							{/* Review 5 */}
							<div
								className='bg-gray-800 rounded-lg p-8 shadow-md text-center'
								style={{ width: '360px', height: 'auto' }}>
								<p className='text-gray-300 mb-4'>
									“The investment tracker keeps me updated on my portfolio performance.
									It's like having a personal financial advisor!”
								</p>
								<div className='text-white font-semibold'>Emily Sukun</div>
								<div className='text-gray-400 text-sm'>Digital Marketer</div>
							</div>

							{/* Review 6 */}
							<div
								className='bg-gray-800 rounded-lg p-8 shadow-md text-center'
								style={{ width: '360px', height: 'auto' }}>
								<p className='text-gray-300 mb-4'>
									“The budgeting tools are comprehensive and easy to use. They've helped
									me save more each month.”
								</p>
								<div className='text-white font-semibold'>Michael Thorne</div>
								<div className='text-gray-400 text-sm'>Software Engineer</div>
							</div>

							{/* Review 7 */}
							<div
								className='bg-gray-800 rounded-lg p-8 shadow-md text-center'
								style={{ width: '360px', height: 'auto' }}>
								<p className='text-gray-300 mb-4'>
									“The customer support is outstanding! They were quick to help me
									navigate through the app’s features.”
								</p>
								<div className='text-white font-semibold'>Olivia Kingsley</div>
								<div className='text-gray-400 text-sm'>Graphic Designer</div>
							</div>

							{/* Review 8 */}
							<div
								className='bg-gray-800 rounded-lg p-8 shadow-md text-center'
								style={{ width: '360px', height: 'auto' }}>
								<p className='text-gray-300 mb-4'>
									“I love the real-time notifications. They keep me updated on all my
									transactions instantly.”
								</p>
								<div className='text-white font-semibold'>James Noren</div>
								<div className='text-gray-400 text-sm'>Architect</div>
							</div>

							{/* Review 9 */}
							<div
								className='bg-gray-800 rounded-lg p-8 shadow-md text-center'
								style={{ width: '360px', height: 'auto' }}>
								<p className='text-gray-300 mb-4'>
									“The app’s design is sleek and modern, making my financial management
									experience enjoyable.”
								</p>
								<div className='text-white font-semibold'>Sophia Valens</div>
								<div className='text-gray-400 text-sm'>Marketing Specialist</div>
							</div>

							{/* Review 10 */}
							<div
								className='bg-gray-800 rounded-lg p-8 shadow-md text-center'
								style={{ width: '360px', height: 'auto' }}>
								<p className='text-gray-300 mb-4'>
									“Tracking my expenses has never been easier. The app categorizes them
									perfectly for me.”
								</p>
								<div className='text-white font-semibold'>Daniel Crux</div>
								<div className='text-gray-400 text-sm'>Entrepreneur</div>
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
