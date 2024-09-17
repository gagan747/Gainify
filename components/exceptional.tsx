export default function Exceptional() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                
                {/* "Exceptional Features" Button */}
                <div className="text-center mb-8">
                    <button className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full">
                        Exceptional Features
                    </button>
                </div>
                
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">
                        What makes us exceptional
                    </h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Explore what makes us exceptional in the finance industry. Experience innovative solutions, personalized services, and seamless transactions.
                    </p>
                </div>

                {/* Feature Card */}
                <div className="bg-black text-white rounded-lg shadow-md p-8 flex items-center" style={{ height: '350px' }}>
                    
                    {/* Card Image */}
                    <div className="flex-shrink-0">
                        <img
                            src="/path/to/card-image.png"
                            alt="Financial Card"
                            className="rounded-lg h-full"
                        />
                    </div>

                    {/* Card Content */}
                    <div className="ml-6 flex-1">
                        <h2 className="text-2xl font-semibold mb-4">
                            Redefine Your Trading Experience with Gainify
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Highest Returns in the industry, Financial freedom, Professionol management, and seamless transactions.
                        </p>
                        <a 
                            href="#" 
                            className="inline-block text-sm bg-white text-black rounded-full py-2 px-4"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
