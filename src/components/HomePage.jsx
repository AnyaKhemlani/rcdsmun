function HomePage({ setCurrentPage }) {
    const committees = {
      "General Assembly": [
        { name: "Committee 1", logo: "/media/logo1.png", guide: "/media/guide1.pdf" },
        { name: "Committee 2", logo: "/media/logo2.png", guide: "/media/guide2.pdf" }
      ],
      "Special Assembly": [
        { name: "Committee 3", logo: "/media/logo3.png", guide: "/media/guide3.pdf" },
        { name: "Committee 4", logo: "/media/logo4.png", guide: "/media/guide4.pdf" }
      ],
      "Crisis": [
        { name: "Committee 5", logo: "/media/logo5.png", guide: "/media/guide5.pdf" },
        { name: "Committee 6", logo: "/media/logo6.png", guide: "/media/guide6.pdf" }
      ]
    }
  
    return (
      <div>
        {/* Full Screen Video/Logo Section */}
        <div className="relative h-[95vh] flex flex-col items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          >
            <source src="/media/RCDSbackground.mov" type="video/mp4" />
          </video>
  
          {/* White overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
  
          {/* Club Crest */}
          <div className="relative z-10 flex flex-col items-center">
            <img 
              src="/media/DarkBlue.png" 
              alt="RCDS Model UN Crest" 
              className="w-64 h-64 md:w-96 md:h-96 object-contain drop-shadow-2xl"
            />
          </div>
  
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 z-10 text-navy text-xl font-semibold animate-bounce">
            RCDSMUNC Information Below
          </div>
        </div>
  
        {/* Letter from Co-Presidents */}
        <section className="bg-blue-100 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">
              Letter from the Co-Presidents
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <p className="text-navy mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-navy mb-4 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-navy mb-4 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-navy leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>
        </section>
  
        {/* Committees Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">
              Committees
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {Object.entries(committees).map(([category, comms]) => (
                <div key={category}>
                  <h3 className="text-2xl font-bold text-navy mb-6 text-center">
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {comms.map((committee, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(`committee-${category.toLowerCase().replace(' ', '-')}-${idx + 1}`)}
                        className="w-full bg-blue-50 hover:bg-blue-100 rounded-lg p-6 transition-all hover:shadow-lg"
                      >
                        <img 
                          src={committee.logo} 
                          alt={committee.name}
                          className="w-full h-32 object-contain mb-3"
                        />
                        <p className="text-navy font-semibold">{committee.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default HomePage