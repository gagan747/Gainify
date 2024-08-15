export default function UserSatisfaction() {
	return (
		<section id="user-satisfaction" className="bg-gray-900 text-white py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				{/* User Satisfaction Section */}
				<div className="text-center mb-12">
					<h3 className="text-4xl font-bold mb-4">
						Most used financial app used by millions of happy users
					</h3>
				</div>

				{/* Top Row */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					<div className="flex justify-center">
						<div className="bg-gray-800 p-8 rounded-lg text-center w-full">
							<p className="text-4xl font-bold text-blue-500">1.5M+</p>
							<p className="mt-2">Downloads on App Store</p>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="bg-gray-800 p-8 rounded-lg text-center w-full">
							<p className="text-4xl font-bold text-blue-500">4.9</p>
							<p className="mt-2">Ratings out of 5</p>
						</div>
					</div>
				</div>

				{/* Bottom Row */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="flex justify-center">
						<div className="bg-gray-800 p-8 rounded-lg text-center w-full">
							<p className="text-2xl font-bold">150k+</p>
							<p className="mt-2">Active Customers</p>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="bg-gray-800 p-8 rounded-lg text-center w-full">
							<p className="text-2xl font-bold">5%+</p>
							<p className="mt-2">Spending reduction</p>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="bg-gray-800 p-8 rounded-lg text-center w-full">
							<p className="text-2xl font-bold">20%+</p>
							<p className="mt-2">Increase savings</p>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="bg-gray-800 p-8 rounded-lg text-center w-full">
							<p className="text-2xl font-bold">99k+</p>
							<p className="mt-2">Positive reviews</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
