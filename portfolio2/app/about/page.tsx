export default function About() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* About Content */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {/* Main About Text */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hello! I'm Brandon, a passionate strategist and builder with a deep interest in the intersection of
                  technology, finance, and creative problem-solving. I thrive on tackling complex challenges and finding
                  innovative solutions that drive meaningful impact.
                </p>

                <p>
                  My journey has taken me through various experiences in business strategy, financial analysis, and
                  technology development. From my internship at Goldman Sachs where I worked on M&A transactions, to my
                  product management role at Microsoft, I've gained valuable insights into how technology and finance
                  intersect to create value.
                </p>

                <p>
                  I believe in the power of data-driven decision making combined with creative thinking to solve today's
                  most pressing problems. Whether it's analyzing market trends, developing new products, or leading
                  entrepreneurial initiatives, I approach each challenge with curiosity and determination.
                </p>

                <p>
                  When I'm not working on projects, you can find me exploring new technologies, reading about market
                  trends, mentoring fellow students, or collaborating with like-minded individuals on innovative
                  ventures. I'm particularly interested in the future of fintech, sustainable technology, and how AI can
                  be leveraged to solve complex business problems.
                </p>
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Skills</h3>
                <div className="space-y-3">
                  {[
                    "Financial Modeling & Analysis",
                    "Strategic Planning",
                    "Product Management",
                    "Data Analysis",
                    "Leadership & Team Building",
                    "Market Research",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Interests</h3>
                <div className="space-y-3">
                  {[
                    "Fintech Innovation",
                    "Sustainable Technology",
                    "Artificial Intelligence",
                    "Venture Capital",
                    "Entrepreneurship",
                    "Market Analysis",
                  ].map((interest, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Personal Philosophy */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-semibold mb-4">My Philosophy</h3>
              <p className="text-lg italic">
                "The best solutions emerge at the intersection of analytical rigor and creative thinking. I believe in
                building bridges between technology and finance to create lasting value."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
