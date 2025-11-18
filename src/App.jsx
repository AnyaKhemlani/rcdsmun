import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Model UN Club</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
              <a href="#events" className="text-gray-700 hover:text-indigo-600 transition">Events</a>
              <a href="#join" className="text-gray-700 hover:text-indigo-600 transition">Join Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Model UN
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us in debating global issues, developing diplomatic skills, and making a difference.
          </p>
          <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition">
            Get Involved
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-indigo-600 text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
            <p className="text-gray-600">
              Explore international relations and understand diverse viewpoints from around the world.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-indigo-600 text-4xl mb-4">🎤</div>
            <h3 className="text-xl font-semibold mb-2">Public Speaking</h3>
            <p className="text-gray-600">
              Develop confidence and eloquence through debates and diplomatic negotiations.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="text-indigo-600 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Build Connections</h3>
            <p className="text-gray-600">
              Network with like-minded students and participate in conferences worldwide.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Model UN Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App