import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glowColor?: 'cyan' | 'purple' | 'blue' | 'green';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  glowColor = 'cyan',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-mono font-medium transition-all duration-300 focus:outline-none';
  
  const variantStyles = {
    primary: `bg-gradient-to-r border-0 ${
      glowColor === 'cyan' ? 'from-accent-cyan to-accent-blue' :
      glowColor === 'purple' ? 'from-accent-purple to-accent-blue' :
      glowColor === 'blue' ? 'from-accent-blue to-accent-cyan' :
      'from-accent-green to-accent-cyan'
    } text-black hover:shadow-lg hover:brightness-110`,
    outline: `bg-transparent border border-${glowColor === 'cyan' ? 'accent-cyan' : 
      glowColor === 'purple' ? 'accent-purple' : 
      glowColor === 'blue' ? 'accent-blue' : 
      'accent-green'} hover:bg-gray-800`,
    ghost: 'bg-transparent border-0 hover:bg-gray-800',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg',
  };
  
  const glowStyles = {
    cyan: 'hover:shadow-neon-cyan',
    purple: 'hover:shadow-neon-purple',
    blue: 'hover:shadow-neon-blue',
    green: 'hover:shadow-[0_0_5px_rgba(0,255,140,0.7),_0_0_10px_rgba(0,255,140,0.5)]',
  };
  
  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${glowStyles[glowColor]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;