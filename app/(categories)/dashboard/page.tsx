'use client';

import dynamic from 'next/dynamic';
import { Table } from 'react-bootstrap';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dynamically import Bar from react-chartjs-2
const Bar = dynamic(() => import('react-chartjs-2').then(mod => mod.Bar), {
  ssr: false, // Ensure this only runs on the client side
});

export default function TrackRecord() {
  // Data for the user activity chart
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Users in Last Week',
        data: [6000, 8000, 13000, 10000, 9000, 5000, 7000],
        backgroundColor: '#00D28E', // Bar color
        borderRadius: 10, // Rounded bars
        barThickness: 12,
      },
    ],
  };

  // Data for the "Last Orders" section
  const tableData = [
    { name: 'Ann Minavva', amount: '$1,456', status: 'Chargeback', date: '11 Sep 2022' },
    { name: 'Anatoly Belik', amount: '$42,478', status: 'Completed', date: '11 Sep 2022' },
    // Add more orders as needed
  ];

  return (
    <section className="bg-dark text-light min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-secondary text-white p-2 rounded-lg w-full md:w-auto"
            />
            <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full md:w-auto">Upgrade</button>
          </div>
        </div>

        {/* Balance and Sales Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 text-center">
            <h2 className="text-lg mb-2">Balance</h2>
            <p className="text-4xl font-semibold">$56,874</p>
            <p className="text-green-500 text-xl">+17%</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 text-center">
            <h2 className="text-lg mb-2">Sales</h2>
            <p className="text-4xl font-semibold">$24,575</p>
            <p className="text-red-500 text-xl">-23%</p>
          </div>
        </div>

        {/* User Activity Section */}
        <div className="bg-secondary p-6 rounded-lg mb-8">
          <h2 className="text-lg mb-4">User in The Last Week</h2>
          <div className="h-64">
            <Bar data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
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
    </section>
  );
}
