import Link from "next/link"
import { Linkedin, Facebook, Mail, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            <Link
              href="mailto:brandon.cho@example.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
              aria-label="Email Brandon"
            >
              <Mail size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/brandon-cho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://facebook.com/brandon.cho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
              aria-label="Facebook Profile"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="https://github.com/brandon-cho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Brandon Cho. All rights reserved.</p>
            <p className="text-xs text-gray-400 mt-1">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
