'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend } from 'chart.js';
import { Table, Carousel } from 'react-bootstrap';

// Register necessary components for chart.js
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend);

export default function TrackRecord() {
	// Sample data for the chart
	const chartData = {
		labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
		datasets: [
			{
				label: 'Fund Performance (%)',
				data: [12, 15, 8, 18, 20, 22, 15, 19],
				fill: false,
				backgroundColor: 'rgba(75,192,192,0.4)',
				borderColor: 'rgba(75,192,192,1)',
				borderWidth: 2,
				tension: 0.4,
			},
		],
	};

	// Sample data for the table
	const tableData = [
		{ year: 2016, gainify: '12%', benchmark: '10%' },
		{ year: 2017, gainify: '15%', benchmark: '11%' },
		{ year: 2018, gainify: '8%', benchmark: '7%' },
		{ year: 2019, gainify: '18%', benchmark: '12%' },
		{ year: 2020, gainify: '20%', benchmark: '14%' },
		{ year: 2021, gainify: '22%', benchmark: '15%' },
		{ year: 2022, gainify: '15%', benchmark: '13%' },
		{ year: 2023, gainify: '19%', benchmark: '14%' },
	];

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
						At Gainify, our track record speaks for itself. Over the past eight years, we have consistently delivered strong returns that outperform the market benchmarks. Below, you can find detailed performance charts and data tables showcasing our achievements.
					</p>

					{/* Chart Section */}
					<div className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Performance Over the Years</h2>
						<Line data={chartData} />
					</div>

					{/* Table Section */}
					<div className='mb-12'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Annual Performance Comparison</h2>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Year</th>
									<th>Gainify Performance</th>
									<th>Benchmark Performance</th>
								</tr>
							</thead>
							<tbody>
								{tableData.map((row, index) => (
									<tr key={index}>
										<td>{row.year}</td>
										<td>{row.gainify}</td>
										<td>{row.benchmark}</td>
									</tr>
								))}
							</tbody>
						</Table>
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
