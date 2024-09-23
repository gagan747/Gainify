'use client';

import { FaHome, FaFileContract, FaFileInvoice, FaCreditCard, FaLifeRing, FaTicketAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
    const router = useRouter();

    // Example data for the chart
    const data = [
        { name: 'January', deposits: 4000, withdrawals: 2400 },
        { name: 'February', deposits: 3000, withdrawals: 1398 },
        { name: 'March', deposits: 2000, withdrawals: 9800 },
        { name: 'April', deposits: 2780, withdrawals: 3908 },
        { name: 'May', deposits: 1890, withdrawals: 4800 },
        { name: 'June', deposits: 2390, withdrawals: 3800 },
        { name: 'July', deposits: 3490, withdrawals: 4300 },
    ];

    return (
        <div className='bg-[#1a202c] text-light min-h-screen'>
            {/* Main Content */}
            <div className='flex'>
                <div className='flex-1 p-8'>
                    <div className='container mx-auto px-4'>
                        {/* Outer large rectangle */}
                        <div className='bg-white p-8 mt-16 rounded-3xl text-left' style={{ height: '40rem' }}>
                            <h1 className="text-2xl text-black font-bold -mb-9">MY PORTFOLIO</h1>

                            {/* 2x2 grid of boxes INSIDE the large rectangle */}
                            <div className='grid grid-cols-2 gap-4 mt-8 relative'>
                                {/* Box 1 */}
                                <div className='bg-gray-700 p-8 rounded-3xl w-96 h-[15rem] relative z-10'>
                                    <h2 className="text-xl font-semibold text-white mb-4">Total Balance</h2>
                                    <p className="text-4xl text-white mb-2">$200,345.00</p>
                                    <p className="text-green-400 text-lg mb-4">+$5000 +40%</p>
                                    <div className="flex space-x-4">
                                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Deposit</button>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Withdrawals</button>
                                    </div>
                                </div>

                                {/* Box 2 */}
                                <div className='bg-gray-700 p-8 rounded-3xl w-100 h-[12rem] -ml-40'>
                                    <h2 className="text-xl font-semibold text-white mb-4">Plan Type: Monthly Withdrawals</h2>
                                    <div className="grid grid-cols-3 gap-4 text-white">
                                        <div className="bg-gray-600 p-4 rounded-lg">
                                            <h3 className="text-lg font-bold">Total Deposit</h3>
                                            <p className="text-xl">$200,000.22</p>
                                        </div>
                                        <div className="bg-gray-600 p-4 rounded-lg">
                                            <h3 className="text-lg font-bold">Total Withdrawals</h3>
                                            <p className="text-xl">$200,000.23</p>
                                        </div>
                                        <div className="bg-gray-600 p-4 rounded-lg">
                                            <h3 className="text-lg font-bold">Overall Gains</h3>
                                            <p className="text-xl">$200,000.23</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Box 3 */}
                                <div className='bg-white p-1 rounded-3xl w-96 h-[22rem] relative -translate-y-20 border border-black z-0'>
                                 <h2 className="text-xl font-semibold mb-4 mt-20 text-black">Transaction History</h2>
                                  <ul className="list-disc pl-4 mt-10 text-black">
                                    <li>Transaction 1</li>
                                    <li>Transaction 2</li>
                                    <li>Transaction 3</li>
                                    </ul>
                                    </div>

                                {/* Box 4 with the Bar Chart and 3 additional boxes */}
                                <div className='bg-gray-700 p-8 rounded-3xl w-100 h-[20rem] -ml-40 -mt-11 flex'>
                                    {/* Chart container taking 75% width */}
                                    <div className="w-[75%] mr-4">
                                        <h2 className="text-xl font-semibold text-white mb-0">Transaction Overview</h2>
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={data}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis />
                                                <Tooltip />
                                                <Bar dataKey="deposits" fill="#82ca9d" />
                                                <Bar dataKey="withdrawals" fill="#8884d8" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>

                                    {/* 20% container with 3 smaller vertical boxes */}
                                    <div className="w-[20%] flex flex-col space-y-2">
                                        <div className="bg-gray-600 p-2 h-[5rem] rounded-lg text-white"> {/* Reduced height */}
                                            <h3 className="text-md font-bold">Monthly Gains</h3>
                                            <p>+10%</p>
                                        </div>
                                        <div className="bg-gray-600 p-2 h-[5rem] rounded-lg text-white"> {/* Reduced height */}
                                            <h3 className="text-md font-bold">Weekly Gains</h3>
                                            <p>+5%</p>
                                        </div>
                                        <div className="bg-gray-600 p-2 h-[5rem] rounded-lg text-white"> {/* Reduced height */}
                                            <h3 className="text-md font-bold">Yesterday's Gains</h3>
                                            <p>+2%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
<div className='bg-[#1a202c] text-white w-64 p-4'>
    {/* Welcome Message */}
    <div className='mb-6 mt-16'>
        <h2 className='text-2xl font-semibold'>WELCOME BACK</h2>
    </div>

    {/* Logo and Name */}
    <div className='flex items-center mb-8'>
        <div className='bg-gradient-to-r from-green-400 to-blue-500 w-10 h-10 rounded-full flex items-center justify-center'>
            {/* Placeholder for the logo */}
        </div>
        <span className='ml-3 text-2xl font-semibold'>Hydar</span>
    </div>

    <div className='mb-4'>
        <ul>
            <li className='mb-2'>
                <div
                    onClick={() => router.push('/dashboard/home')}
                    className='flex items-center space-x-2 p-3 rounded hover:bg-gray-700 cursor-pointer'>
                    <FaHome />
                    <span className='text-lg'>Home</span>
                </div>
            </li>
            <li>
                <div
                    onClick={() => router.push('/dashboard/contracts')}
                    className='flex items-center space-x-2 p-3 rounded hover:bg-gray-700 cursor-pointer'>
                    <FaFileContract />
                    <span className='text-lg'>My Portfolio</span>
                </div>
            </li>
        </ul>
    </div>

    <div className='mb-4'>
        <ul>
            <li className='mb-2'>
                <div
                    onClick={() => router.push('/dashboard/invoices')}
                    className='flex items-center space-x-2 p-4 rounded hover:bg-gray-700 cursor-pointer'>
                    <FaFileInvoice />
                    <span className='text-lg'>Transactions</span>
                </div>
            </li>
            <li>
                <div
                    onClick={() => router.push('/dashboard/cards')}
                    className='flex items-center space-x-2 p-3 rounded hover:bg-gray-700 cursor-pointer'>
                    <FaCreditCard />
                    <span className='text-lg'>Contracts</span>
                </div>
            </li>
        </ul>
    </div>

    <div className='mb-4'>
        <ul>
            <li className='mb-2'>
                <a href='#' className='flex items-center space-x-2 p-3 rounded hover:bg-gray-700 cursor-pointer'>
                    <FaLifeRing />
                    <span className='text-lg'>Statistics</span>
                </a>
            </li>
            <li>
                <a href='#' className='flex items-center space-x-2 p-3 rounded hover:bg-gray-700 cursor-pointer'>
                    <FaTicketAlt />
                    <span className='text-lg'>Help</span>
                </a>
            </li>
        </ul>
    </div>
</div>
            </div>
        </div>
    );
}
