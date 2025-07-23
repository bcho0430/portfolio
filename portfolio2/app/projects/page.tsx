import { ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"

const projectsData = [
  {
    title: "FinTech Analytics Dashboard",
    description:
      "Built a comprehensive financial analytics platform that aggregates market data and provides real-time insights for investment decisions. Features include portfolio tracking, risk analysis, and automated reporting with machine learning-powered predictions.",
    image: "/placeholder.svg?height=300&width=500&text=FinTech+Dashboard",
    technologies: ["React", "Python", "PostgreSQL", "D3.js", "AWS", "TensorFlow", "Redis"],
    liveLink: "https://fintech-dashboard.example.com",
    githubLink: "https://github.com/brandon-cho/fintech-dashboard",
    period: "Mar 2023 - May 2023",
    category: "Finance & Technology",
    highlights: [
      "Processed 1M+ data points daily with 99.9% uptime using AWS infrastructure",
      "Reduced analysis time by 60% for portfolio managers through automated insights",
      "Implemented machine learning models for risk prediction with 85% accuracy",
      "Integrated with 5+ financial data providers including Bloomberg and Reuters",
    ],
    metrics: {
      users: "500+",
      dataPoints: "1M+",
      uptime: "99.9%",
    },
  },
  {
    title: "Campus Marketplace App",
    description:
      "Developed a mobile marketplace application for college students to buy, sell, and trade items within their campus community. Includes user authentication, payment processing, location-based features, and real-time messaging.",
    image: "/placeholder.svg?height=300&width=500&text=Campus+Marketplace",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe API", "Firebase", "Socket.io"],
    liveLink: "https://campus-marketplace.example.com",
    githubLink: "https://github.com/brandon-cho/campus-marketplace",
    period: "Sep 2022 - Dec 2022",
    category: "Mobile & E-commerce",
    highlights: [
      "Acquired 500+ active users within first month of launch across 3 universities",
      "Facilitated $10K+ in transactions between students with 0% fraud rate",
      "Achieved 4.8/5 star rating on both iOS and Android app stores",
      "Implemented real-time chat system handling 1000+ daily messages",
    ],
    metrics: {
      users: "500+",
      transactions: "$10K+",
      rating: "4.8/5",
    },
  },
  {
    title: "AI-Powered Resume Optimizer",
    description:
      "Created an intelligent resume optimization tool that uses natural language processing to analyze job descriptions and suggest improvements to resumes. Helps job seekers tailor their applications for better ATS compatibility and recruiter appeal.",
    image: "/placeholder.svg?height=300&width=500&text=Resume+Optimizer",
    technologies: ["Python", "OpenAI API", "Flask", "React", "Docker", "NLTK", "Pandas"],
    githubLink: "https://github.com/brandon-cho/resume-optimizer",
    period: "Jan 2023 - Feb 2023",
    category: "AI & Career Tools",
    highlights: [
      "Improved ATS pass rate by 40% for test users through keyword optimization",
      "Processed 1000+ resumes with 95% accuracy in skill extraction and matching",
      "Featured in UC Berkeley's innovation showcase and student newspaper",
      "Integrated with LinkedIn API for automatic profile data extraction",
    ],
    metrics: {
      improvement: "40%",
      resumes: "1000+",
      accuracy: "95%",
    },
  },
]

export default function Projects() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Projects</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects and creative solutions to real-world problems, spanning finance,
            technology, and social impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="lg:flex">
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{project.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="text-center bg-gray-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always interested in collaborating on innovative projects that solve real problems. Let's discuss how we
            can work together to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105"
            >
              Start a Conversation
              <ExternalLink size={16} className="ml-2" />
            </Link>
            <Link
              href="https://github.com/brandon-cho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105"
            >
              <Github size={16} className="mr-2" />
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
