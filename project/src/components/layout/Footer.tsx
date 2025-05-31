import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-400 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple">
              JOHN.DEV
            </p>
            <p className="text-gray-400 mt-2">3D Technical Artist & WebGL Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-cyan transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-purple transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-400 hover:text-accent-green transition-colors"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;