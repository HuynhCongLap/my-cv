import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'blue' | 'green' | 'yellow' | 'red';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'cyan'
}) => {
  const glowMap = {
    cyan: 'shadow-neon-cyan border-accent-cyan',
    purple: 'shadow-neon-purple border-accent-purple',
    blue: 'shadow-neon-blue border-accent-blue',
    green: 'hover:border-accent-green',
    yellow: 'hover:border-accent-yellow',
    red: 'hover:border-accent-red',
  };
  
  return (
    <div 
      className={`
        relative glass-card overflow-hidden p-6 
        border border-gray-800 transition-all duration-300
        hover:${glowMap[glowColor]} hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;