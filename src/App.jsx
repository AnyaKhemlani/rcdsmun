import { useState } from 'react'
import Navbar from './components/NavBar'
import HomePage from './components/HomePage'
import TeamsPage from './components/TeamsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

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