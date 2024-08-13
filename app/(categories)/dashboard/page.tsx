'use client';

import dynamic from 'next/dynamic';
import { Table } from 'react-bootstrap';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Dynamically import Line from react-chartjs-2
const Line = dynamic(() => import('react-chartjs-2').then(mod => mod.Line), {
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
        borderColor: '#00D28E', // Line color
        backgroundColor: 'rgba(0, 210, 142, 0.2)', // Fill under the line
        pointBackgroundColor: '#ffffff', // Point color
        pointBorderColor: '#00D28E', // Point border color
        pointHoverBackgroundColor: '#00D28E', // Point hover color
        pointHoverBorderColor: '#ffffff', // Point hover border color
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: true, // Fill under the line
        tension: 0.4, // Line curve tension
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
        {/* Portfolio Heading */}
        <h1 className="text-4xl font-bold mb-8 mt-12">My Portfolio</h1>

        {/* Balance, Sales, and New Box Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-green-600" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }}>
            <h2 className="text-lg mb-2 text-black">PORTFOLIO VALUE</h2>
            <p className="text-4xl font-semibold text-black">$56,874</p>
            <p className="text-green-500 text-xl">+17%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-green-600" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }}>
            <h2 className="text-lg mb-2 text-black">YOUR GAINS</h2>
            <p className="text-4xl font-semibold text-black">$24,575</p>
            <p className="text-red-500 text-xl">-23%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-green-600" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }}>
            <h2 className="text-lg mb-2 text-black">INVESTMENT</h2>
            <p className="text-4xl font-semibold text-black">$10,000</p>
            <p className="text-blue-500 text-xl">Change</p>
          </div>
        </div>

        {/* User Activity Section */}
        <div className="bg-secondary p-6 rounded-lg mb-8">
          <h2 className="text-lg mb-4">Users in The Last Week</h2>
          <div className="h-64">
            <Line data={chartData} options={{ maintainAspectRatio: false }} />
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
