import { useState } from 'react'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ConferencePage from './components/ConferencePage'
// import RegistrationPage from './components/RegistrationPage'
import CommitteePage from './components/CommitteePage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    if (currentPage === 'home') return <HomePage setCurrentPage={setCurrentPage} />
    if (currentPage === 'about') return <AboutPage />
    if (currentPage === 'conference') return <ConferencePage />
    if (currentPage === 'registration') return <RegistrationPage />
    if (currentPage.startsWith('committee-')) return <CommitteePage committeeId={currentPage} />
    
    return <HomePage setCurrentPage={setCurrentPage} />
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Page Content */}
      <div className="pt-16 flex-grow">
        {renderPage()}
      </div>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App