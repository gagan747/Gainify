import React from 'react';

export default function Insights() {
    return (
        <section
            className='relative text-white'
            style={{
                background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%)',
                backgroundColor: '#0b0d17', // Backup background color
            }}
        >
            <div className='max-w-6xl mx-auto px-6 sm:px-8'>
                <div className='pt-20 pb-12'>
                    <h1 className='text-4xl font-bold mb-6 text-center'>Our latest insight & update</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                        {/* Card 1 */}
                        <div className='text-center'>
                            <img src='/images/blog-01.png' alt='A Guide to Mastering Investment Tracking' className='mx-auto mb-4'/>
                            <h2 className='text-lg font-semibold'>A Guide to Mastering Investment Tracking</h2>
                        </div>
                        {/* Card 2 */}
                        <div className='text-center'>
                            <img src='/images/blog-02.png' alt='Start Planning for Retirement Today' className='mx-auto mb-4'/>
                            <h2 className='text-lg font-semibold'>Start Planning for Retirement Today</h2>
                        </div>
                        {/* Card 3 */}
                        <div className='text-center'>
                            <img src='/images/blog-03.png' alt='Regain Control with Debt Management' className='mx-auto mb-4'/>
                            <h2 className='text-lg font-semibold'>Regain Control with Debt Management</h2>
                        </div>
                        {/* Card 4 */}
                        <div className='text-center'>
                            <img src='/images/blog-04.png' alt='Optimizing Strategies for Financial Growth' className='mx-auto mb-4'/>
                            <h2 className='text-lg font-semibold'>Optimizing Strategies for Financial Growth</h2>
                        </div>
                        {/* Card 5 */}
                        <div className='text-center'>
                            <img src='/images/blog-05.png' alt='Stay Informed with Real-Time Updates' className='mx-auto mb-4'/>
                            <h2 className='text-lg font-semibold'>Stay Informed with Real-Time Updates</h2>
                        </div>
                        {/* Card 6 */}
                        <div className='text-center'>
                            <img src='/images/blog-06.png' alt='Diversify and Prosper with Portfolio Management' className='mx-auto mb-4'/>
                            <h2 className='text-lg font-semibold'>Diversify and Prosper with Portfolio Management</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Subscription Section */}
            <div className='max-w-4xl mx-auto mt-20 px-6 sm:px-8'>
                <div 
                    className='bg-white text-black rounded-xl shadow-lg p-8 text-center'
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(235, 235, 235, 1) 100%)',
                    }}
                >
                    <h2 className='text-3xl font-semibold mb-4'>Subscribe to our newsletter</h2>
                    <p className='mb-6'>Unlock your financial potential with Financia. We provide personalized tools and insights to elevate your financial journey.</p>
                    <form className='flex justify-center'>
                        <input 
                            type='email' 
                            placeholder='name@email.com' 
                            className='p-3 rounded-l-lg border border-gray-300 w-2/3 sm:w-1/2'
                        />
                        <button 
                            type='submit' 
                            className='bg-blue-600 text-white p-3 rounded-r-lg'
                        >
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
