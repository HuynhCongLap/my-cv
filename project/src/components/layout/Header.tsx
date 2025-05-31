import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavItem from '../ui/NavItem';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-300/80 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#top" 
          className="text-xl md:text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple"
        >
          PIN.DEV
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-200 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-300/95 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavItem 
                key={item.href} 
                href={item.href} 
                label={item.label} 
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;