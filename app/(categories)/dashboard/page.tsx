'use client';

import dynamic from 'next/dynamic';
import {
  FaHome,
  FaFileContract,
  FaFileInvoice,
  FaCreditCard,
  FaLifeRing,
  FaTicketAlt,
} from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Line = dynamic(() => import('react-chartjs-2').then(mod => mod.Line), {
  ssr: false,
});

export default function Dashboard() {
  const userActivityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Users in Last Week',
        data: [6000, 8000, 13000, 10000, 9000, 5000, 7000],
        borderColor: '#00D28E',
        backgroundColor: 'rgba(0, 210, 142, 0.2)',
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#00D28E',
        pointHoverBackgroundColor: '#00D28E',
        pointHoverBorderColor: '#ffffff',
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const dailyGainsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Daily Gains',
        data: [100, 300, 400, 200, 150, 500, 350],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#3b82f6',
        pointHoverBackgroundColor: '#3b82f6',
        pointHoverBorderColor: '#ffffff',
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const tableData = [
    { name: 'Ann Minavva', amount: '$1,456', status: 'Chargeback', date: '11 Sep 2022' },
    { name: 'Anatoly Belik', amount: '$42,478', status: 'Completed', date: '11 Sep 2022' },
  ];

  return (
    <div className="flex min-h-screen bg-dark text-light">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-64 p-4">
        {/* Brand */}
        <div className="flex items-center mb-8">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
            {/* Placeholder for the logo */}
          </div>
          <span className="ml-3 text-xl font-semibold">Hydar</span>
        </div>

        {/* Overview */}
        <div className="mb-4">
          <h3 className="text-gray-400 uppercase text-xs font-bold mb-2">Overview</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center space-x-2 p-3 rounded hover:bg-gray-800">
                <FaHome />
                <span>Home</span>
                <span className="ml-auto bg-purple-600 text-xs rounded-full px-2 py-1">12</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-3 rounded hover:bg-gray-800">
                <FaFileContract />
                <span>Contracts</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Menus */}
        <div className="mb-4">
          <h3 className="text-gray-400 uppercase text-xs font-bold mb-2">Menus</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center space-x-2 p-4 rounded hover:bg-gray-800">
                <FaFileInvoice />
                <span>Invoices</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-3 rounded hover:bg-gray-800">
                <FaCreditCard />
                <span>Cards</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="mb-4">
          <h3 className="text-gray-400 uppercase text-xs font-bold mb-2">Support</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center space-x-2 p-3 rounded hover:bg-gray-800">
                <FaLifeRing />
                <span>Help Center</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 p-3 rounded hover:bg-gray-800">
                <FaTicketAlt />
                <span>Create a Ticket</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 mt-20">
        <div className="container mx-auto px-4">
          {/* Portfolio Section with Chart on the Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Portfolio Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg text-left border-2 border-gray-300">
              <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>
              <div className="border-2 border-gray-300 p-4 mb-4">
                <p className="text-sm text-gray-500">Total Balance</p>
                <p className="text-4xl font-bold">$273,4500</p>
                <p className="text-green-500 text-xl">+40%</p>
              </div>
              <div className="flex justify-around">
                <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg">Deposit</button>
                <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg">Withdrawals</button>
              </div>
            </div>

            {/* User Activity Chart */}
            <div className="bg-secondary p-4 rounded-lg">
              <h2 className="text-lg mb-4">Users in The Last Week</h2>
              <div className="h-64">
                <Line data={userActivityData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
          </div>

          {/* Balance, Sales, and New Box Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-lg text-center border-2 border-green-600" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }}>
              <h2 className="text-lg mb-2 text-black">TOTAL DEPOSITS</h2>
              <p className="text-4xl font-semibold text-black">$56,874</p>
              <p className="text-green-500 text-xl">+17%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center border-2 border-green-600" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }}>
              <h2 className="text-lg mb-2 text-black">PROFIT GAINS</h2>
              <p className="text-4xl font-semibold text-black">$24,575</p>
              <p className="text-red-500 text-xl">-23%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-center border-2 border-green-600" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }}>
              <h2 className="text-lg mb-2 text-black">WITHDRAWALS</h2>
              <p className="text-4xl font-semibold text-black">$10,000</p>
              <p className="text-blue-500 text-xl">Change</p>
            </div>
          </div>

          {/* Daily Gains Chart and Three Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Daily Gains Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-blue-600" style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' }}>
              <h2 className="text-lg mb-4 text-black">Daily Gains</h2>
              <div className="h-64">
                <Line data={dailyGainsData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>

            {/* Three Boxes */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-lg text-center border-2 border-yellow-600" style={{ boxShadow: '0 0 20px rgba(234, 179, 8, 0.6)', aspectRatio: '1' }}>
                <h2 className="text-lg mb-2 text-black">Box 1</h2>
                <p className="text-4xl font-semibold text-black">Content 1</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg text-center border-2 border-red-600" style={{ boxShadow: '0 0 20px rgba(220, 38, 38, 0.6)', aspectRatio: '1' }}>
                <h2 className="text-lg mb-2 text-black">Box 2</h2>
                <p className="text-4xl font-semibold text-black">Content 2</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg text-center border-2 border-purple-600 col-span-2" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)' }}>
                <h2 className="text-lg mb-2 text-black">Box 3</h2>
                <p className="text-4xl font-semibold text-black">Additional Content</p>
              </div>
            </div>
          </div>

          {/* Transaction History Section */}
          <div className="bg-secondary p-6 rounded-lg mb-8">
            <h2 className="text-lg mb-4">Transaction History</h2>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#123456</td>
                  <td>15 Aug 2024</td>
                  <td>Deposit</td>
                  <td>$1,000</td>
                </tr>
                <tr>
                  <td>#123457</td>
                  <td>16 Aug 2024</td>
                  <td>Withdrawal</td>
                  <td>$500</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </Table>
          </div>

          {/* Last Orders Section */}
          <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-lg mb-4">Last Orders</h2>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.amount}</td>
                    <td>{row.status}</td>
                    <td>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
