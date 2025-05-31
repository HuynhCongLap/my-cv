import React from 'react';
import { useEffect, useState } from 'react';

interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      try {
        const section = document.querySelector(href);
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const isInView = 
          rect.top <= 100 && rect.bottom >= 100;
        
        setIsActive(isInView);
      } catch (error) {
        console.error("Error in scroll handler:", error);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [href]);
  
  return (
    <a 
      href={href} 
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        onClick?.();
      }}
      className={`relative px-1 py-2 font-mono transition-colors duration-300 hover:text-accent-cyan ${
        isActive ? 'text-accent-cyan' : 'text-gray-300'
      }`}
    >
      {label}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
          isActive 
            ? 'bg-accent-cyan scale-x-100' 
            : 'bg-accent-cyan scale-x-0'
        }`} 
      />
    </a>
  );
};

export default NavItem;