function Footer({ setCurrentPage }) {
    return (
      <footer className="bg-navy text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-3">Contact Us</h3>
              <p className="mb-2">
                <a href="mailto:rcdsmun@example.com" className="hover:underline">
                  rcdsmun@example.com
                </a>
              </p>
              <p>Phone: (555) 123-4567</p>
            </div>
  
            {/* Registration Link */}
            <div>
              <h3 className="text-xl font-bold mb-3">Join RCDSMUNC I</h3>
              <button 
                onClick={() => setCurrentPage('registration')}
                className="bg-white text-navy px-6 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
              >
                Register Now
              </button>
            </div>
  
            {/* Meeting Information */}
            <div>
              <h3 className="text-xl font-bold mb-3">Meetings</h3>
              <p className="mb-1"><strong>When:</strong> Wednesdays, 3:30 PM</p>
              <p className="mb-1"><strong>Where:</strong> Room 204</p>
              <p><strong>Next Meeting:</strong> January 15, 2025</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; 2024 RCDSMUN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer