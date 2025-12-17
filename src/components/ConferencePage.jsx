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
              href="https://docs.google.com/forms/YOUR_FORM_ID_HERE"
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
                <p><strong>Date:</strong> March 15-16, 2025</p>
                <p><strong>Check-in:</strong> 8:00 AM</p>
                <p><strong>Opening Ceremony:</strong> 9:00 AM</p>
                <p><strong>Committee Sessions:</strong> 10:00 AM - 5:00 PM</p>
                <p><strong>Closing Ceremony:</strong> 5:30 PM</p>
              </div>
            </div>
  
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-navy mb-4">Logistics</h2>
              <div className="text-navy space-y-3">
                <p><strong>Location:</strong> RCDS Campus</p>
                <p><strong>Registration Fee:</strong> $30 per delegate</p>
                <p><strong>Lunch:</strong> Provided</p>
                <p><strong>Dress Code:</strong> Western Business Attire</p>
                <p><strong>Parking:</strong> Available on campus</p>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-navy mb-4">Additional Information</h2>
            <p className="text-navy leading-relaxed mb-4">
              RCDSMUNC I will bring together delegates from across the region to engage in meaningful diplomatic discussions and negotiations. This conference offers an excellent opportunity for both novice and experienced delegates to develop their skills.
            </p>
            <p className="text-navy leading-relaxed">
              For questions or more information, please contact us at rcdsmun@example.com
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  export default ConferencePage