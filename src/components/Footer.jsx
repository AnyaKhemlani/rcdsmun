function Footer({ setCurrentPage }) {
    return (
      <footer className="bg-navy text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="grid md:grid-cols-3 gap-8 text-center md:text-left"> */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="mb-2">
                <a href="mailto:rcdsmun@example.com" className="hover:underline">
                  rcdsmun@gmail.com
                </a>
              </p>
              <p>Phone: (123) 456-789</p>
            </div>
            <div>
              <a 
                href="https://docs.google.com/forms/YOUR_FORM_ID_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-navy px-6 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
              >
                Register for RCDSMUNC I
              </a>
            </div>
            <div>
              <p className="mb-1"><strong>When:</strong> Tuesdays and Fridays, 10:50 AM</p>
              <p className="mb-1"><strong>Where:</strong> Pinkham Building - Memorial Hall</p>
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