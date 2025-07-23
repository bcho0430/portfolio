"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Facebook, MapPin, Phone, Download, Send, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitStatus("success")
    setIsSubmitting(false)

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitStatus("idle")
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and meaningful conversations. Let's connect and
            discuss how we can work together or simply share ideas over coffee.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <Link
                      href="mailto:brandon.cho@example.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      brandon.cho@example.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <Link
                      href="tel:+1234567890"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      (123) 456-7890
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">San Francisco Bay Area, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="https://linkedin.com/in/brandon-cho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <Linkedin className="text-blue-600" size={20} />
                  <span className="font-medium text-gray-900">LinkedIn</span>
                </Link>
                <Link
                  href="https://facebook.com/brandon.cho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <Facebook className="text-blue-600" size={20} />
                  <span className="font-medium text-gray-900">Facebook</span>
                </Link>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Resume</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Download my latest resume to learn more about my experience, education, and qualifications.
              </p>
              <Link
                href="/brandon-cho-resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 w-full justify-center"
              >
                <Download size={20} className="mr-2" />
                Download Resume (PDF)
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Send Me a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                  submitStatus === "success"
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <span>✓ Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {submitStatus === "success" && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  Thank you for your message! I'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What's the best way to reach you?</h4>
              <p className="text-gray-600 text-sm">
                Email is usually the fastest way to reach me. I typically respond within 24 hours during business days.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Are you available for freelance work?</h4>
              <p className="text-gray-600 text-sm">
                I'm selective about freelance projects but always open to discussing interesting opportunities that
                align with my interests.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you mentor students?</h4>
              <p className="text-gray-600 text-sm">
                Yes! I enjoy mentoring students interested in finance, technology, and entrepreneurship. Feel free to
                reach out.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can we grab coffee?</h4>
              <p className="text-gray-600 text-sm">
                I'm always up for meeting new people and having interesting conversations over coffee in the Bay Area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
