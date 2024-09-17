export default function Blogs() {
    return (
      <section className="bg-[#080c14] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* "From Our Blog" Button */}
          <div className="text-center mb-8">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-full">
              From Our Blog
            </button>
          </div>
  
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white">
              Our latest insights & updates
            </h1>
          </div>
  
          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden bg-gray-800">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/blog-01.png")' }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  A Guide to Mastering Investment Tracking
                </h3>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-800">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/blog-02.png")' }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  Start Planning for Retirement Today
                </h3>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-800">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/blog-03.png")' }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  Regain Control with Debt Management
                </h3>
              </div>
            </div>
          </div>
  
          {/* More Updates Button */}
          <div className="text-center mt-12">
            <a
              href="/blogs"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-full"
            >
              More Updates <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
  