function Navbar({ currentPage, setCurrentPage }) {
    return (
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-navy">RCDS Model UN</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`${currentPage === 'home' ? 'text-navy' : 'text-gray-700'} hover:text-navy transition`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('teams')}
                className={`${currentPage === 'teams' ? 'text-navy' : 'text-gray-700'} hover:text-navy transition`}
              >
                Our Team
              </button>
              <button 
                onClick={() => setCurrentPage('events')}
                className={`${currentPage === 'events' ? 'text-navy' : 'text-gray-700'} hover:text-navy transition`}
              >
                Events
              </button>
              <button 
                onClick={() => setCurrentPage('join')}
                className={`${currentPage === 'join' ? 'text-navy' : 'text-gray-700'} hover:text-navy transition`}
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar