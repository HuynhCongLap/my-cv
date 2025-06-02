import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { SiArtstation } from 'react-icons/si'; // ✅ Icon từ react-icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 bg-dark-400 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Thông tin cá nhân */}
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple">
              Cong Lap HUYNH
            </p>
            <p className="text-gray-400 mt-2">3D Generalist & WebGL Developer</p>
          </div>

          {/* Icon mạng xã hội */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/HuynhCongLap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-cyan transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/cong-lap-huynh-1a10b3162/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://fallingibex9.artstation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-purple transition-colors"
              aria-label="ArtStation Profile"
            >
              <SiArtstation size={20} />
            </a>
          </div>
        </div>

        {/* Phần bản quyền */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Cong Lap HUYNH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
