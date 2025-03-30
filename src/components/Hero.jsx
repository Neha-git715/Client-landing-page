export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          The World's First Yogasana<br />Championship Software
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
          Experience the future of competition management with Yogasana World - a cutting-edge platform designed to streamline every aspect of your championships.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105 animate-fade-in-delay-2">
          Get Started Free
        </button>
        
        <div className="mt-16 relative animate-fade-in-delay-3">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            {/* Dashboard mockup */}
            <div className="flex gap-4 mb-6">
              <div className="w-1/4 bg-white h-screen rounded-lg shadow p-4">
                <div className="h-8 bg-gray-100 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                </div>
              </div>
              <div className="w-3/4 space-y-4">
                <div className="bg-white rounded-lg shadow p-4">
                  <div className="h-40 bg-indigo-50 rounded mb-4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/4"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-32 bg-indigo-50 rounded"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-4">
                    <div className="h-32 bg-indigo-50 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg flex items-center gap-4">
            <div className="flex -space-x-4">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm border-2 border-white">MT</div>
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm border-2 border-white">YP</div>
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm border-2 border-white">RS</div>
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Championship Excellence,</h3>
              <p className="text-gray-600">Proven by Numbers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}