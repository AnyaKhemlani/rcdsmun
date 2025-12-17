function AboutPage() {
    const team = [
      {
        name: "Co-President 1",
        role: "Co-President",
        email: "coprez1@example.com",
        image: "https://via.placeholder.com/300",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Passionate about international relations and debate."
      },
      {
        name: "Kevin Neilinger",
        role: "Co-President",
        email: "kevin_neilinger@ryecountryday.org",
        image: "/media/president_kevin.png",
        bio: "I’m Kevin Neilinger, and I am really excited to be your Secretary-General. I have been doing MUN since eighth grade, and the club has been the highlight of my high school experience so far. When I’m not doing in MUN, I enjoy swimming and hanging out with my friends and family. My favorite thing about MUN is making new friends, and I hope that you can connect with many new people at RCDS MHNC! If you have any questions about RCDSMUNC or anything related, please feel free to email me."
      },
      {
        name: "Lillian Pereira",
        role: "Vice President",
        email: "lillian_pereira@ryecountryday.org",
        image: "/media/vice_lillian.png",
        bio: "Ut enim ad minim veniam, quis nostrud exercitation. Committed to fostering debate skills and global awareness."
      },
      {
        name: "Daniel Murray",
        role: "Faculty Advisor",
        email: "daniel_murray@ryecountryday.org",
        image: "/media/advisor_murray.png",
        bio: "Duis aute irure dolor in reprehenderit in voluptate. Supporting students in their Model UN journey for over ___ years."
      }
    ]
  
    const stats = [
      { number: "4", label: "Conferences" },
      { number: "103", label: "Members" },
      { number: "2", label: "Major Awards Won" }
    ]
  
    return (
      <div className="bg-blue-50 min-h-screen py-12">
        {/* Meet the Team Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h1 className="text-5xl font-bold text-navy mb-4 text-center">About Us</h1>
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Meet the Team</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-2xl font-bold text-navy mb-1">{member.name}</h3>
                    <p className="text-navy font-semibold mb-3">{member.role}</p>
                    <p className="text-navy mb-4 leading-relaxed">{member.bio}</p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center text-navy hover:underline font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Big Numbers Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">By the Numbers</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-navy mb-4">
                    {stat.number}
                  </div>
                  <div className="text-xl text-navy font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default AboutPage