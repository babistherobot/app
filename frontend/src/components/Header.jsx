import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-mono font-bold tracking-wider uppercase hover:text-[#00FF88] transition-colors">
            RoboticsLab
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-mono uppercase tracking-wide transition-opacity hover:opacity-70 ${
                location.pathname === '/' ? 'text-[#00FF88]' : 'text-white'
              }`}
            >
              Projects
            </Link>
            <Link 
              to="/publications" 
              className={`text-sm font-mono uppercase tracking-wide transition-opacity hover:opacity-70 ${
                location.pathname === '/publications' ? 'text-[#00FF88]' : 'text-white'
              }`}
            >
              Publications
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-mono uppercase tracking-wide transition-opacity hover:opacity-70 ${
                location.pathname === '/about' ? 'text-[#00FF88]' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-mono uppercase tracking-wide transition-opacity hover:opacity-70 ${
                location.pathname === '/blog' ? 'text-[#00FF88]' : 'text-white'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-mono uppercase tracking-wide transition-opacity hover:opacity-70 ${
                location.pathname === '/contact' ? 'text-[#00FF88]' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block px-4 py-2 border border-white/20 text-sm font-mono uppercase tracking-wide hover:bg-white/5 transition-all"
            >
              View CV
            </a>
            <a 
              href="mailto:engineer@robotics.edu" 
              className="px-4 py-2 bg-[#00FF88] text-black text-sm font-mono uppercase tracking-wide hover:bg-[#00DD77] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;