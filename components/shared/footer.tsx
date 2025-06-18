import React from 'react'
import { Facebook, Instagram, Linkedin, MessageCircle, Home, Info, Copyright } from 'lucide-react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Home size={16} />
                <span>Home</span>
              </Link>
              <a href="/about" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Info size={16} />
                <span>About</span>
              </a>
              <Link href="/copyright" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300">
                <Copyright size={16} />
                <span>Copyright</span>
              </Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Follow Us</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Facebook size={16} />
                <span>Facebook</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-300 transition-colors duration-300"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://wa.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Contact/Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Contact</h3>
            <div className="text-gray-400">
              <p className="mb-2">Get in touch with us through our social media channels or visit our website.</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </div>
            
            {/* Designed By */}
            <div className="text-gray-500 text-sm">
              Designed by <span className="text-white font-medium hover:text-gray-300 transition-colors duration-300">Dehsen Tech</span>
            </div>
            
            {/* Social Icons Row for Mobile */}
            <div className="flex space-x-4 md:hidden">
              <a href="https://www.instagram.com/deshentech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="www.linkedin.com/in/favour-ngozi-6a72b2222" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer