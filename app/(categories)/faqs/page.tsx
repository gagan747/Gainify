'use client';

import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export default function FAQ() {
	// State to track which FAQ item is open
	const [openItem, setOpenItem] = useState(null);

	// Function to toggle FAQ items
	const toggleItem = (index: any) => {
		if (openItem === index) {
			setOpenItem(null); // Close if it's already open
		} else {
			setOpenItem(index); // Open the clicked one
		}
	};

	// FAQ items data
	const faqItems = [
		{
			question: 'What is Gainify?',
			answer:
				'Gainify is an investment platform that focuses on delivering consistent, superior returns for our clients through strategic asset management and financial planning.',
		},
		{
			question: 'How do I open an account?',
			answer:
				'To open an account with Gainify, simply visit our Sign-Up page, fill in your personal details, and complete the account verification process. Once verified, you can start investing immediately.',
		},
		{
			question: 'What investment options are available?',
			answer:
				'Gainify offers a range of investment options, including stocks, bonds, ETFs, mutual funds, and alternative investments. Our financial advisors can help you choose the best options based on your financial goals.',
		},
		{
			question: 'How secure is my data with Gainify?',
			answer:
				'Your data security is our top priority. We use advanced encryption technologies and follow industry best practices to protect your personal information and financial data.',
		},
		{
			question: 'Can I withdraw my funds at any time?',
			answer:
				'Yes, you can withdraw your funds at any time. Withdrawals are processed quickly, and you will receive your funds within a few business days, depending on your bank.',
		},
		{
			question: 'How can I contact customer support?',
			answer:
				'You can contact our customer support team via email at support@gainify.com or through our live chat feature available on the website. We’re here to help 24/7.',
		},
	];

	return (
		<section className='relative'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='pt-32 pb-12 md:pt-40 md:pb-20 flex justify-center'>
					<div className='text-lg max-w-prose w-full'>
						<h1 className='text-4xl font-bold mb-4 text-center'>Frequently Asked Questions</h1>
						<p className='text-center mb-8'>
							Find answers to common questions about Gainify and our services.
						</p>

						{/* FAQ Items */}
						<div className='space-y-4'>
							{faqItems.map((item, index) => (
								<div key={index} className='border rounded-lg'>
									<button
										className='w-full flex justify-between items-center p-4 text-left'
										onClick={() => toggleItem(index)}
									>
										<span className='text-xl font-semibold'>{item.question}</span>
										<span className='text-teal-600'>{openItem === index ? '-' : '+'}</span>
									</button>
									{openItem === index && (
										<div className='p-4 bg-gray-50'>
											<p>{item.answer}</p>
										</div>
									)}
								</div>
							))}
						</div>

						{/* Social Media Section */}
						<div className='mt-12 text-center'>
							<h2 className='text-2xl font-bold mb-4'>Follow Us</h2>
							<p className='mb-4'>Stay connected with us through social media.</p>
							<div className='flex justify-center space-x-6'>
								<a href='https://www.facebook.com/gainifyofficial' target='_blank' rel='noopener noreferrer'>
									<FaFacebook size={30} />
								</a>
								<a href='https://instagram.com/gainifyofficial' target='_blank' rel='noopener noreferrer'>
									<FaInstagram size={30} />
								</a>
								<a href='https://api.whatsapp.com/send?phone=917417123998' target='_blank' rel='noopener noreferrer'>
									<FaWhatsapp size={30} />
								</a>
								<a href='https://telegram.me/gainifysupport' target='_blank' rel='noopener noreferrer'>
									<FaTelegramPlane size={30} />
								</a>
							</div>
						</div>
						{/* End of Social Media Section */}
					</div>
				</div>
			</div>
		</section>
	);
}
