'use client';

import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export default function PrivacyPolicy() {
	return (
		<section className='relative'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='pt-32 pb-12 md:pt-40 md:pb-20 flex justify-center'>
					<div className='text-lg max-w-prose'>
						<h1 className='text-4xl font-bold mb-4'>Privacy Policy</h1>
						<p>At Gainify, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.</p>

						<h2 className='text-2xl font-semibold mt-8'>Information We Collect</h2>
						<p>We collect various types of information in connection with the services we provide, including:</p>
						<ul className='list-disc list-inside'>
							<li><strong>Personal Information:</strong> This includes your name, email address, phone number, financial information, and other details you provide when you create an account, make transactions, or communicate with us.</li>
							<li><strong>Usage Data:</strong> We collect information about your interactions with our website, such as your IP address, browser type, operating system, pages viewed, and the time spent on our site.</li>
							<li><strong>Cookies:</strong> Our website uses cookies to enhance your user experience, remember your preferences, and track usage patterns.</li>
						</ul>

						<h2 className='text-2xl font-semibold mt-8'>How We Use Your Information</h2>
						<p>Your information is used to:</p>
						<ul className='list-disc list-inside'>
							<li>Provide and manage our services, including processing transactions and managing your account.</li>
							<li>Improve our website and services by analyzing user behavior and preferences.</li>
							<li>Communicate with you about your account, updates, promotions, and other relevant information.</li>
							<li>Ensure the security and integrity of our systems and protect against fraud.</li>
						</ul>

						<h2 className='text-2xl font-semibold mt-8'>Sharing Your Information</h2>
						<p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
						<ul className='list-disc list-inside'>
							<li><strong>Service Providers:</strong> Third-party vendors who assist us in providing our services, such as payment processing, data analysis, and customer support.</li>
							<li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to a valid request by public authorities.</li>
							<li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
						</ul>

						<h2 className='text-2xl font-semibold mt-8'>Your Rights and Choices</h2>
						<p>You have certain rights regarding your personal information, including:</p>
						<ul className='list-disc list-inside'>
							<li><strong>Access and Correction:</strong> You can request access to the personal information we hold about you and request corrections if it is inaccurate or incomplete.</li>
							<li><strong>Opt-Out:</strong> You may opt out of receiving promotional emails from us by following the unsubscribe instructions in those emails.</li>
							<li><strong>Cookies:</strong> You can manage your cookie preferences through your browser settings.</li>
						</ul>

						<h2 className='text-2xl font-semibold mt-8'>Data Security</h2>
						<p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

						<h2 className='text-2xl font-semibold mt-8'>Changes to This Privacy Policy</h2>
						<p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for the latest information on our privacy practices.</p>

						<h2 className='text-2xl font-semibold mt-8'>Contact Us</h2>
						<p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <a href='mailto:privacy@gainify.com' className='text-teal-600 hover:underline'>privacy@gainify.com</a>.</p>

						<p className='mt-8'>Thank you for trusting Gainify with your personal information. We are committed to protecting your privacy and ensuring your peace of mind.</p>

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
