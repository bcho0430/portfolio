import { GraduationCap, Calendar, Award } from "lucide-react"

const educationData = [
  {
    school: "University of California, Berkeley",
    degree: "Bachelor of Science in Business Administration",
    major: "Finance",
    minor: "Computer Science",
    period: "2020 - 2024",
    gpa: "3.8/4.0",
    honors: ["Dean's List (6 semesters)", "Finance Honor Society"],
    coursework: [
      "Corporate Finance",
      "Investment Analysis",
      "Data Structures & Algorithms",
      "Financial Modeling",
      "Strategic Management",
      "Machine Learning Fundamentals",
      "Behavioral Finance",
      "Database Systems",
    ],
    description:
      "Focused on the intersection of finance and technology, with coursework spanning both traditional business disciplines and modern computer science applications.",
  },
  {
    school: "Stanford University",
    degree: "Summer Program",
    major: "Entrepreneurship & Innovation",
    period: "Summer 2023",
    coursework: [
      "Venture Capital & Private Equity",
      "Startup Strategy",
      "Product Management",
      "Design Thinking",
      "Lean Startup Methodology",
      "Pitch Development",
    ],
    description:
      "Intensive program focused on entrepreneurial thinking and innovation in the Silicon Valley ecosystem.",
  },
]

export default function Education() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Education</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey has provided a strong foundation in both business and technology, preparing me for the
            intersection of finance and innovation.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <GraduationCap className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.school}</h3>
                    <p className="text-lg text-gray-700 font-semibold mb-1">{edu.degree}</p>
                    <p className="text-gray-600 mb-2">
                      Major: {edu.major}
                      {edu.minor && ` • Minor: ${edu.minor}`}
                    </p>
                    {edu.gpa && (
                      <div className="flex items-center space-x-2 mb-2">
                        <Award size={16} className="text-blue-600" />
                        <span className="text-gray-600 font-medium">GPA: {edu.gpa}</span>
                      </div>
                    )}
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 mt-4 lg:mt-0 bg-gray-50 px-4 py-2 rounded-lg">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{edu.period}</span>
                </div>
              </div>

              {/* Honors */}
              {edu.honors && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Honors & Recognition</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.honors.map((honor, honorIndex) => (
                      <span
                        key={honorIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Relevant Coursework */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Relevant Coursework</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.coursework.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <h4 className="font-semibold text-gray-900">CFA Level I</h4>
                <p className="text-sm text-gray-600">Candidate (2024)</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <h4 className="font-semibold text-gray-900">Python for Finance</h4>
                <p className="text-sm text-gray-600">Coursera (2023)</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                <h4 className="font-semibold text-gray-900">AWS Cloud Practitioner</h4>
                <p className="text-sm text-gray-600">Amazon (2023)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
