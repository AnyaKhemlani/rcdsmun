import { useState, useEffect } from 'react'

function HomePage({ setCurrentPage }) {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedCommittee, setSelectedCommittee] = useState(null)
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  const topics = [
    "Zara Khemlani (Co-President)",
    "Kevin Neilinger (Co-President)",
    "Lillian Pereira (Vice President)",
    "Xavier Reilly (Co-Treasurer)",
    "Harold Eylward (Co-Treasurer)",
    "Alicia Levy (Social Media Manager)",
    "Helena Pierry (Website Manager)",
    "Olivia Pierry (Middle School Outreach Coordinator)"
  ]
  
  useEffect(() => {
    const currentTopic = topics[currentTopicIndex]
    const typingSpeed = isDeleting ? 50 : 100
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentTopic.length) {
          setDisplayedText(currentTopic.slice(0, displayedText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
        } else {
          // Finished deleting, move to next topic
          setIsDeleting(false)
          setCurrentTopicIndex((prev) => (prev + 1) % topics.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentTopicIndex])

  const committees = {
    "General Assembly": [
      { 
        name: "Economic and Financial Affairs Council (ECOFIN)", 
        chairs: "Stephen Pinder and Felipe Quintero Ochoa",
        topic: "Ethics of Artificial Intelligence in Business",
        banner: "/media/ECOFIN.jpeg",
        guide: "/media/background_guides/ECOFIN_background_guide.pdf"
      }
    ],
    "Specialized Committee": [
      { 
        name: "United Nations Entity for Gender Equality and the Empowerment of Women (UN Women)", 
        chairs: "Karter de la Fuente, Val He, and Ellora Shah",
        topic: "The Equal Pay Act",
        banner: "/media/UNWOMEN.jpeg",
        guide: "/media/background_guides/UNWomen_background_guide.pdf"
      }
    ],
    "Crisis Committee": [
      { 
        name: "House Un-American Activities Committee (HUAC)", 
        chairs: "Xavier Reilly and Alison Gipstein",
        topic: "The Cold War & McCarthyism",
        banner: "/media/HUAC.jpeg",
        guide: "/media/background_guides/HUAC_background_guide.pdf"
      }
    ]
  }

  const handleCommitteeClick = (committee) => {
    setSelectedCommittee(committee)
    setShowPopup(true)
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
        
        {/* Club Crest - moved up */}
        <div className="relative z-10 flex flex-col items-center -mt-20">
          <img 
            src="/media/DarkBlue.png" 
            alt="RCDS Model UN Crest" 
            className="w-48 h-48 md:w-72 md:h-72 object-contain drop-shadow-2xl"
          />
          
          {/* Typewriter Text */}
          <div className="mt-8 text-center px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-navy">
              Introducing: <span className="text-navy">{displayedText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 z-10 text-navy text-xl font-semibold animate-bounce">
          RCDSMUNC I Information Below
        </div>
      </div>

      {/* Letter from the Secretariat */}
      <section className="bg-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-navy mb-8 text-center">
            Letter from the Secretariat
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
              Our three committees cover a variety of topics, including the ethics of AI in business, the Equal Pay Act, and the Cold War. 
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
                      onClick={() => handleCommitteeClick(committee)}
                      className="w-full bg-blue-50 hover:bg-blue-100 rounded-lg overflow-hidden transition-all hover:shadow-lg text-left"
                    >
                      <img 
                        src={committee.banner} 
                        alt={`${committee.name} banner`}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-6">
                        <h4 className="text-navy font-bold text-lg mb-2">{committee.name}</h4>
                        <p className="text-navy mb-1">
                          <span className="font-semibold">Chairs:</span> {committee.chairs}
                        </p>
                        <p className="text-navy">
                          <span className="font-semibold">Topic:</span> {committee.topic}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal with PDF */}
      {showPopup && selectedCommittee && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => {
            setShowPopup(false)
            setSelectedCommittee(null)
          }}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-5xl h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-start flex-shrink-0">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  {selectedCommittee.name}
                </h3>
                <p className="text-navy">
                  <span className="font-semibold">Topic:</span> {selectedCommittee.topic}
                </p>
              </div>
              <button
                onClick={() => {
                  setShowPopup(false)
                  setSelectedCommittee(null)
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-grow overflow-hidden min-h-0">
              <iframe
                src={selectedCommittee.guide}
                className="w-full h-full"
                title="Background Guide"
              />
            </div>

            {/* Footer with Download Button */}
            <div className="p-6 border-t border-gray-200 flex justify-between items-center flex-shrink-0">
              <a
                href={selectedCommittee.guide}
                download
                className="bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Background Guide
              </a>
              <button
                onClick={() => {
                  setShowPopup(false)
                  setSelectedCommittee(null)
                }}
                className="text-gray-600 hover:text-gray-800 font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage