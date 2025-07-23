import { Calendar, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

const experienceData = [
  {
    company: "Goldman Sachs",
    position: "Investment Banking Summer Analyst",
    period: "Jun 2023 - Aug 2023",
    location: "New York, NY",
    type: "Internship",
    description:
      "Worked on M&A transactions and financial modeling for technology sector clients in the Investment Banking Division.",
    achievements: [
      "Built comprehensive financial models for 3 major M&A transactions totaling $2.5B in deal value",
      "Conducted industry research and competitive analysis for tech sector deals, supporting senior bankers",
      "Prepared pitch materials and client presentations for C-suite executives and board meetings",
      "Collaborated with cross-functional teams including legal, compliance, and operations to execute complex transactions",
      "Analyzed market trends and valuation multiples to support deal pricing and negotiation strategies",
    ],
    skills: ["Financial Modeling", "Valuation", "M&A Analysis", "Excel", "PowerPoint", "Bloomberg Terminal"],
    logo: "/placeholder.svg?height=60&width=60&text=GS",
  },
  {
    company: "Microsoft",
    position: "Product Management Intern",
    period: "Jun 2022 - Aug 2022",
    location: "Seattle, WA",
    type: "Internship",
    description: "Contributed to product strategy and feature development for Microsoft Teams collaboration platform.",
    achievements: [
      "Led user research initiative involving 500+ enterprise customers that informed Q4 2022 product roadmap",
      "Designed and prototyped new collaboration features using Figma, impacting 10M+ daily active users",
      "Analyzed user engagement data using SQL and Python, identifying optimization opportunities that improved retention by 15%",
      "Presented findings and recommendations to VP of Product and influenced strategic product decisions",
      "Collaborated with engineering teams to define technical requirements and implementation timelines",
    ],
    skills: ["Product Strategy", "User Research", "Data Analysis", "SQL", "Python", "Figma", "A/B Testing"],
    logo: "/placeholder.svg?height=60&width=60&text=MSFT",
  },
  {
    company: "UC Berkeley Entrepreneurship Club",
    position: "President",
    period: "Sep 2022 - May 2023",
    location: "Berkeley, CA",
    type: "Leadership",
    description:
      "Led the largest entrepreneurship organization on campus with 500+ members, fostering innovation and startup culture.",
    achievements: [
      "Organized 12 major events including pitch competitions, networking sessions, and speaker series with industry leaders",
      "Secured $50K in sponsorship funding from leading VC firms including Andreessen Horowitz and Sequoia Capital",
      "Mentored 20+ student entrepreneurs in developing their startup ideas, with 3 teams receiving seed funding",
      "Increased club membership by 40% through strategic outreach, social media campaigns, and partnership development",
      "Established partnerships with Bay Area accelerators and incubators to provide members with internship opportunities",
    ],
    skills: [
      "Leadership",
      "Event Management",
      "Fundraising",
      "Mentoring",
      "Partnership Development",
      "Public Speaking",
    ],
    logo: "/placeholder.svg?height=60&width=60&text=UCB",
  },
  {
    company: "Berkeley Finance Society",
    position: "VP of External Relations",
    period: "Jan 2022 - Dec 2022",
    location: "Berkeley, CA",
    type: "Leadership",
    description:
      "Managed external partnerships and corporate relations for the premier finance organization at UC Berkeley.",
    achievements: [
      "Established partnerships with 15+ financial institutions including JPMorgan, Morgan Stanley, and BlackRock",
      "Coordinated recruitment events and info sessions, facilitating 200+ student-recruiter interactions",
      "Organized annual finance conference with 300+ attendees and speakers from top-tier investment banks",
      "Developed corporate sponsorship program that generated $25K in funding for student programming",
      "Created mentorship program connecting 50+ students with finance professionals",
    ],
    skills: [
      "Corporate Relations",
      "Event Coordination",
      "Networking",
      "Sponsorship Development",
      "Program Management",
    ],
    logo: "/placeholder.svg?height=60&width=60&text=BFS",
  },
]

export default function Experience() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Experience</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey spans finance, technology, and leadership roles, providing me with diverse
            perspectives on business strategy and innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-blue-300 hidden lg:block"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block z-10"></div>

                <div className="lg:ml-16">
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={exp.logo || "/placeholder.svg"}
                          alt={`${exp.company} logo`}
                          className="w-16 h-16 rounded-xl object-contain bg-gray-50 p-3 border border-gray-200"
                        />
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                            <span
                              className={`px-3 py-1 text-xs font-medium rounded-full ${
                                exp.type === "Internship" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                              }`}
                            >
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-lg text-blue-600 font-semibold mb-2">{exp.company}</p>
                          <div className="flex items-center space-x-4 text-gray-600 mb-3">
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span className="text-sm font-medium">{exp.period}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Working Together?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or simply connecting with like-minded
            professionals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
          >
            Get In Touch
            <ExternalLink size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}
