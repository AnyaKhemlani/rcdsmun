function CommitteePage({ committeeId }) {
    // Mock data - you'll replace this with actual committee info
    const committeeData = {
      name: "Committee Name",
      type: "General Assembly",
      chairs: [
        { name: "Chair 1", image: "https://via.placeholder.com/200", email: "chair1@example.com" },
        { name: "Chair 2", image: "https://via.placeholder.com/200", email: "chair2@example.com" }
      ],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. This committee will focus on important global issues and diplomatic solutions.",
      guideUrl: "/media/guide1.pdf"
    }
  
    return (
      <div className="bg-blue-50 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-navy mb-4 text-center">{committeeData.name}</h1>
          <p className="text-xl text-navy text-center mb-12">{committeeData.type}</p>
  
          {/* Committee Description */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">About This Committee</h2>
            <p className="text-navy leading-relaxed">{committeeData.description}</p>
          </div>
  
          {/* Chairs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Meet Your Chairs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {committeeData.chairs.map((chair, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={chair.image} 
                    alt={chair.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-navy mb-2">{chair.name}</h3>
                    <a 
                      href={`mailto:${chair.email}`}
                      className="text-navy hover:underline"
                    >
                      {chair.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Background Guide */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">Background Guide</h2>
            <p className="text-navy mb-6">Download the background guide to prepare for committee sessions.</p>
            <a 
              href={committeeData.guideUrl}
              download
              className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  export default CommitteePage