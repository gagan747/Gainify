'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend } from 'chart.js';
import { Table, Carousel } from 'react-bootstrap';

// Register necessary components for chart.js
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend);

export default function TrackRecord() {
	const periodChartData = {
		labels: ['Monthly', '2 Months', '3 Months', '6 Months', 'Yearly'],
		datasets: [
			{
				label: 'Fund Performance (%)',
				data: [8, 16.64, 25.97, 58.69],  // Example data
				fill: false,
				backgroundColor: 'rgba(54, 162, 235, 0.4)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 2,
				tension: 0.4,
			},
			{
				label: 'Benchmark Performance (%)',
				data: [5, 10.25, 15.76, 34.01, 79.59],  // Example data
				fill: false,
				backgroundColor: 'rgba(255, 206, 86, 0.4)',
				borderColor: 'rgba(255, 206, 86, 1)',
				borderWidth: 2,
				tension: 0.4,
			},
		],
	};

	const chartData = {
		labels: [
			'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
			'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
		],
		datasets: [
			{
				label: 'Fund Performance (%)',
				data: [5, 6, 8, 7, 5, 10, 10, 12],
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

	const periodTableHeaders = ['Period', 'Monthly', '2 Months', '3 Months', '6 Months', 'Yearly'];
	const periodGainifyPerformance = ['Gainify Performance', '8%', '16.64%', '25.97%', '58.69%', '_'];
	const periodBenchmarkPerformance = ['Benchmark Performance', '5%', '10.25%', '15.76%', '34.01%', '79.59%'];

	const tableHeaders = ['Month', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const gainifyPerformance = ['Gainify Performance', '5%', '6%', '8%', '7%', '5%', '10%', '10%', '12%', '_', '_', '_', '_'];
	const benchmarkPerformance = ['Benchmark Performance', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%', '5%'];

	const images = [
		'/images/myfxbook1.png',
		'/images/myfxbook2.png',
		'/images/myfxbook3.png',
		'/images/myfxbook4.png',
	];
	const scrollerImages = [
		'/images/scroller1.png',
		'/images/scroller2.png',
		'/images/scroller3.png',
		'/images/scroller4.png',
	];

	return (
		<section className='relative w-full'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 w-full'>
				<div className='pt-32 pb-12 md:pt-40 md:pb-20 w-full'>
					<h1 className='text-4xl font-bold mb-4 text-center'>Gainify Track Record</h1>
					<p className='text-center text-lg max-w-prose mx-auto mb-8'>
						Our results speak volumes. Over the past year, Gainify has consistently outpaced our own benchmarks, delivering impressive returns. Explore the detailed performance charts and data tables below to see our success in action.
					</p>

					<div className='mb-12 w-full'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Periodical Performance Comparison 2024</h2>
						<div className='w-full'>
							<Line data={periodChartData} />
						</div>
					</div>

					<div className='mb-12 w-full'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Performance Comparison by Period 2024</h2>
						<div style={{ overflowX: 'auto' }} className='w-full'>
							<Table striped bordered hover responsive className='text-center w-full'>
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

					<div className='mb-12 w-full'>
						<p className='text-lg max-w-prose mx-auto mb-8'>
							In our periodical performance analysis, it's evident that we have significantly outperformed our benchmark. Not only have we consistently exceeded the benchmark's returns, but we've also delivered substantial gains for our clients. Our ability to surpass these industry standards reflects the strength of our investment strategies and our commitment to maximizing returns. By staying ahead of the curve and continually optimizing our approach, we provide our clients with the confidence that their investments are in capable hands, yielding impressive results over both short and long-term periods.
						</p>
					</div>

					<div className='mb-12 w-full'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Performance Over the Months</h2>
						<div className='w-full'>
							<Line data={chartData} />
						</div>
					</div>

					<div className='mb-12 w-full'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Monthly Performance Comparison</h2>
						<div style={{ overflowX: 'auto' }} className='w-full'>
							<Table striped bordered hover responsive className='text-center w-full'>
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

					<div className='mb-12 w-full'>
						<p className='text-lg max-w-prose mx-auto mb-8'>
							In our monthly performance analysis, we consistently demonstrate that we are surpassing the benchmarks we’ve committed to achieving for our investors. Regardless of market conditions, we are not only meeting our goals but also closing each month with good profits. Our unwavering dedication ensures that we consistently deliver positive returns, striving to maximize gains for our investors even in challenging market environments.
						</p>
					</div>

					<div className='mb-12 w-full'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Profits Snapshots</h2>
						<div className='d-flex overflow-x-scroll w-full'>
							{scrollerImages.map((image, index) => (
								<div key={index} className='mr-4'>
									<img src={image} alt={`Scroller Image ${index + 1}`} className='rounded shadow-lg' />
								</div>
							))}
						</div>
					</div>

					<div className='mb-12 w-full'>
						<h2 className='text-2xl font-semibold mb-4 text-center'>Our Myfxbook Results</h2>
						<Carousel>
							{images.map((image, index) => (
								<Carousel.Item key={index}>
									<img
										className='d-block w-full'
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
