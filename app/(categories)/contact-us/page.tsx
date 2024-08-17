'use client';
//@ts-ignore

import { useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTelegramPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contactus() {
	const [formState, setFormState] = useState({ fullName: '', email: '', phone: '', message: '' });
	const [error, setError] = useState<any>(null);
	const [success, setSuccess] = useState<any>(null);

	const handleSubmit = async (event: any) => {
		event.preventDefault();

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
		<section className='font-poppins max-w-5xl mx-auto p-8 mt-16'>
			<h1 className='text-4xl font-bold text-center mb-8'>We would love to hear from you</h1>
			<div className='bg-white text-gray-800 rounded-xl p-10 shadow-lg'>
				<div className='flex flex-col lg:flex-row lg:space-x-10'>
					<div className='flex-1'>
						<div className='mb-8'>
							<h2 className='text-2xl font-bold mb-4'>Connect with us</h2>
							<p className='mb-6'>
								Connect with us. We value your input. Together, we can create a better financial future. Let's start today.
							</p>
							<div className='bg-gray-100 rounded-lg p-6'>
								<div className='mb-4'>
									<h3 className='text-xl font-bold mb-2'>Head Office</h3>
									<p className='flex items-center'><FaMapMarkerAlt className='mr-2' /> 5899 Alexys Highway Suite 678, NR, Nevada, USA</p>
								</div>
								<div className='mb-4'>
									<h3 className='text-xl font-bold mb-2'>Phone</h3>
									<p className='flex items-center'><FaPhone className='mr-2' /> +1234 567 890</p>
								</div>
								<div>
									<h3 className='text-xl font-bold mb-2'>Email</h3>
									<p className='flex items-center'><FaEnvelope className='mr-2' /> customer@financia.com</p>
								</div>
							</div>
						</div>
					</div>

					<div className='flex-1'>
						<form onSubmit={handleSubmit} className='bg-gray-100 rounded-lg p-6'>
							<div className='mb-4'>
								<input
									type='text'
									id='fullName'
									name='fullName'
									placeholder='Jane Smith'
									value={formState.fullName}
									onChange={handleChange}
									required
									className='w-full px-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500'
								/>
							</div>
							<div className='mb-4'>
								<input
									type='email'
									id='email'
									name='email'
									placeholder='jane@example.com'
									value={formState.email}
									onChange={handleChange}
									required
									className='w-full px-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500'
								/>
							</div>
							<div className='mb-4'>
								<textarea
									id='message'
									name='message'
									placeholder='Your message'
									value={formState.message}
									onChange={handleChange}
									required
									className='w-full px-4 py-3 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500'
									rows={5}
								></textarea>
							</div>
							<button
								type='submit'
								className='w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300'
							>
								Submit
							</button>
							{success && <p className='text-green-500 mt-4'>{success}</p>}
							{error && <p className='text-red-500 mt-4'>{error}</p>}
						</form>
					</div>
				</div>
			</div>

			<div className='text-center mt-10'>
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
		</section>
	);
}
