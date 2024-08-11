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
					Coming Soon ...
				</div>
			</div>
		</section>
	);
}
