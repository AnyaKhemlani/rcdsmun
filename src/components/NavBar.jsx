import { useState } from 'react'

function Navbar({ currentPage, setCurrentPage }) {
  const [showConferenceDropdown, setShowConferenceDropdown] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-3">
              <img 
                src="/media/DarkBlue.png" 
                alt="RCDSMUN Logo" 
                className="h-10 w-10 object-contain"
              />
              <h1 className="text-2xl font-bold text-navy">RCDSMUN</h1>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setShowConferenceDropdown(true)}
              onMouseLeave={() => setShowConferenceDropdown(false)}
            >
              <button 
                className={`${currentPage === 'conference' || currentPage === 'registration' ? 'text-navy' : 'text-gray-700'} hover:text-navy transition`}
              >
                Conference
              </button>
              {showConferenceDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
                  <button 
                    onClick={() => setCurrentPage('registration')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy"
                  >
                    Registration
                  </button>
                </div>
              )}
            </div>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`${currentPage === 'about' ? 'text-navy' : 'text-gray-700'} hover:text-navy transition`}
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar