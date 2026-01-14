function ConferencePage() {
    return (
      <div className="bg-blue-50 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-navy mb-8 text-center">RCDSMUNC I</h1>
          
          {/* Registration CTA */}
          <div className="bg-navy text-white rounded-xl shadow-lg p-8 mb-12 text-center">
            <p className="text-lg mb-6">
              Join us for an exciting Model UN conference experience!
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzljSLalN-P1wMapzJXvlhlSpNnKOP3V2mqF1p9VdVB0wd6g/viewform "
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-navy px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100 transition"
            >
              Register Here
            </a>
          </div>
  
          {/* Conference Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-navy mb-4">Schedule</h2>
              <div className="text-navy space-y-3">
                <p><strong>Registration:</strong> 8:00am - 8:45am</p>
                <p><strong>Opening Ceremonies:</strong> 9:00am - 9:45am</p>
                <p><strong>Committee Session I:</strong> 10:00am - 12:00pm</p>
                <p><strong>Lunch (staggered):</strong> 12:00pm - 2:00pm</p>
                <p><strong>Committee Session II:</strong> 2:00pm - 4:00pm</p>
                <p><strong>Committee Session III:</strong> 4:00pm - 5:00pm</p>
                <p><strong>Closing Ceremonies:</strong> 5:15pm - 5:45pm</p>
              </div>
            </div>
            
  
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-navy mb-4">Logistics</h2>
              <div className="text-navy space-y-3">
                <p><strong>Date:</strong> March 15-16, 2025</p>
                <p><strong>Location:</strong> 3 Cedar St; Rye, NY 10580</p>
                <p><strong>Registration Fee:</strong> $40 per delegate</p>
                <p><strong>Lunch:</strong> Provided</p>
                <p><strong>Dress Code:</strong> Business Attire</p>
                <p><strong>Parking:</strong> Available on campus</p>
                
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-navy mb-4">Additional Information</h2>
            <p className="text-navy leading-relaxed mb-4">
              RCDSMUNC I will bring together delegates from across the region to engage in meaningful diplomatic discussions and negotiations. This conference offers an excellent opportunity for both novice and experienced delegates to develop their skills.
            </p>
            <p className="text-navy leading-relaxed mb-4">
            <strong>Position Papers: </strong>Position papers are required to be eligible for an award at RCDSMUNC I. Please limit your paper to no more than two pages including a bibliography (Times New Roman size 12, 1.5 spacing). Position papers are due on Sunday, April 12, 2026 at 11:59pm. Please email your position paper to both of the chairs of your committee as a PDF. As a reminder, AI use is strictly prohibited in all writings.
            </p>
            <p className="text-navy leading-relaxed mb-4"><strong>AI Use Policy:</strong> Please note that there is a zero tolerance policy for Artificial Intelligence use at RCDSMUNC I for any written work, including but not limited to position papers, working documents, and resolutions. If a student’s work is flagged for AI use or plagiarism, the student will be immediately disqualified from earning a delegation award, and their faculty advisor will be notified. </p>
            
            <p className="text-navy leading-relaxed">
              For questions or more information, please contact us at rcdsmun@gmail.com
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default ConferencePage