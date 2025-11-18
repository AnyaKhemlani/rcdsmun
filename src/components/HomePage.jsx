function HomePage() {
    return (
      <div>
        {/* Hero Section with Video Background */}
        <div className="relative h-2/3 flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          >
            <source src="/media/RCDSbackground.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  
          {/* White overlay for extra dimming */}
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
  
          {/* Club Crest */}
          <div className="relative z-10 flex flex-col items-center">
            <img 
              src="/media/DarkBlue.png" 
              alt="RCDS Model UN Crest" 
              className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
  
        {/* Empty Section for Future Content */}
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Welcome to RCDS Model UN
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-12 min-h-96">
                {/* Add your content here */}
                <p className="text-gray-500 text-lg">
                  This section is ready for your content...
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default HomePage