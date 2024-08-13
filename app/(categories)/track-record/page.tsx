'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend } from 'chart.js';
import { Table, Carousel } from 'react-bootstrap';

// Register necessary components for chart.js
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend);

export default function TrackRecord() {
	// Sample data for the periodical chart
	const periodChartData = {
		labels: ['Monthly', '2 Months', '3 Months', '6 Months', 'Yearly'],
		datasets: [
			{
				label: 'Fund Performance (%)',
				data: [6, 12, 18, 30, 72],  // Example data
				fill: false,
				backgroundColor: 'rgba(54, 162, 235, 0.4)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 2,
				tension: 0.4,
			},
			{
				label: 'Benchmark Performance (%)',
				data: [5, 10, 15, 25, 60],  // Example data
				fill: false,
				backgroundColor: 'rgba(255, 206, 86, 0.4)',
				borderColor: 'rgba(255, 206, 86, 1)',
				borderWidth: 2,
				tension: 0.4,
			},
		],
	};

	// Sample data for the monthly chart
	const chartData = {
		labels: [
			'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
			'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
		],
		datasets: [
			{
				label: 'Fund Performance (%)',
				data: [5, 6, 8, 7, 5, 10, 10, 12, 8, 7, 6, 9],
				fill: false,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderWidth: 2,
				tension: 0.4,
			},
			{
				label: 'Benchmark Performance (%)',
				data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
				fill: false,
				backgroundColor: 'rgba(255,99,132,0.4)',
				borderColor: 'rgba(255,99,132,1)',
				borderWidth: 2,
				tension: 0.4,
			},
		],
	};

	// Data for the periodical table
	const periodTableHeaders = ['Period', 'Monthly', '2 Months', '3 Months', '6 Months', 'Yearly'];
	const periodGainifyPerformance = ['Gainify Performance', '6%', '12%', '18%', '30%', '72%'];
	const periodBenchmarkPerformance = ['Benchmark Performance', '5%', '10%', '15%', '25%', '60%'];

	// Data for the monthly table
	const tableHeaders = ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const gainifyPerformance = ['Gainify Performance', '5%', '6%', '8%', '7%', '5%', '10%', '10%', '12%', '8%', '7%', '6%', '9%'];
	const benchmarkPerformance = ['Benchmark Performance', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%'];

	// Sample images for the Myfxbook results section
	const images = [
		'/images/myfxbook1.png', // Replace with your actual image paths
		'/images/myfxbook2.png',
		'/images/myfxbook3.png',
		'/images/myfxbook4.png',
	];

	return (
		<section className='relative'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='pt-32 pb-12 md:pt-40 md:pb-20'>
					<h1 className='text-4xl font-bold mb-4 text-center'>Gainify Track Record</h1>
					<p className='text-center text-lg max-w-prose mx-auto mb-8'>
						At Gainify, our track record speaks for itself. Over the past year, we have consistently delivered strong returns that outperform the market benchmarks. Below, you can find detailed performance charts and data tables showcasing our achievements.
					</p>

					{/* Periodical Chart Section */}
					<div className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Periodical Performance Comparison</h2>
						<Line data={periodChartData} />
					</div>

					{/* Periodical Table Section */}
					<div className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Performance Comparison by Period</h2>
						<div style={{ overflowX: 'auto' }}>
							<Table striped bordered hover responsive className='text-center' style={{ minWidth: '100%' }}>
								<thead>
									<tr>
										{periodTableHeaders.map((header, index) => (
											<th key={index}>{header}</th>
										))}
									</tr>
								</thead>
								<tbody>
									<tr>
										{periodGainifyPerformance.map((data, index) => (
											<td key={index}>{data}</td>
										))}
									</tr>
									<tr>
										{periodBenchmarkPerformance.map((data, index) => (
											<td key={index}>{data}</td>
										))}
									</tr>
								</tbody>
							</Table>
						</div>
					</div>

					{/* Monthly Chart Section */}
					<div className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Performance Over the Months</h2>
						<Line data={chartData} />
					</div>

					{/* Monthly Table Section */}
					<div className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Monthly Performance Comparison</h2>
						<div style={{ overflowX: 'auto' }}>
							<Table striped bordered hover responsive className='text-center' style={{ minWidth: '100%' }}>
								<thead>
									<tr>
										{tableHeaders.map((header, index) => (
											<th key={index}>{header}</th>
										))}
									</tr>
								</thead>
								<tbody>
									<tr>
										{gainifyPerformance.map((data, index) => (
											<td key={index}>{data}</td>
										))}
									</tr>
									<tr>
										{benchmarkPerformance.map((data, index) => (
											<td key={index}>{data}</td>
										))}
									</tr>
								</tbody>
							</Table>
						</div>
					</div>

					{/* Myfxbook Results Section */}
					<div className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Our Myfxbook Results</h2>
						<Carousel>
							{images.map((image, index) => (
								<Carousel.Item key={index}>
									<img
										className='d-block w-100'
										src={image}
										alt={`Myfxbook result ${index + 1}`}
									/>
								</Carousel.Item>
							))}
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
}
