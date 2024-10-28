import React from 'react';
import { Menu, X } from 'lucide-react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/victory-ai-logo.png" alt="Victory AI" className="h-12" />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#assessment" className="text-gray-600 hover:text-gray-900">Assessment</a>
              <a href="#dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="https://www.victoryai.academy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Our Schools</a>
              <button className="bg-[#F4B223] text-white px-4 py-2 rounded-md hover:bg-[#E5A420]">
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
              <a href="#assessment" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Assessment</a>
              <a href="#dashboard" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="https://www.victoryai.academy" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Our Schools</a>
              <button className="w-full text-left px-3 py-2 bg-[#F4B223] text-white rounded-md hover:bg-[#E5A420]">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/victory-ai-logo.png" alt="Victory AI" className="h-12" />
              <p className="mt-2 text-gray-600">
                Empowering every student to achieve their maximum potential.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Case Studies</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600">
              © {new Date().getFullYear()} Victory AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};