export default function Exceptional() {
    return (
        <section className="bg-white py-16 relative overflow-visible"> {/* Added overflow-visible */}
            
            {/* Blue Shade Image */}
            <div
                className="absolute bottom-0 right-0 w-1/2 h-full"
                style={{
                    backgroundImage: 'url("/images/blue-shade.png")',
                    backgroundSize: '200px',
                    backgroundPosition: 'bottom left',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(100px)',
                    transform: 'translate(-500px, -100px)'  // Shifted to the left and upwards
                }}
            ></div>

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
                <div 
                    className="bg-black text-white rounded-3xl shadow-lg p-8 flex items-center" 
                    style={{ height: '400px' }}
                >
                    
                    {/* Card Image */}
                    <div className="flex-shrink-0">
                        <img
                            src="/images/curve-post.png"
                            alt="Financial Card"
                            className="rounded-2xl h-full"
                        />
                    </div>

                    {/* Card Content */}
                    <div className="ml-36 flex-1">
                        <h2 className="text-3xl font-semibold mb-0">
                            Redefine Your 
                        </h2>
                        <h2 className="text-3xl font-semibold mb-0">
                            Trading Experience 
                        </h2>
                        <h2 className="text-3xl font-semibold mb-4">
                            with Gainify
                        </h2>
                        <p className="text-gray-400 mb-0">
                            Highest Returns in the industry, Financial freedom,
                        </p>
                        <p className="text-gray-400 mb-6">
                            professional management, and seamless transactions.
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
