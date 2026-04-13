function ConferencePage() {
  return (
    <div className="bg-blue-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-navy mb-8 text-center">RCDSMUNC I</h1>
        
        {/* Registration CTA */}
        <div className="bg-navy text-white rounded-xl shadow-lg p-8 mb-12 text-center">
          <p className="text-lg mb-6">
            Join us for an exciting Model UN conference experience!
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdsZUp2lZ0ptuqnbZn-waabMwKgbVktEaUgwppxnl5Spf6xyA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-navy px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-100 transition"
          >
            Register Here
          </a>
        </div>

        {/* Conference Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-navy mb-4">Schedule</h2>
            <div className="text-navy space-y-3">
              <p><strong>Registration:</strong> 8:00am - 8:45am</p>
              <p><strong>Opening Ceremonies:</strong> 9:00am - 9:45am</p>
              <p><strong>Committee Session I:</strong> 10:00am - 12:00pm</p>
              <p><strong>Lunch (staggered):</strong> 12:00pm - 2:00pm</p>
              <p><strong>Committee Session II:</strong> 2:00pm - 4:00pm</p>
              <p><strong>Committee Session III:</strong> 4:00pm - 5:00pm</p>
              <p><strong>Closing Ceremonies:</strong> 5:15pm - 5:45pm</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-navy mb-4">Logistics</h2>
            <div className="text-navy space-y-3">
              <p><strong>Date:</strong> April 18th, 2026</p>
              <p><strong>Location:</strong> 3 Cedar St, Rye, NY 10580</p>
              <p><strong>Registration Fee:</strong> $40 per delegate</p>
              <p><strong>Lunch:</strong> Provided</p>
              <p><strong>Dress Code:</strong> Western Business Attire</p>
              <p><strong>Parking:</strong> Available on campus</p>
            </div>
          </div>
        </div>

        {/* Keynote Speaker */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-navy mb-6 text-center">Keynote Speaker</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-64 h-64 flex-shrink-0">
              <img 
                src="/media/Lilli_de_Brito_Schindler.png" 
                alt="Lilli de Brito Schindler"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-navy mb-2">Lilli de Brito Schindler</h3>
              <p className="text-navy font-semibold mb-4">Chief, Group Programmes & Public Inquiries Units, UN Department of Global Communications</p>
              <p className="text-navy leading-relaxed">
                Lilli de Brito Schindler works at the United Nations in the Department of Global Communications, where she is the Chief of the Group Programmes and the Public Inquiries Units in the Visitors Services Section/Outreach Division. Since joining the UN in 1993, she has worked in several offices in the Department of Global Communications, including the Office of the Spokesperson for the Secretary-General, the NGO Section, and the Academic Impact Office. Lilli graduated from Rye Country Day School, which she attended for 14 years, in 1983. She received her B.A. in International Relations from Brown University in 1987 and her M.A. in International Affairs from the School of International and Public Affairs at Columbia University in 1990. Lilli began her involvement in Model UN in 9th grade at RCDS and continued throughout high school and college, including serving as the Secretary-General of the National Model UN, the largest global Model UN conference for college students, in 1987. In her current role at the UN, she works closely with Model UN organizations and seeks to educate students and teachers about the UN's work. Lilli raised her family in Rye, NY, and currently resides in Greenwich, CT.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-navy mb-4">Additional Information</h2>
          <p className="text-navy leading-relaxed mb-4">
            RCDSMUNC I will bring together delegates from across the region to engage in meaningful diplomatic discussions and negotiations. This conference offers an excellent opportunity for both novice and experienced delegates to develop their skills.
          </p>
          <p className="text-navy leading-relaxed mb-4">
          <strong>Position Papers: </strong>Position papers are required to be eligible for an award at RCDSMUNC I. Please limit your paper to no more than two pages including a bibliography (Times New Roman size 12, 1.5 spacing). Please email your position paper to both of the chairs of your committee as a PDF. As a reminder, AI use is strictly prohibited in all writings.
          </p>
          <p className="text-navy leading-relaxed mb-4"><strong>AI Use Policy:</strong> Please note that there is a zero tolerance policy for Artificial Intelligence use at RCDSMUNC I for any written work, including but not limited to position papers, working documents, and resolutions. If a student's work is flagged for AI use or plagiarism, the student will be immediately disqualified from earning a delegation award, and their faculty advisor will be notified. </p>
          
          <p className="text-navy leading-relaxed">
            For questions or more information, please contact us at zara_khemlani@ryecountryday.org and kevin_neilinger@ryecountryday.org (and cc our faculty advisor, daniel_murray@ryecountryday.org)
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConferencePage