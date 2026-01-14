function AboutPage() {
  const team = [
    {
      name: "Zara Khemlani",
      role: "Co-President",
      email: "zara_khemlani@ryecountryday.org",
      image: "/media/zara!.png",
      awards: "Verbal Commendation Awarded for role of Guatemala in HoMMUNC’s SOCHUM Committee (2025)",
      bio: "Hi! I'm Zara Khemlani, and I am thrilled to be one of your Secretary-Generals for RCDSMUNC I. I joined Rye Country Day School's Model UN program in 7th grade, where my love for political science started. I have really enjoyed continuing this passion through high school, and being able to share my love of MUN beyond the RCDS community is very exciting. Outside of this program, I spend my time diving, writing for the school's newspaper, and competing on the robotics team, as well as spending time with friends and family. We are all looking forward to hosting our very first conference, and we hope you all have an amazing time. Please don't hesitate to reach out to me with any questions. Good luck!"
    },
    {
      name: "Kevin Neilinger",
      role: "Co-President",
      email: "kevin_neilinger@ryecountryday.org",
      image: "/media/president_kevin.png",
      awards: "Verbal Commendation Awarded for role of Guatemala in HoMMUNC’s SOCHUM Committee (2025)",
      bio: "Hi! I’m Kevin Neilinger and I am really excited to be your Secretary-General. I have been doing MUN since eighth grade, and the club has been the highlight of my high school experience so far. When I’m not doing in MUN, I enjoy swimming and hanging out with my friends and family. My favorite thing about MUN is making new friends, and I hope that you can connect with many new people at RCDS MHNC! Thank you so much. If you have any questions about RCDSMUNC or anything related, please feel free to email me. See you in December!"
    },
    {
      name: "Lillian Pereira",
      role: "Vice President",
      email: "lillian_pereira@ryecountryday.org",
      image: "/media/lillian.png",
      awards: "Verbal Commendation Awarded for role of The Bahamas in HoMMUNC’s ECOFIN Committee (2025)",
      bio: "Hi! I'm Lillian Pereira, and I'll be Rye Country Day's first General Director for our very first Model UN Conference! I have been a part of RCDS's Model UN program since 8th grade, and have been wishing to host our very own conference for just as long! I can't wait for all of you to arrive on conference day, and I know each and every one of you will do an amazing job! Email me if you have any questions, and good luck!"
    }
  ]

  const stats = [
    { number: "4", label: "Conferences" },
    { number: "103", label: "Members" },
    { number: "3", label: "Major Awards Won in 2025" }
  ]

  return (
    <div className="bg-blue-50 min-h-screen py-12">
      {/* Meet the Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h1 className="text-5xl font-bold text-navy mb-4 text-center">About Us</h1>
        <h2 className="text-3xl font-bold text-navy mb-12 text-center">Meet the Team</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col h-full">
              {/* Square Image */}
              <div className="w-full aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-navy font-semibold mb-3">{member.role}</p>
                <p className="text-navy mb-4 leading-relaxed flex-grow">{member.bio}</p>
                
                {/* Awards */}
                <div className="mb-3 flex items-start text-navy">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-sm">{member.awards}</span>
                </div>

                {/* Email */}
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-navy hover:underline font-semibold mt-auto"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {member.email}
                </a>
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