"use client"; // This makes the component a client component
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Header() {
  const [isAuthorized, setIsAuthorized] = useState({
    value: false,
    details: {},
  });
  const dispatch = useDispatch(); // Initialize useDispatch
  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    async function getDetails() {
      try {
        dispatch({ type: "SHOW_LOADER" }); // Show the loader
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/details`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authorization")}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setIsAuthorized({
            value: true,
            details: data.userDetails,
          });
        } else {
          setIsAuthorized({
            value: false,
            details: {},
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        dispatch({ type: "HIDE_LOADER" }); // Show the loader
      }
    }
    getDetails();
  }, [forceRender]);

  useEffect(() => {
    const forceRenderComponent = () => {
      setForceRender((forceRender) => !forceRender);
    };
    window.addEventListener("forceRenderHeader", forceRenderComponent);

    return () => {
      window.removeEventListener("forceRenderHeader", forceRenderComponent);
    };
  }, []);

  return (
			<header className='absolute w-full z-30'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6'>
					<div className='flex items-center justify-between h-20'>
						{/* Site branding */}
						<div className='shrink-0 mr-4'>
							{/* Logo */}
							<Link href='/' className='block group' aria-label='Cruip'>
								<img
									src={'/images/gurmanLogo.png'}
									className='group-hover:border-b-2 group-hover:border-green-600 group-hover:mb-[-1.5px]'
									style={{ width: '8rem' }}
									alt='Logo'
								/>
							</Link>
						</div>

						{/* Desktop navigation */}
						<nav className='hidden md:!block md:flex md:grow'>
							{/* Desktop sign in links */}
							<ul className='flex grow justify-end flex-wrap items-center below900:mt-5 font-bold'>
								<li>
									<Link
										href={'/track-record'}
										className=' text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'>
										Track Record
									</Link>
								</li>
								<li>
									<Link
										href={'/#testimonials'}
										className=' text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'>
										About us
									</Link>
								</li>
								<li>
									<Link
										href={'/#services'}
										className=' text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'>
										Our Services
									</Link>
								</li>
								<li>
									<Link
										href={'/contact-us'}
										className=' text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'>
										Contact Us
									</Link>
								</li>
								{/* <li>
									<Link
										href={'/#services'}
										className=' text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'>
										Terms of Services
									</Link>
								</li>
								<li>
									<Link
										href={'/#services'}
										className=' text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'>
										Privacy Policy
									</Link>
								</li> */}
								<li>
									{isAuthorized.value ? (
										<div className='text-green-600 px-3 py-3 transition duration-150 ease-in-out hover:text-gray-200'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												strokeWidth={2.0}
												stroke='currentColor'
												className='w-7 h-8 '
												viewBox='0 0 23 25'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
												/>
											</svg>
											{/* <span>Gurman Singh</span> */}
										</div>
									) : (
										<Link
											href='/signin'
											className='btn-sm text-white bg-green-600 hover:bg-green-700 ml-3'>
											Sign in
										</Link>
									)}
								</li>
							</ul>
						</nav>
						<MobileMenu isAuthorized={isAuthorized} />
					</div>
				</div>
			</header>
		);
}
