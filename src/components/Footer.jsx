import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-6 h-6" src={logo} alt="appNest logo" />
            <span className="text-xl font-bold text_gradient">appNest</span>
          </div>
          <p className="text-gray-400 text-sm">
            appNest crafts innovative apps designed to make everyday life simpler, smarter, and more exciting. Explore, download, and stay productive!
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/apps" className="hover:text-white transition-colors">Apps</a>
          <a href="/installation" className="hover:text-white transition-colors">Installation</a>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Support</h3>
          <p className="hover:text-white transition-colors">Contact Us</p>
          <p className="hover:text-white transition-colors">FAQ</p>
          <p className="hover:text-white transition-colors">Privacy Policy</p>
        </div>

        {/* Newsletter / Call to Action */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Stay Updated</h3>
          <p className="text-gray-400 text-sm">Subscribe to our newsletter to get the latest updates on new apps and features.</p>
          <form className="flex mt-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-3 py-2 rounded-l bg-gray-800 text-gray-200 focus:outline-none w-full"
            />
            <button type="submit" className="px-4 py-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-r text-white font-semibold hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} appNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;