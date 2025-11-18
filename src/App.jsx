import { useState } from 'react'
import HomePage from './components/HomePage'
import TeamsPage from './components/TeamsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">RCDS Model UN</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`${currentPage === 'home' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('teams')}
                className={`${currentPage === 'teams' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition`}
              >
                Our Team
              </button>
              <button 
                onClick={() => setCurrentPage('events')}
                className={`${currentPage === 'events' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition`}
              >
                Events
              </button>
              <button 
                onClick={() => setCurrentPage('join')}
                className={`${currentPage === 'join' ? 'text-indigo-600' : 'text-gray-700'} hover:text-indigo-600 transition`}
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'teams' && <TeamsPage />}
        {currentPage === 'events' && <div className="p-8">Events page coming soon...</div>}
        {currentPage === 'join' && <div className="p-8">Join page coming soon...</div>}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 RCDS Model UN Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App