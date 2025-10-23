import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, FileText } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleProjectsClick = () => {
    if (location.pathname === '/') {
      scrollToSection('projects');
    } else {
      navigate('/projects');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="label text-[#38FF62] hover:opacity-70 transition-opacity"
          >
            braib
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`label-small transition-colors ${
                activeSection === 'home' ? 'text-[#38FF62]' : 'text-white hover:text-[#38FF62]'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`label-small transition-colors ${
                activeSection === 'projects' ? 'text-[#38FF62]' : 'text-white hover:text-[#38FF62]'
              }`}
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`label-small transition-colors ${
                activeSection === 'skills' ? 'text-[#38FF62]' : 'text-white hover:text-[#38FF62]'
              }`}
            >
              SKILLS
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`label-small transition-colors ${
                activeSection === 'about' ? 'text-[#38FF62]' : 'text-white hover:text-[#38FF62]'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`label-small transition-colors ${
                activeSection === 'contact' ? 'text-[#38FF62]' : 'text-white hover:text-[#38FF62]'
              }`}
            >
              CONTACT
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 border border-white/20 label-small hover:border-[#38FF62] hover:text-[#38FF62] transition-all"
            >
              <FileText size={14} />
              CV
            </a>
            <a
              href="mailto:alex@robotics.edu"
              className="flex items-center gap-2 px-4 py-2 bg-[#38FF62] text-[#0a0a0a] label-small hover:bg-[#2AE052] transition-colors"
            >
              <Mail size={14} />
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;