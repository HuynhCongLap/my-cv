import React, { ReactNode, forwardRef } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'blue' | 'green' | 'yellow' | 'red';
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className = '',
  glowColor = 'cyan'
}, ref) => {
  const glowMap: Record<string, string> = {
    cyan: 'shadow-neon-cyan border-accent-cyan hover:border-accent-cyan',
    purple: 'shadow-neon-purple border-accent-purple hover:border-accent-purple',
    blue: 'shadow-neon-blue border-accent-blue hover:border-accent-blue',
    green: 'shadow-neon-green border-accent-green hover:border-accent-green',
    yellow: 'shadow-neon-yellow border-accent-yellow hover:border-accent-yellow',
    red: 'shadow-neon-red border-accent-red hover:border-accent-red',
  };

  return (
    <div
      ref={ref}
      className={`
        relative glass-card overflow-hidden p-6 
        border transition-all duration-300 
        hover:-translate-y-1
        ${glowMap[glowColor]} 
        ${className}
      `}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card'; // 👈 Thêm dòng này để tránh cảnh báo React

export default Card;
