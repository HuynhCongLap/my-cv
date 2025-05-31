import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Card from './Card';

interface TimelineItemProps {
  date: string;
  title: string;
  company?: string;
  description: string;
  isLeft?: boolean;
  glowColor?: 'cyan' | 'purple' | 'blue' | 'green';
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  company,
  description,
  isLeft = false,
  glowColor = 'cyan'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cardRef.current) return;
    
    gsap.fromTo(
      cardRef.current,
      { 
        opacity: 0, 
        x: isLeft ? -50 : 50 
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, [isLeft]);
  
  return (
    <div className={`flex flex-col md:flex-row items-center mb-12 last:mb-0 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline line and dot */}
      <div className="hidden md:block w-1/2" />
      <div className="relative hidden md:flex justify-center items-center w-10 h-full mx-4">
        <div className="h-full w-0.5 bg-gray-700"></div>
        <div className={`absolute w-4 h-4 rounded-full bg-${glowColor === 'cyan' ? 'accent-cyan' : 
          glowColor === 'purple' ? 'accent-purple' : 
          glowColor === 'blue' ? 'accent-blue' : 
          'accent-green'}`} />
      </div>
      
      {/* Content */}
      <div ref={cardRef} className="w-full md:w-1/2 md:px-4">
        <Card glowColor={glowColor} className="relative">
          <div className="text-sm font-mono text-gray-400 mb-1">{date}</div>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          {company && <div className="text-accent-cyan mb-3">{company}</div>}
          <p className="text-gray-300">{description}</p>
        </Card>
      </div>
    </div>
  );
};

export default TimelineItem;