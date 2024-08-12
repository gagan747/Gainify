'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export default function Aboutus() {
	const router = useRouter();
	const [error, setError] = useState(null);
	const dispatch = useDispatch(); // Initialize useDispatch
	const [success, setIsSuccess] = useState(null);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		try {
			dispatch({ type: 'SHOW_LOADER' }); // Show the loader
			const formData = new FormData(event.target); // Create a FormData object

			// Extract form values
			const email = formData.get('email');
			const password = formData.get('password');
			const fullName = formData.get('fullName');

			const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password, fullName }),
			});

			const data = await response.json();

			if (response.ok) {
				setError(null);
				setIsSuccess(data.message);
				data.token && localStorage.setItem('authorization', data?.token);
				window.dispatchEvent(new CustomEvent('forceRenderHeader'));
				router.push('/');
			} else {
				setIsSuccess(null);
				setError(data.message || 'Signup failed');
			}
		} catch (err) {
			//@ts-ignore
			setError(`Something went wrong: ${err?.toString()}`);
		} finally {
			dispatch({ type: 'HIDE_LOADER' }); // Show the loader
		}
	};

	useEffect(() => {
		let isSuccess: any, isError: any;

		if (success) {
			isSuccess = setTimeout(() => {
				setIsSuccess(null);
			}, 4000);
		}

		if (error) {
			isError = setTimeout(() => {
				setError(null);
			}, 4000);
		}

		return () => {
			// Clear the timeouts on component unmount or when dependencies change
			if (isSuccess) clearTimeout(isSuccess);
			if (isError) clearTimeout(isError);
		};
	}, [success, error]);

	return (
		<section className='relative'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='pt-32 pb-12 md:pt-40 md:pb-20 flex justify-center'>
					<div className='text-lg max-w-prose'>
						<h1 className='text-4xl font-bold mb-4'>About Gainify</h1>
						<p>Your Partner in Financial Success</p>
						<p>Welcome to Gainify, where your financial growth and security are our highest priorities. With over eight years of dedicated service in the fund management industry, Gainify has consistently delivered exceptional returns, guiding our clients through the complexities of the financial markets with confidence and clarity.</p>
						
						<h2 className='text-2xl font-semibold mt-8'>Our Story</h2>
						<p>Founded with a vision to democratize access to high-quality financial management, Gainify began its journey in [Year of Establishment]. What started as a small team of passionate financial experts has grown into a leading fund management company trusted by clients around the globe. Our growth is a testament to our commitment to excellence, transparency, and a client-first approach that sets us apart in a crowded marketplace.</p>
						
						<h2 className='text-2xl font-semibold mt-8'>Our Philosophy</h2>
						<p>At Gainify, we believe that successful investing is not about taking unnecessary risks but about making informed, strategic decisions that align with your financial goals. Our philosophy is rooted in three core principles:</p>
						<ul className='list-disc list-inside'>
							<li><strong>Integrity:</strong> We operate with complete transparency and honesty, ensuring that our clients are always fully informed about their investments. Trust is the foundation of our client relationships, and we strive to earn it every day.</li>
							<li><strong>Expertise:</strong> Our team of experienced fund managers and analysts brings deep market knowledge and a keen understanding of global financial trends. We leverage this expertise to identify opportunities and mitigate risks, helping you navigate the ever-changing financial landscape.</li>
							<li><strong>Performance:</strong> Our track record speaks for itself. We are proud of our consistent ability to deliver strong returns across various market conditions. We are not just managing your money; we are helping you build a secure financial future.</li>
						</ul>

						<h2 className='text-2xl font-semibold mt-8'>Our Services</h2>
						<p>Gainify offers a comprehensive suite of fund management services tailored to meet the diverse needs of our clients. Whether you are an individual investor seeking to grow your wealth or a corporation looking to optimize your investment portfolio, our solutions are designed to deliver results.</p>
						<ul className='list-disc list-inside'>
							<li><strong>Portfolio Management:</strong> Customized investment strategies that align with your risk tolerance and financial objectives.</li>
							<li><strong>Retirement Planning:</strong> Secure your future with retirement plans that maximize growth and ensure long-term stability.</li>
							<li><strong>Wealth Management:</strong> Comprehensive financial planning and investment management to preserve and grow your wealth.</li>
							<li><strong>Corporate Services:</strong> Tailored solutions for businesses, including asset management, investment advisory, and risk management.</li>
						</ul>

						<h2 className='text-2xl font-semibold mt-8'>Our Team</h2>
						<p>Our success is driven by our talented and dedicated team of professionals. Each member of the Gainify team brings a unique set of skills and experiences, united by a shared commitment to helping our clients succeed. From seasoned fund managers to innovative analysts, our team is our greatest asset.</p>

						<h2 className='text-2xl font-semibold mt-8'>Our Commitment to You</h2>
						<p>At Gainify, we understand that every client is unique, with distinct financial goals and challenges. That's why we take a personalized approach to fund management, working closely with you to develop strategies that fit your specific needs. We are committed to providing exceptional service, maintaining the highest standards of professionalism, and delivering results that exceed your expectations.</p>

						<h2 className='text-2xl font-semibold mt-8'>Why Choose Gainify?</h2>
						<ul className='list-disc list-inside'>
							<li><strong>Proven Track Record:</strong> Eight years of successful fund management with a history of strong returns.</li>
							<li><strong>Client-Centric Approach:</strong> Personalized service that puts your financial goals at the forefront.</li>
							<li><strong>Innovative Solutions:</strong> Cutting-edge strategies designed to adapt to the evolving financial markets.</li>
							<li><strong>Ethical Practices:</strong> A commitment to integrity, transparency, and responsible investing.</li>
						</ul>

						<h2 className='text-2xl font-semibold mt-8'>Join Us on Your Financial Journey</h2>
						<p>Whether you are just starting your investment journey or looking to take your portfolio to the next level, Gainify is here to help you achieve your financial aspirations. Partner with us, and let’s build a prosperous future together.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
