function TeamsPage() {
    // Sample team data - you can replace this with your actual team members
    const teamData = {
      "Executive Board": [
        {
          name: "Jane Doe",
          role: "President",
          email: "jane.doe@example.com",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "John Smith",
          role: "Vice President",
          email: "john.smith@example.com",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Emily Johnson",
          role: "Secretary General",
          email: "emily.johnson@example.com",
          image: "https://via.placeholder.com/150"
        }
      ],
      "Committee Chairs": [
        {
          name: "Michael Brown",
          role: "UNHRC Chair",
          email: "michael.brown@example.com",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Sarah Davis",
          role: "UNSC Chair",
          email: "sarah.davis@example.com",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "David Wilson",
          role: "ECOSOC Chair",
          email: "david.wilson@example.com",
          image: "https://via.placeholder.com/150"
        }
      ],
      "Operations Team": [
        {
          name: "Lisa Anderson",
          role: "Events Coordinator",
          email: "lisa.anderson@example.com",
          image: "https://via.placeholder.com/150"
        },
        {
          name: "Tom Martinez",
          role: "Outreach Director",
          email: "tom.martinez@example.com",
          image: "https://via.placeholder.com/150"
        }
      ]
    }
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who make RCDS Model UN possible
            </p>
          </div>
  
          {/* Team Sections */}
          {Object.entries(teamData).map(([category, members]) => (
            <div key={category} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                {category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    {/* Member Image */}
                    <div className="h-48 bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full border-4 border-white object-cover"
                      />
                    </div>
                    
                    {/* Member Info */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-indigo-600 font-semibold mb-4">
                        {member.role}
                      </p>
                      
                      {/* Contact Button */}
                      <a 
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center justify-center w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                      >
                        <svg 
                          className="w-5 h-5 mr-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                          />
                        </svg>
                        Contact
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default TeamsPage