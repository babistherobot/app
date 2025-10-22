import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="label text-[#38FF62] mb-2">
              ROBOTICSLAB
            </h3>
            <p className="label-small">
              Building the future of autonomous systems
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center hover:border-[#38FF62] hover:text-[#38FF62] transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center hover:border-[#38FF62] hover:text-[#38FF62] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:alex@robotics.edu"
              className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center hover:border-[#38FF62] hover:text-[#38FF62] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center hover:border-[#38FF62] hover:text-[#38FF62] transition-all"
              aria-label="CV"
            >
              <FileText size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="label-small text-white/50">
            © 2024 ROBOTICSLAB. BUILDING FOR INNOVATION.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;