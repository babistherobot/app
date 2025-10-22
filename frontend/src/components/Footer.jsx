import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-mono font-bold tracking-wider uppercase mb-4">
              RoboticsLab
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Robotics Engineer specializing in AI/ML, autonomous systems, and multi-robot coordination.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-wide mb-4 text-white/70">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-white/70 hover:text-[#00FF88] transition-colors">
                Projects
              </Link>
              <Link to="/publications" className="text-sm text-white/70 hover:text-[#00FF88] transition-colors">
                Publications
              </Link>
              <Link to="/about" className="text-sm text-white/70 hover:text-[#00FF88] transition-colors">
                About
              </Link>
              <Link to="/blog" className="text-sm text-white/70 hover:text-[#00FF88] transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-sm text-white/70 hover:text-[#00FF88] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-wide mb-4 text-white/70">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-white/20 hover:border-[#00FF88] hover:text-[#00FF88] transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-white/20 hover:border-[#00FF88] hover:text-[#00FF88] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:engineer@robotics.edu" 
                className="p-2 border border-white/20 hover:border-[#00FF88] hover:text-[#00FF88] transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-white/20 hover:border-[#00FF88] hover:text-[#00FF88] transition-all"
                aria-label="CV"
              >
                <FileText size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50 font-mono">
            © 2024 RoboticsLab. Built for innovation in autonomous systems.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;