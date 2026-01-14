import { useState } from 'react'

function HomePage({ setCurrentPage }) {
  const [showPopup, setShowPopup] = useState(false)

  const committees = {
    "General Assembly": [
      { 
        name: "Economic and Financial Affairs Council (ECOFIN)", 
        chairs: "Stephen Pinder and Felipe Quintero Ochoa",
        topic: "Ethics of Artificial Intelligence in Business"
      },
      { 
        name: "Social, Humanitarian, and Cultural Committee (SOCHUM)", 
        chairs: "Jenny Xu and Bennett Klurfeld",
        topic: "Counterterrorism in Central America"
      }
    ],
    "Specialized Committees": [
      { 
        name: "United Nations Environment Programme (UNEP)", 
        chairs: "Ellora Shah and Chase Tucker",
        topic: "Coral Bleaching in the Great Barrier Reef"
      },
      { 
        name: "United Nations Entity for Gender Equality and the Empowerment of Women (UN Women)", 
        chairs: "Karter de la Fuente and Val He",
        topic: "The Equal Pay Act"
      }
    ],
    "Crisis Committees": [
      { 
        name: "Association of Southeast Asian Nations + (ASEAN+)", 
        chairs: "Emma Hepworth and Grant Dinger",
        topic: "Escalation in the South China Sea"
      },
      { 
        name: "House Un-American Activities Committee (HUAC)", 
        chairs: "Xavier Reilly and Alison Gipstein",
        topic: "The Cold War & McCarthyism"
      }
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
              Dear Delegates and Faculty Advisors, 
            </p>
            <p className="text-navy mb-4 leading-relaxed">
              We are honored and excited to invite you to the inaugural Rye Country Day School Model United Nations Conference (RCDSMUNC I), which will take place on Saturday, April 18th, 2026. RCDS is thrilled to have such an incredible group of students on campus, working together to find solutions to real world issues. 
            </p>
            <p className="text-navy mb-4 leading-relaxed">
              The Secretariat, along with our faculty advisor, Mr. Murray, have been working diligently over the past year to coordinate our first conference. Our goal for RCDSMUNC I is to inspire delegates to collaborate while developing their knowledge on impactful global problems. 
            </p>
            <p className="text-navy mb-4 leading-relaxed">
              Our six committees cover a variety of topics, including the ethics of AI in business, counterterrorism in Central America, coral bleaching in the Great Barrier Reef, the Equal Pay Act, escalation in the South China Sea, and the Cold War. 
            </p>
            <p className="text-navy mb-4 leading-relaxed">
              Registration is now open, and each school is welcome to bring up to thirty delegates, so please reserve your students' spots here. We encourage you all to reach out to your chairs with any questions or concerns, and we wish everyone an amazing conference. Good luck!
            </p>
            <p className="text-navy leading-relaxed">
              Best,
            </p>
            <p className="text-navy leading-relaxed">
              Zara Khemlani & Kevin Neilinger 
            </p>
            <p className="text-navy leading-relaxed">
              Secretaries-General of RCDSMUNC I
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
                      onClick={() => setShowPopup(true)}
                      className="w-full bg-blue-50 hover:bg-blue-100 rounded-lg p-6 transition-all hover:shadow-lg text-left"
                    >
                      <h4 className="text-navy font-bold text-lg mb-2">{committee.name}</h4>
                      <p className="text-navy mb-1">
                        <span className="font-semibold">Chairs:</span> {committee.chairs}
                      </p>
                      <p className="text-navy">
                        <span className="font-semibold">Topic:</span> {committee.topic}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          onClick={() => setShowPopup(false)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-navy mb-4 text-center">
              Coming Soon!
            </h3>
            <p className="text-navy text-center mb-6">
              Check back on March 1st for a more detailed description!
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage