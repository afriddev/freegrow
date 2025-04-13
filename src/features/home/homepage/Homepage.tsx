function Homepage() {
  return (
    <div className="flex flex-col gap-12 p-6 md:p-12 max-w-7xl mx-auto">
      {/* Banner 1 - Trusted Globally */}
      <div>
        <div className="flex flex-col md:flex-row items-center bg-[#0b0d39] text-white rounded-xl overflow-hidden">
          <div className="md:w-1/2 p-8">
            <p className="text-3xl mb-2">Grow your business</p>
            <h2 className="text-4xl md:text-7xl font-semibold mb-4 leading-snug">
              Trusted globally by over 1 million businesses, small to large
            </h2>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded mt-4">
              Start now for free
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/home/work.jpg"
              alt="Business woman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-10 border-t pt-6 flex flex-wrap justify-center items-center gap-6 text-2xl text-gray-600 font-semibold">
          <span>BBC</span>
          <span>BUSINESS INSIDER</span>
          <span>CNBC</span>
          <span>FT</span>
          <span>Forbes</span>
          <span>The INDEPENDENT</span>
        </div>
      </div>

      {/* Banner 2 - Find Great Work */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-md ">
        <div className="md:w-1/2">
          <img
            src="/home/small.jpg"
            alt="Freelancer woman"
            className="w-full h-full object-fill "
          />
        </div>
        <div className="md:w-1/2 bg-blue-600 text-white p-8 flex flex-col">
          <div className=" p-4">
            <div className="mb-7">
              <p className="text-lg mb-2">For talent</p>
              <h2 className="text-6xl font-semibold mb-4">Find great work</h2>
              <p className="mb-6 text-white/90 text-2xl">
                Meet clients you’re excited to work with and take your career or
                business to new heights.
              </p>
            </div>
            <hr className="border-white/30 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90 text-2xl">
              <div>
                <p>
                  Find opportunities for every stage of your freelance career
                </p>
                <p className="mt-2">Explore different ways to earn</p>
              </div>
              <div>
                <p>Control when, where, and how you work</p>
              </div>
            </div>
          </div>
          <button className="mt-8 bg-white text-blue-600 font-medium px-5 py-3 rounded-md hover:bg-gray-100 transition">
            Find opportunities
          </button>
        </div>
      </div>

      {/* Banner 3 - For Clients */}
      <div className="relative rounded-xl overflow-hidden h-[700px] ">
        <img
          src="/home/find.jpg"
          alt="Client working"
          className="w-full h-full object-cover max-h-[700px]"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-10 text-white">
          <div className="max-w-2xl hidden sm:block">
            <p className="text-6xl mb-2">For clients</p>
            <div className="mt-24">
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4">
                Find talent your way
              </h2>
              <p className="text-2xl mb-8">
                Work with the largest network of independent professionals and
                get things done—from quick turnarounds to big transformations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full  p-6 sm:p-10 md:p-16 mt-auto">
            <div className="bg-green-600 hover:bg-green-700 md:p-6  p-3 rounded-lg transition text-white ">
              <h3 className="text-4xl font-semibold mb-2">
                Post a job and hire a pro
              </h3>
              <p className="text-lg flex items-center justify-between p-8">
                Talent Marketplace<span>→</span>
              </p>
            </div>
            <div className="bg-green-600 hover:bg-green-700 p-6 rounded-lg transition text-white">
              <h3 className="text-4xl font-semibold mb-2">
                Browse and buy projects
              </h3>
              <p className="text-lg flex items-center justify-between pt-8">
                Project Catalog <span>→</span>
              </p>
            </div>
            <div className="bg-green-600 hover:bg-green-700 p-6 rounded-lg transition text-white">
              <h3 className="text-4xl font-semibold mb-2">
                Get advice from an industry expert
              </h3>
              <p className="text-lg flex items-center justify-between">
                Consultations <span>→</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
