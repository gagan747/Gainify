'use client';
//@ts-ignore

import { useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export default function Contactus() {
	const [formState, setFormState] = useState({ fullName: '', email: '', phone: '', message: '' });
	const [error, setError] = useState<any>(null);
	const [success, setSuccess] = useState<any>(null);

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		// Form submission logic goes here
		if (formState.fullName && formState.email && formState.message) {
			setSuccess('Thank you! Your message has been sent.');
			setFormState({ fullName: '', email: '', phone: '', message: '' });
			setError(null);
		} else {
			setError('Please fill out all required fields.');
			setSuccess(null);
		}
	};

	const handleChange = (event: any) => {
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};

	return (
		<section className='font-poppins max-w-4xl mx-auto p-8 mt-16'>
			{/* Added mt-16 for top margin */}
			<h1 className='text-3xl font-bold text-center mb-8'>Contact Us</h1>
			<p className='text-center mb-8'>
				We’d love to hear from you! Whether you have a question, feedback, or need support, our team is here to help.
			</p>

			<hr className='mb-8' />

			<div className='mb-8'>
				<h2 className='text-2xl font-bold mb-4'>Our Contact Information</h2>
				<ul className='list-none'>
					<li><strong>Phone:</strong> +91 7417123998</li>
					<li><strong>WhatsApp:</strong> +91 7417123998</li>
					<li><strong>Email:</strong> support@gainifyofficial.com</li>
					{/* <li><strong>Address:</strong> 123 Main Street, Suite 400, City, State, ZIP Code</li> */}
				</ul>
			</div>

			<hr className='mb-8' />

			<div className='mb-8'>
				<h2 className='text-2xl font-bold mb-4'>Send Us a Message</h2>
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label htmlFor='fullName' className='block text-sm font-medium text-gray-700'>
							Full Name
						</label>
						<input
							type='text'
							id='fullName'
							name='fullName'
							value={formState.fullName}
							onChange={handleChange}
							required
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formState.email}
							onChange={handleChange}
							required
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
							Phone (optional)
						</label>
						<input
							type='tel'
							id='phone'
							name='phone'
							value={formState.phone}
							onChange={handleChange}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						/>
					</div>
					<div className='mb-4'>
						<label htmlFor='message' className='block text-sm font-medium text-gray-700'>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							value={formState.message}
							onChange={handleChange}
							required
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							rows={5}
						></textarea>
					</div>
					<button
						type='submit'
						className='w-full bg-green-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
					>
						Send Message
					</button>
					{success && <p className='text-green-500 mt-4'>{success}</p>}
					{error && <p className='text-red-500 mt-4'>{error}</p>}
				</form>
			</div>

			<hr className='mb-8' />

			<div className='mb-8 text-center'>
				<h2 className='text-2xl font-bold mb-4'>Follow Us</h2>
				<p className='mb-4'>Stay connected with us through social media.</p>
				<div className='flex justify-center space-x-6'>
					<a href='https://www.facebook.com/gainifyofficial' target='_blank' rel='noopener noreferrer'>
						<FaFacebook size={30} />
					</a>
					<a href='https://twitter.com/yourusername' target='_blank' rel='noopener noreferrer'>
						<FaInstagram size={30} />
					</a>
					<a href='https://www.linkedin.com/in/yourusername' target='_blank' rel='noopener noreferrer'>
						<FaWhatsapp size={30} />
					</a>
					<a href='https://www.instagram.com/yourusername' target='_blank' rel='noopener noreferrer'>
						<FaTelegramPlane size={30} />
					</a>
				</div>
			</div>
		</section>
	);
}
