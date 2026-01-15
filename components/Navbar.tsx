
import React, { useState, useEffect } from 'react';
import { Menu, X, User, LogIn, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-blue-600' : 'text-blue-600 md:text-white'}`}>
              DOC<span className={isScrolled ? 'text-slate-800' : 'text-slate-800 md:text-blue-100'}>CURE</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Doctors', 'Patients', 'Pharmacy', 'Pages', 'Blogs'].map((item) => (
              <div key={item} className="group relative flex items-center cursor-pointer">
                <span className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}>
                  {item}
                </span>
                <ChevronDown className={`ml-1 w-4 h-4 transition-colors ${isScrolled ? 'text-slate-400 group-hover:text-blue-600' : 'text-blue-100 group-hover:text-white'}`} />
              </div>
            ))}
          </div>

          {/* Dual Audience CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`px-4 py-2 text-sm font-semibold rounded-lg flex items-center transition-all ${isScrolled ? 'text-blue-600 border border-blue-600 hover:bg-blue-50' : 'text-white border border-white hover:bg-white/10'}`}>
              <User className="w-4 h-4 mr-2" />
              Sign Up
            </button>
            <button className={`px-6 py-2 text-sm font-semibold rounded-lg shadow-lg flex items-center transition-all ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-blue-50'}`}>
              <LogIn className="w-4 h-4 mr-2" />
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? 'text-slate-800' : 'text-white'} p-2`}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['Home', 'Doctors', 'Patients', 'Pharmacy', 'Pages', 'Blogs'].map((item) => (
              <a key={item} href="#" className="block px-3 py-4 text-base font-medium text-slate-700 border-b border-gray-100">
                {item}
              </a>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-4">
              <button className="w-full px-4 py-3 text-sm font-semibold text-blue-600 border border-blue-600 rounded-lg">Sign Up</button>
              <button className="w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-lg">Register</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
