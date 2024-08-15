export default function Reviews() {
    return (
        <section className="bg-gray-900 py-16 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl font-semibold">
                        More than <span className="text-yellow-500 text-3xl font-bold">300+</span> users love their financial journey
                    </h1>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Review 1 */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-md text-center">
                        <p className="text-gray-300 mb-4">
                            “The goal setting feature has helped me stay focused on my long-term financial goals. Highly recommended!”
                        </p>
                        <div className="text-white font-semibold">John Anglik</div>
                        <div className="text-gray-400 text-sm">Fitness Trainer</div>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-md text-center">
                        <p className="text-gray-300 mb-4">
                            “The digital innovation in this app has truly transformed my financial experience. It's a must-have!”
                        </p>
                        <div className="text-white font-semibold">Sarah Kasin</div>
                        <div className="text-gray-400 text-sm">Financial Adviser</div>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-md text-center">
                        <p className="text-gray-300 mb-4">
                            “The user-friendly interface makes managing finances a breeze. Best financial app out there!”
                        </p>
                        <div className="text-white font-semibold">Jessica Pandaan</div>
                        <div className="text-gray-400 text-sm">Fund Manager</div>
                    </div>

                    {/* Review 4 */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-md text-center">
                        <p className="text-gray-300 mb-4">
                            “The debt management system is excellent. It’s helped me pay off my debts faster and regain control of my finances.”
                        </p>
                        <div className="text-white font-semibold">William Kacuk</div>
                        <div className="text-gray-400 text-sm">Luxury Car Sales</div>
                    </div>

                    {/* Review 5 */}
                    <div className="bg-gray-800 rounded-lg p-6 shadow-md text-center">
                        <p className="text-gray-300 mb-4">
                            “The investment tracker keeps me updated on my portfolio performance. It's like having a personal financial advisor!”
                        </p>
                        <div className="text-white font-semibold">Emily Sukun</div>
                        <div className="text-gray-400 text-sm">Digital Marketer</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
